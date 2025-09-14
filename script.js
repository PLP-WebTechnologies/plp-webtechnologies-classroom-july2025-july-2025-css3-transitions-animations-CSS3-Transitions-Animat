// === Part 2: Functions with Parameters, Return, Scope ===

// Global variable (scope demo)
let lastResult = 0;

// Function with parameters & return
function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

// Function using local scope & updating DOM
function updateCalcResult(a, b) {
  let result; // local variable
  if (a > b) {
    result = multiplyNumbers(a, b);
  } else {
    result = addNumbers(a, b);
  }
  lastResult = result; // update global variable
  document.getElementById("calc-result").innerText = `Result: ${result}`;
}

// === Part 3: Combining CSS & JS ===
const animateBtn = document.getElementById("animate-btn");
const triggerBox = document.getElementById("trigger-box");

animateBtn.addEventListener("click", () => {
  triggerBox.classList.toggle("animate");
});
