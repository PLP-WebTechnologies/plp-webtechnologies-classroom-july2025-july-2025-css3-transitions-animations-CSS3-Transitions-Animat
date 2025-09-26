/*********************************************************
 * Part 2: JavaScript Functions — Parameters & Return
 *********************************************************/

// Pure function with parameters & return value
function addNumbers(a, b) {
  return a + b; // returns the sum of a and b
}

// Demonstrate scope (global vs local)
const resultPara = document.getElementById("result");
document.getElementById("calcBtn").addEventListener("click", function () {
  // local scope variables
  const num1 = parseFloat(document.getElementById("num1").value) || 0;
  const num2 = parseFloat(document.getElementById("num2").value) || 0;

  // call reusable function
  const sum = addNumbers(num1, num2);

  // update the DOM
  resultPara.textContent = `Sum = ${sum}`;
});

/*********************************************************
 * Part 3: Combine CSS Animations with JavaScript
 *********************************************************/
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  // Remove class if already present to allow re-triggering
  animateBox.classList.remove("slide-in");

  // Force reflow (restart animation)
  void animateBox.offsetWidth;

  // Add class to trigger the CSS keyframe animation
  animateBox.classList.add("slide-in");
});
