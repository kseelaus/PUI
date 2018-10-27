
$(document).ready(()=>{

//load shopping cart from local memory & update number in cart//
    var shoppingcart = JSON.parse(localStorage.getItem("savedCart"));
    var cartlength = shoppingcart.length
    $("#amountincart").text(cartlength);

//update quantity and price when + or - clicked//
    $(document).on("click", "#quantplus", function() {
        var quant = $("#quantnum").text();
        var newquant = parseInt(quant) + 1;
        $("#quantnum").text(newquant);
    
        var price = $("#totalprice").text();
        var newprice = parseFloat(price) + 35.99;
        $("#totalprice").text(newprice.toFixed(2));

        //only allow clicking of "add to cart" of options are selected and quantity more than 0//
        if ($("#sizename").text() != "Select Size" && $("#colorname").text() != "Select Color"){
            $("#addcart").css('backgroundColor', "#ACF39D");
        } else {
            $("#addcart").css('backgroundColor', "#0B3142");
        }
    });
    $(document).on("click", "#quantminus", function() {
        if($("#quantnum").text() > 0) {
            var quant = $("#quantnum").text();
            newquant = parseInt(quant) - 1;
            $("#quantnum").text(newquant);
    
            var price = $("#totalprice").text();
            newprice = parseFloat(price) - 35.99;
            $("#totalprice").text(newprice.toFixed(2));
        }
        //can't have less than 0// 
        if($("#quantnum").text() == 0){
            $("#addcart").css('backgroundColor', "#0B3142");
        }
    });
    
    //dropdown menu functionality for size and color selection//
    var $colorselect = $('#colorselect');
    var $colorDropdown = $('#colorDropdown');
  
    $colorselect.on('click', () => {
      $colorDropdown.toggle();
    })
    
    $colorDropdown.on('mouseleave', () => {
      $colorDropdown.hide();
    })

    var $sizeselect = $('#sizeselect');
    var $sizeDropdown = $('#sizeDropdown');

    $sizeselect.on('click', () => {
        $sizeDropdown.toggle();
    })
    $sizeDropdown.on('mouseleave', () => {
        $sizeDropdown.hide();
    })

    //update color and size when option is selected//
    $(document).on("click", ".sizechoice", function() {
        var size = $(this).text();
        $("#sizename").text(size);
        //only allow clicking of "add to cart" of options are selected and quantity more than 0//
        if ($("#colorname").text() != "Select Color" && $("#quantnum").text() != 0){
            $("#addcart").css('backgroundColor', "#ACF39D");
        } else {
            $("#addcart").css('backgroundColor', "#0B3142");
        }

        $sizeDropdown.hide();
    
    });
    
    $(document).on("click", ".colorchoice", function() {
        var color = $(this).text();
        $("#colorname").text(color);
        //only allow clicking of "add to cart" of options are selected and quantity more than 0//
        if ($("#sizename").text() != "Select Size" && $("#quantnum").text() != 0){
            $("#addcart").css('backgroundColor', "#ACF39D");
        } else {
            $("#addcart").css('backgroundColor', "#0B3142");
        }
        $colorDropdown.hide();
    });


    //define item object class for items in shoppingcart array
    class item{
        constructor(price, name, color, size, quantity){
            this.price = price
            this.name = name
            this.color = color
            this.size = size
            this.quantity = quantity
            
        }
    }
    // if no shopping cart yet, define array//
    if (shoppingcart == undefined){
        var shoppingcart = [];
    }

    //when item added to cart, create object containing product details and add to array, then update in local storage//
    var $confirmation = $('#confirmation');
    $(document).on("click", "#addcart", function() {
        //only allow if options selected//
        if ($("#sizename").text() != "Select Size" && 
        $("#colorname").text() != "Select Color" && 
        $("#quantnum").text() != 0){
            
            var harness = new item($("#totalprice").text(), $("#itemtitle").text(), 
            $("#colorname").text(), $("#sizename").text(), $("#quantnum").text());
            shoppingcart.push(harness);
            
            console.log(shoppingcart);
            console.log(harness);
            
            //update code for confirmation window with selected product details and display window//
            $("#itemquant").text(harness.quantity);
            $("#itemcolor").text(harness.color);
            $("#itemsize").text(harness.size);
            $("#itemprice").text(harness.price);
            $("#confitemname").text(harness.name);
            $confirmation.show();
    
        }else{
            console.log("fail")
        }

        //update local storage and number in cart displayed in navbar//
        localStorage.setItem("savedCart", JSON.stringify(shoppingcart));
        $("#amountincart").text(shoppingcart.length);
    });

    //functionality for buttons on confirmation window//
    $(document).on("click", "#undo", function() {
        shoppingcart.pop();
        $confirmation.hide();
        console.log("removed");
        console.log(shoppingcart);
        //update local storage and number in cart displayed in navbar//
        localStorage.setItem("savedCart", JSON.stringify(shoppingcart)); 
        $("#amountincart").text(shoppingcart.length);
    });
    
    $(document).on("click", "#continue", function() {
        $(confirmation).hide();
    });

    //indicate clickability only if options selected//
    $("#addcart").hover(function() {
        if ($("#sizename").text() != "Select Size" && 
        $("#colorname").text() != "Select Color" && 
        $("#quantnum").text() != 0){
            $(this).css('cursor','pointer');
        }
    });

    /*make click options clearer by pointer on hover - there's probably a more efficient way to do this...*/

    $(".dropdown").hover(function() {
        $(this).css('cursor','pointer');
    });
    $(".colorchoice").hover(function() {
        $(this).css('cursor','pointer');
    });

    $(".sizechoice").hover(function() {
        $(this).css('cursor','pointer');
    });

    $("#quantplus").hover(function() {
        $(this).css('cursor','pointer');
    });
    $("#quantminus").hover(function() {
        $(this).css('cursor','pointer');
    });

    $("#undo").hover(function() {
        $(this).css('cursor','pointer');
    });
    $("#continue").hover(function() {
        $(this).css('cursor','pointer');
    });


});


