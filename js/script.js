var valueSelected;
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
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  valueSelected = range.value;

//   bubble.innerHTML = "";

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

// function move(width) {
//     var elem = document.getElementById("myBar");
//     elem.style.width = width + "%";
// }

$("#submitBtn").click(function() {
    console.log(valueSelected)
})
