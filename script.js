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

    $(".subnav div, .subnav a").hover(
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

    $("#involvement .subnav div, #involvement .subnav a").hover(
        function() {
            $(".subnav a").css({
                "border-bottom": "3px solid rgba(120, 155, 183, 1)"
            });

            $(".htc .subnav a").css({
                "border-bottom": "3px solid #76CCBC"
            });

            $(".subnav div a, .htc .subnav div a").css({
                "border-bottom": "0px",
            });
        },
        function() {
            $(".subnav a").css({
                "border-bottom": "3px solid #E9BD1F"
            });

            $(".htc .subnav a").css({
                "border-bottom": "3px solid #FF970F"
            });

            $(".subnav div a, .htc .subnav div a").css({
                "border-bottom": "0px",
            });
        }
    );
    
    if($(window).width()<768){
        $(".showSubnav a.navinvolvement").css({ "border-bottom": "0px" })
    }    

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