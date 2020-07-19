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
            $(".subnav div a").css({
                "border-bottom": "0px",
            });
        },
        function() {
            $(".subnav a").css({
                "border-bottom": "3px solid #E9BD1F"
            });
            $(".subnav div a").css({
                "border-bottom": "0px",
            });
        }
    );
    
});

window.onload = function() {}