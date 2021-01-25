$(document).ready(() => {
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

    // Papers Toggling - will simplify code in the future
    let papers = [false, false, false, false, false]
    $("#paper1 .readmore").click(() => { 
        $( "#paper1 .readmore" ).toggleClass("showpaper"); 
        papers[1] = !papers[1];
        if(papers[1]){  $( "#paper1 .readmore" ).html("Hide Paper"); } 
        else { $( "#paper1 .readmore" ).html("Show Paper"); }
    })
    $("#paper2 .readmore").click(() => { 
        $( "#paper2 .readmore" ).toggleClass("showpaper"); 
        papers[1] = !papers[1];
        if(papers[1]){  $( "#paper2 .readmore" ).html("Hide Paper"); } 
        else { $( "#paper2 .readmore" ).html("Show Paper"); }
    })
    $("#paper3 .readmore").click(() => { 
        $( "#paper3 .readmore" ).toggleClass("showpaper"); 
        papers[1] = !papers[1];
        if(papers[1]){  $( "#paper3 .readmore" ).html("Hide Paper"); } 
        else { $( "#paper3 .readmore" ).html("Show Paper"); }
    })
    $("#paper4 .readmore").click(() => { 
        $( "#paper4 .readmore" ).toggleClass("showpaper"); 
        papers[1] = !papers[1];
        if(papers[1]){  $( "#paper4 .readmore" ).html("Hide Paper"); } 
        else { $( "#paper4 .readmore" ).html("Show Paper"); }
    })
    $("#paper5 .readmore").click(() => { 
        $( "#paper5 .readmore" ).toggleClass("showpaper"); 
        papers[1] = !papers[1];
        if(papers[1]){  $( "#paper5 .readmore" ).html("Hide Paper"); } 
        else { $( "#paper5 .readmore" ).html("Show Paper"); }
    })


    // Nav Sliding
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

    $("#currentYear").text(new Date().getFullYear()); // updates copyright with current year
});
