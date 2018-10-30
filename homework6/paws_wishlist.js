
//Almost all funtionality is copied from the shopping cart page, smost names don't really make much sense here//

$(document).ready(() => {
    //load shopping cart from local memory & update number in cart//
    var shoppingcart = JSON.parse(localStorage.getItem("savedWishlist"));
    var actualcart = JSON.parse(localStorage.getItem("savedCart"));
    var cartlength = shoppingcart.length;
    var actualcartlength = actualcart.length
    $("#amountincart").text(actualcartlength);

    //check shopping cart.  If empty, display 'empty' message.  Otherwise, loop through objects in array and add html code for each//
    var $emptycart = $('#emptycart');
    var $cartlist = $('#cartlist');
    if(cartlength == 0){
        $emptycart.show()
    } else {
        for (i = 0; i < cartlength; i++){
            var currentItem = shoppingcart[i];
            var tempName = currentItem.name;
            var tempQuant = currentItem.quantity;
            var tempColor = currentItem.color;
            var tempSize = currentItem.size;
            var tempPrice = currentItem.price;

            //write and add html code for each item with specific product details
            var itemNum = i +1
            var tempCode = "<div class = 'cartitem'><h1 class=itemnum>"+itemNum+") "+tempName+
            "</h1><h3>Quantity: <span class='data'>"+tempQuant+"</span></h3><h3>Color: <span class='data'>"+tempColor+
            "</span></h3><h3>Size: <span class='data'>"+tempSize+"</span></h3><h3>Price: <span class='data'>$"+tempPrice+
            "</span></h3><div class='edit'><h3>Edit</h3></div><div class='remove'><h3>Remove</h3></div></div>";
            $cartlist.append(tempCode);

        }
        
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
        localStorage.setItem("savedWishlist", JSON.stringify(shoppingcart));
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

