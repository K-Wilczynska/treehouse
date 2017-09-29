$(document).ready(function() {

// mobile menu button toggle

    var menu = $(".menu");
    var menuBtn = $("#mobile-menu-btn");

    $(menuBtn).on("click",function(){
        $(this).toggleClass('open');
        menu.toggle();
    });

    $(".menu-item").find("a").on("click", function(e){

        var $href = $(this).attr('href');
        var $anchor = $($href).offset().top;
        $('html, body').animate({
            scrollTop: $anchor
        },1000);
    });


    $(".menu-item-home, .logo").on("click", function(){
        $('html, body').animate({
            scrollTop: 0
        },1000)

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