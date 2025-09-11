/* ========== PART 2: JAVASCRIPT FUNCTIONS ========== */

// Function with parameters & return value
function addNumbers(a, b) {
  let sum = a + b; // local scope variable
  return sum;      // returning value
}

// Reusing the function
function showSum(x, y) {
  let result = addNumbers(x, y);
  document.getElementById("sum-output").innerText = 
    `Sum of ${x} + ${y} = ${result}`;
}

/* ========== PART 3: COMBINING CSS + JS ========== */

// Toggle a CSS class dynamically to trigger animation
function toggleAnimation() {
  let box = document.getElementById("animateBox");
  box.classList.toggle("active");
}
