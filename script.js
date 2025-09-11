/* ========== PART 2: JAVASCRIPT FUNCTIONS ========== */

// Function with parameters & return value
function addNumbers(a, b) {
  let sum = a + b; // local scope variable
  return sum;      // return value back to caller
}

// Function that calls addNumbers and updates HTML
function showSum(x, y) {
  let result = addNumbers(x, y); // using local scope
  document.getElementById("sum-output").innerText = 
    `Sum of ${x} + ${y} = ${result}`; // Update result in page
}

/* ========== PART 3: COMBINING CSS + JS ========== */

// Toggles a CSS class dynamically to trigger animation
function toggleAnimation() {
  let box = document.getElementById("animateBox"); // select element
  box.classList.toggle("active"); // add/remove class 'active'
}
