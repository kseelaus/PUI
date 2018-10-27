



$(document).ready(() => {
    //load shopping cart from local memory & update number in cart//
    var shoppingcart = JSON.parse(localStorage.getItem("savedCart"));
    console.log(shoppingcart)
    var cartlength = shoppingcart.length
    $("#amountincart").text(cartlength);
    console.log(cartlength)

    //check shopping cart.  If empty, display 'empty' message.  Otherwise, loop through objects in array and add html code for each//
    var $emptycart = $('#emptycart');
    var $cartlist = $('#cartlist');
    if(cartlength == 0){
        $emptycart.show()
    } else {
        var totalPrice = 0.00;
        var totalQuant = 0;
        for (i = 0; i < cartlength; i++){
            var currentItem = shoppingcart[i];
            var tempName = currentItem.name;
            var tempQuant = currentItem.quantity;
            var tempColor = currentItem.color;
            var tempSize = currentItem.size;
            var tempPrice = currentItem.price;

            //track total price and quantity of items//
            console.log(tempPrice)
            totalPrice += parseFloat(tempPrice);
            totalQuant += parseInt(tempQuant);
            console.log(tempPrice)

            //write and add html code for each item with specific product details
            var itemNum = i +1
            var tempCode = "<div class = 'cartitem'><h1 class=itemnum>"+itemNum+") "+tempName+
            "</h1><h3>Quantity: <span class='data'>"+tempQuant+"</span></h3><h3>Color: <span class='data'>"+tempColor+
            "</span></h3><h3>Size: <span class='data'>"+tempSize+"</span></h3><h3>Price: <span class='data'>$"+tempPrice+
            "</span></h3><div class='edit'><h3>Edit</h3></div><div class='remove'><h3>Remove</h3></div></div>";
            $cartlist.append(tempCode);

        }
        //update total price and quantity of items in cart//
        $("#totalQuant").text(totalQuant);
        $("#totalPrice").text(totalPrice.toFixed(2));
    }

    //funtionality for 'remove' item button//
    $(document).on('click', '.remove', function(){
        //select index of item removed by serching up then down DOM//
        var itemquant = $(this).closest('.cartitem').find('.itemnum').text();
        var itemindex = parseInt(itemquant) - 1;
        //remove from shoppingcart array//
        shoppingcart.splice(itemindex, 1);
        console.log(shoppingcart);
        //update local storage & and reload page to update previous code//
        localStorage.setItem("savedCart", JSON.stringify(shoppingcart));
        location.reload();
    });

    /*make click options clearer by pointer on hover - there's probably a more efficient way to do this...*/
    $(".remove").hover(function() {
        $(this).css('cursor','pointer');
    });
    $(".edit").hover(function() {
        $(this).css('cursor','pointer');
    });
    $("#checkoutButton").hover(function() {
        $(this).css('cursor','pointer');
    });
});

