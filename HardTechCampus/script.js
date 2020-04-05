//JQuery

$(document).ready(function() {
    var showNav = false;
    if ($(window).width() <= 950) {
        $("nav").addClass("hideNav");
    }

    $(window).resize(function() {
        $("nav").addClass("hideNav");
    });

    $(".triplebar").on("click", function() {
        showNav = !showNav;
        if (showNav) {
            $("nav").removeClass("hideNav");
        } else {
            if ($(window).width() <= 950) {
                $("nav").addClass("hideNav");
            } else {
                $("nav").removeClass("hideNav");
            }
        }
    });
});

//------------------------------------------------------------------------------------------------------

window.onload = function() {
    changebg();
}

function changebg() { //changes background
    document.getElementById("schedule").onmouseover = function(evt) {
        document.getElementById("foreImg").src = "images/backgrounds/Sections.png";
        document.getElementById("foreImg").style = "opacity:1;";
    }
    document.getElementById("schedule").onmouseout = function(evt) {
        document.getElementById("foreImg").style = "opacity:0;";
    }

    document.getElementById("team").onmouseover = function(evt) {
        document.getElementById("foreImg").src = "images/backgrounds/Contact.png";
        document.getElementById("foreImg").style = "opacity:1;";
    }
    document.getElementById("team").onmouseout = function(evt) {
        document.getElementById("foreImg").style = "opacity:0;";
    }


    document.getElementById("contact").onmouseover = function(evt) {
        document.getElementById("foreImg").src = "images/backgrounds/Contact.png";
        document.getElementById("foreImg").style = "opacity:1;";
    }
    document.getElementById("contact").onmouseout = function(evt) {
        document.getElementById("foreImg").style = "opacity:0;";
    }



}

//------------------------------------------------------------------------------