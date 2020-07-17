var val, valueSelected;
const allRanges = document.querySelectorAll(".range");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range__slider");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  valueSelected = parseFloat(range.value);

//   bubble.innerHTML = "";

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

// function move(width) {
//     var elem = document.getElementById("myBar");
//     elem.style.width = width + "%";
// }
var radioValue;
$("input[type='radio']").click(function(){
        radioValue = $("input[name='state']:checked").val();
});

$("#submitBtn").click(function() {
    // console.log(radioValue, valueSelected)
    $(".submitwrap").hide();
    $("#validate").css("display", "block");
    $("#subFlex").css("display", "flex");
    $(".reloadwrap").css("display", "block");
     
    if( radioValue == "mumbai" && valueSelected == "14") {
        $("#validate span").text("RIGHT ANSWER");
        $("#validate").css("color", "#349A05")
        $("#plcName").text(radioValue);
        $("#daysEst h4 ").text("14 days");
        console.log("success");
    } else if( radioValue == "delhi" && valueSelected == "18") {
        $("#validate").text("RIGHT ANSWER")
        $("#validate").css("color", "#349A05")
        $("#plcName").text(radioValue)
        $("#daysEst h4 ").text("18 days");
        // console.log("success");
    } else if( radioValue == "gujarat" && valueSelected == "0") {
        $("#validate").text("RIGHT ANSWER")
        $("#validate").css("color", "#349A05")
        $("#plcName").text(radioValue)
        $("#daysEst p").html("<p>According to estimate the <br />pandemic in <span id='plcName'>Gujarat </span></p>")
        $("#daysEst h4 ").text("Ended");
        // console.log("success");
    } else if( radioValue == "maharashtra" && valueSelected == "61") {
        $("#validate").text("RIGHT ANSWER")
        $("#validate").css("color", "#349A05")
        $("#plcName").text(radioValue)
        $("#daysEst h4 ").text("61 days");
        // console.log("success");
    } else if( radioValue == "tamilnadu" &&  valueSelected > 14 && valueSelected < 28) {
        $("#validate").text("RIGHT ANSWER")
        $("#validate").css("color", "#349A05")
        $("#plcName").text(radioValue)
        $("#daysEst h4 ").text("14 to 28 days");
        // console.log("success");
    } else if( radioValue == "karnataka" && valueSelected > 0 && valueSelected < 20) {
        $("#validate").text("RIGHT ANSWER")
        $("#validate").css("color", "#349A05")
        $("#plcName").text(radioValue)
        $("#daysEst h4 ").text("Beginning");
        // console.log("success");
    } else {
        $("#validate").text("WRONG ANSWER")
        $("#validate").prepend("<img src='img/x.png' /> ")

    }


    if( radioValue == "mumbai") {
        $("#plcName").text(radioValue)
        $("#daysEst h4 ").text("14 days");
        console.log("success");
    } else if( radioValue == "delhi") {
        $("#plcName").text(radioValue)
        $("#daysEst h4 ").text("18 days");
        // console.log("success");
    } else if( radioValue == "gujarat") {
        $("#plcName").text(radioValue)
        $("#daysEst p").html("<p>According to estimate the <br />pandemic in <span id='plcName'>Gujarat </span></p>")
        $("#daysEst h4 ").text("Ended");
        // console.log("success");
    } else if( radioValue == "maharashtra") {
        $("#plcName").text(radioValue)
        $("#daysEst h4 ").text("61 days");
        // console.log("success");
    } else if( radioValue == "tamilnadu") {
        $("#plcName").text(radioValue)
        $("#daysEst h4 ").text("14 to 28 days");
        // console.log("success");
    } else if( radioValue == "karnataka") {
        $("#plcName").text(radioValue)
        $("#daysEst h4 ").text("Beginning");
        // console.log("success");
    } else {
        $("#validate").text("Please select any of the options");
    }
})

