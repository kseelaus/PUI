$(document).ready(()=>{

    $(".projectSquare").hover(function(){
        var description = $(this).find(".description");
        var image = $(this).find(".projectPic");
        var name = $(this).find(".projectName");
        description.fadeIn();
        console.log("hovered")
    }, function(){
        var description = $(this).find(".description");
        description.fadeOut();
    });

    $(".workSquare").hover(function(){
        var description = $(this).find(".description");
        var image = $(this).find(".workPic");
        var name = $(this).find(".workName");
        description.fadeIn();
        console.log("hovered")
    }, function(){
        var description = $(this).find(".description");
        description.fadeOut();
    });

    $(".hamburger").click(function(){
        var menu = $(".navMenu");
        menu.slideToggle();
    });

});