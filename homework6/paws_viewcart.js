



$(document).ready(() => {
    var shoppingcart = JSON.parse(localStorage.getItem("savedCart"));
    console.log(shoppingcart)
    
    var cartlength = shoppingcart.length
    $("#amountincart").text(cartlength);

    console.log(cartlength)
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

            console.log(tempPrice)
            totalPrice += parseFloat(tempPrice);
            totalQuant += parseInt(tempQuant);
            console.log(tempPrice)

            var itemNum = i +1
            var tempCode = "<div class = 'cartitem'><h1 class=itemnum>"+itemNum+") "+tempName+
            "</h1><h3>Quantity: <span class='data'>"+tempQuant+"</span></h3><h3>Color: <span class='data'>"+tempColor+
            "</span></h3><h3>Size: <span class='data'>"+tempSize+"</span></h3><h3>Price: <span class='data'>$"+tempPrice+
            "</span></h3><div class='edit'><h3>Edit</h3></div><div class='remove'><h3>Remove</h3></div></div>";

            $cartlist.append(tempCode);

        }
        $("#totalQuant").text(totalQuant);
        $("#totalPrice").text(totalPrice.toFixed(2));
    }
    console.log(shoppingcart);
    $(document).on('click', '.remove', function(){
        var itemquant = $(this).closest('.cartitem').find('.itemnum').text();
        var itemindex = parseInt(itemquant) - 1;
        shoppingcart.splice(itemindex, 1);
        console.log(shoppingcart);
        localStorage.setItem("savedCart", JSON.stringify(shoppingcart));
        location.reload();
    });


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

