$(document).ready(function() {

// mobile menu button toggle

    var menu = $(".menu");
    var menuBtn = $(".mobile-menu-button");

    // menuBtn.on("click",function(){
    //     menu.toggle();
    //     console.log("show");
    // });

    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        menu.toggle();
    });

});