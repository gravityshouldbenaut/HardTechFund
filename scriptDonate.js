var ptype ="";
var valfirst, vallast, valemail, valpay, readytopay;

//------------------------------------------------------------------------------

window.onload = function(){
  document.getElementById("payment").style.display = "none";
  document.getElementById("confirmation").style.display = "none";

  document.getElementById("submit1").onclick = function(evt){
    if (valfirst && vallast && valemail){
      readytopay = true;
    }

    if(readytopay){
      if(confirm("Confirm Submission?")){
        document.getElementById("fillform").style.display = "none";
        document.getElementById("payment").style.display = "block";
        document.getElementById("cardpay").style.display = "none";

        if(document.getElementById('card').selected==true){ //determines payment type
          ptype = "Credit or Debit";
          document.getElementById("cardpay").style.display = "block";
        }else if(document.getElementById('paypal').selected==true){
          ptype = "Paypal";
        }else if(document.getElementById('btc').selected==true){
          ptype = "Bitcoin";
        }else if(document.getElementById('eth').selected==true){
          ptype = "Etherium";
        }else{
          ptype="";
        }
      }
    }else{ //validators not satisfied
      alert("Please correct form errors.");
    }
    console.log(ptype);
  }

  document.getElementById("submit2").onclick = function(evt){ //check payment here
    document.getElementById("payment").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
  }

//--- Validator ----------------------------------------------------------------

  document.getElementById("fname").onblur = function(evt){ //----------------
    valFirstName()
  }
  document.getElementById("lname").onblur = function(evt){ //----------------
    valLastName();
  }
  document.getElementById("email").onblur = function(evt){ //----------------
    valEmail();
  }
  document.getElementById("payamt").onblur = function(evt){ //----------------
    valPayAmt();
  }
}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

function valFirstName(){
  var comp = document.getElementById("fname").value;
  var regex = /^\w{2,15}$/;
  if(compare((regex.test(comp)), "firstPrompt", "First names must be letters between 2 to 15 characters")){
    valfirst=true;
  }else{
    valfirst=false;
  }
}

function valLastName(){
  var comp = document.getElementById("lname").value;
  var regex = /^\w{2,25}$/;
  if(compare((regex.test(comp)), "lastPrompt", "Last names must be letters between 2 to 25 characters")){
    vallast=true;
  }else{
    vallast=false;
  }
}

function valEmail(){
  var comp = document.getElementById("email").value;
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
  if(compare((regex.test(comp)), "emailPrompt", "Emails must be in a ***@**.** format")){
    valemail=true;
  }else{
    valemail=false;
  }
}

function valPayAmt(){
  var comp = document.getElementById("payamt").value;
  var regex = /^\d*\.?\d*$/;
  compare((regex.test(comp)), "payAmtPrompt", "Payment amount must be in a #.# format");
}
//------------------------------------------------------------------------------

function compare(bool, inner, phrase){
  if(bool){
    document.getElementById(inner).innerHTML = "<img src=\"images/check.png\">";
    return (true);
  }else{
    document.getElementById(inner).innerHTML = "<img src=\"images/cross.png\"> "+phrase;
    return (false);
  }
}

//care.com
