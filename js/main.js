$(document).ready(function() {

// mobile menu button toggle

    var menu = $(".menu");
    var menuBtn = $("#mobile-menu-btn");

    $(menuBtn).on("click",function(){
        $(this).toggleClass('open');
        menu.toggle();
    });


    if(window.matchMedia("(min-width: 1024px)").matches){

        $(window).on("scroll", function(){

            var wScroll = $(this).scrollTop();

            if (wScroll > 55){
                $("#nav-bar").css({
                    "height": "50px"
                })
            }
            else{
                $("#nav-bar").css({
                    "height": "115px"
                })
            }

        });
    }


});