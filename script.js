//
window.onload = function() {
  changebg();
}

function changebg(){ //changes background
  document.getElementById("intro").onmouseover = function(evt){
    document.body.style.background = "#222 url('images/backgrounds/Landing.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "110%";
    document.getElementById("intro").style.transition = "all 0.5s ease;";
  }
  document.getElementById("schedule").onmouseover = function(evt){
    document.body.style.background = "#222 url('images/backgrounds/Sections.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "110%";
    document.getElementById("schedule").style.transition = "all 0.5s ease;";
  }
  document.getElementById("previousprojects").onmouseover = function(evt){
    document.body.style.background = "#222 url('images/backgrounds/Landing.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "110%";
    document.getElementById("previousprojects").style.transition = "all 0.5s ease;";
  }
  document.getElementById("sponsors").onmouseover = function(evt){
    document.body.style.background = "#222 url('images/backgrounds/Landing.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "110%";
    document.getElementById("sponsors").style.transition = "all 0.5s ease;";
  }
  document.getElementById("team").onmouseover = function(evt){
    document.body.style.background = "#222 url('images/backgrounds/Contact.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "110%";
    document.getElementById("team").style.transition = "all 0.5s ease;";
  }
  document.getElementById("contact").onmouseover = function(evt){
    document.body.style.background = "#222 url('images/backgrounds/Contact.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "110%";
    document.getElementById("contact").style.transition = "all 0.5s ease;";
  }
}

//------------------------------------------------------------------------------
