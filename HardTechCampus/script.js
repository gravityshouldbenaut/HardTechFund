//JQuery

$(document).ready(function() {
    var showNav = false;
    if ($(window).width() <= 950) {
        $("nav").addClass("hideNav");
    }

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
    document.getElementById("intro").onmouseover = function(evt) {
        document.getElementById("backImg").src = "images/backgrounds/Landing.png";
    }
    document.getElementById("schedule").onmouseover = function(evt) {
        document.getElementById("backImg").src = "images/backgrounds/Sections.png";
    }
    document.getElementById("previousprojects").onmouseover = function(evt) {
        document.getElementById("backImg").src = "images/backgrounds/Landing.png";
    }
    document.getElementById("sponsors").onmouseover = function(evt) {
        document.getElementById("backImg").src = "images/backgrounds/Landing.png";
    }
    document.getElementById("team").onmouseover = function(evt) {
        document.getElementById("backImg").src = "images/backgrounds/Contact.png";
    }
    document.getElementById("contact").onmouseover = function(evt) {
        document.getElementById("backImg").src = "images/backgrounds/Contact.png";
    }
}

//------------------------------------------------------------------------------