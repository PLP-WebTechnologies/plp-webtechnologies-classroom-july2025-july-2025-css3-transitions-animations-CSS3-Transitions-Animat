// 🎯 Part 2: JavaScript Functions — Scope, Parameters, Return Values

// Global variable
let globalMultiplier = 2;

// Function with parameters & return value
function calculateSum(a, b) {
  let localResult = (a + b) * globalMultiplier; // local + global scope
  return localResult;
}

// Function to display the result on page
function showResult(x, y) {
  const output = document.getElementById("result");
  const result = calculateSum(x, y);
  output.textContent = `The result of (${x} + ${y}) * ${globalMultiplier} = ${result}`;
}

// 🎬 Part 3: Combine CSS + JS Animation
const triggerBtn = document.getElementById("triggerAnimation");
const jsBox = document.getElementById("jsBox");

triggerBtn.addEventListener("click", () => {
  jsBox.classList.toggle("active"); // toggles animation
});
