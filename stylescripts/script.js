$(document).ready(function() {
    $(".subnav").hover(
        function() {
            $(this).addClass("showSubnav");
        },
        function() {
            $(this).removeClass("showSubnav");
        },
        function() {
            $("showSubnav").slideToggle()
        }
    );

    $(".navinvolvement div, .navinvolvement a, .navhyperloop div, .navhyperloop a").hover(
        function() {
            $(".subnav a").css({
                "border-bottom": "3px solid rgba(120, 155, 183, 1)"
            });

            $(".subnav div a").css({
                "border-bottom": "0px",
            });
        },
        function() {
            $(".subnav a").css({
                "border-bottom": "0px"
            });
        }
    );
    
    if($(window).width()<768){
        $(".showSubnav a.dropdown").css({ "border-bottom": "0px" })
    }    

    $( ".readmore" ).on('click', () => {
        //insert readmore code here. For now, placeholder:
    });
    $( ".readmore" ).css({"display":"none"})

    var slidenavout = false;
    $("#menu").on("click",
        function(){
            slidenavout = !slidenavout;
            if(slidenavout){
                $("nav ul").css({ "right":"0%" })
            }else{
                $("nav ul").css({ "right":"-100%" })
            }
        }
    )
    $( window ).resize(function() {
        slidenavout = false;
        $("nav ul").css({ "right":"-100%" })
    });
});

window.onload = function() {}
