


$(document).ready(()=>{
    var shoppingcart = JSON.parse(localStorage.getItem("savedCart"));
    var cartlength = shoppingcart.length
    $("#amountincart").text(cartlength);


    $(document).on("click", "#quantplus", function() {
        var quant = $("#quantnum").text();
        var newquant = parseInt(quant) + 1;
        $("#quantnum").text(newquant);
    
        var price = $("#totalprice").text();
        var newprice = parseFloat(price) + 35.99;
        $("#totalprice").text(newprice.toFixed(2));
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
        if($("#quantnum").text() == 0){
            $("#addcart").css('backgroundColor', "#0B3142");
        }
    });
    
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

    $(document).on("click", ".sizechoice", function() {
        var size = $(this).text();
        $("#sizename").text(size);
    
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
        
        if ($("#sizename").text() != "Select Size" && $("#quantnum").text() != 0){
            $("#addcart").css('backgroundColor', "#ACF39D");
        } else {
            $("#addcart").css('backgroundColor', "#0B3142");
        }
        $colorDropdown.hide();
    });

    class item{
        constructor(price, name, color, size, quantity){
            this.price = price
            this.name = name
            this.color = color
            this.size = size
            this.quantity = quantity
            
        }
    }

    var $confirmation = $('#confirmation');

    if (shoppingcart == undefined){
        var shoppingcart = [];
    }

    $(document).on("click", "#addcart", function() {
        if ($("#sizename").text() != "Select Size" && 
        $("#colorname").text() != "Select Color" && 
        $("#quantnum").text() != 0){

            var harness = new item($("#totalprice").text(), $("#itemtitle").text(), 
            $("#colorname").text(), $("#sizename").text(), $("#quantnum").text());
            shoppingcart.push(harness);
            
            console.log(shoppingcart);
            console.log(harness);
            
            $("#itemquant").text(harness.quantity);
            $("#itemcolor").text(harness.color);
            $("#itemsize").text(harness.size);
            $("#itemprice").text(harness.price);
            $("#confitemname").text(harness.name);
    
            $confirmation.show();
    
        }else{
            console.log("fail")
        }
        localStorage.setItem("savedCart", JSON.stringify(shoppingcart));
        $("#amountincart").text(shoppingcart.length);
    });

    $(document).on("click", "#undo", function() {
        shoppingcart.pop();
        $confirmation.hide();
        console.log("removed");
        console.log(shoppingcart);
        localStorage.setItem("savedCart", JSON.stringify(shoppingcart)); 
        $("#amountincart").text(shoppingcart.length);
    });
    
    $(document).on("click", "#continue", function() {
        $(confirmation).hide();
    });

    $("#addcart").hover(function() {
        if ($("#sizename").text() != "Select Size" && 
        $("#colorname").text() != "Select Color" && 
        $("#quantnum").text() != 0){
            $(this).css('cursor','pointer');
        }
    });

    /*make click options clearer by pointer on hover*/

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


