$(document).ready(function() {

// mobile menu button toggle

    var menu = $(".menu");
    var menuBtn = $("#mobile-menu-btn");

    $(menuBtn).on("click",function(){
        $(this).toggleClass('open');
        menu.toggle();
    });

});