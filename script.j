// --- Part 2: Functions, Scope, Parameters, Return Values ---

// Global variable
let globalMultiplier = 5;

// Function that uses parameters and return values
function multiplyNumbers(a, b) {
  return a * b;
}

// Demonstrates local scope
function calculateWithGlobal(x) {
  let localResult = x * globalMultiplier; // local variable
  return localResult;
}

// Function to display results in the DOM
function showCalculation() {
  let product = multiplyNumbers(4, 3); // 12
  let scaled = calculateWithGlobal(product); // 12 * 5 = 60
  document.getElementById("result").innerText = 
    `4 × 3 = ${product}, scaled with global = ${scaled}`;
}

// --- Part 3: JS + CSS Combined ---

// Add/remove class to trigger CSS animation
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  // Toggle class for animation
  animateBox.classList.toggle("animate");
});
