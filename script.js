/* ================= Part 2: JavaScript Functions ================= */

// Global variable (accessible everywhere)
let globalValue = 10;

// Function with parameters and return value
function multiplyNumbers(a, b) {
  let result = a * b; // Local variable (only exists inside this function)
  return result; // Return value
}

// Function demonstrating reuse
function showCalculation() {
  let output = document.getElementById("functionOutput");
  
  // Call function with parameters
  let product1 = multiplyNumbers(globalValue, 5);
  let product2 = multiplyNumbers(3, 7);

  // Display results
  output.textContent = `Results: globalValue*5 = ${product1}, 3*7 = ${product2}`;
}

/* ================= Part 3: Combining CSS + JavaScript ================= */

// Function to trigger CSS animation
function animateBox() {
  let box = document.getElementById("jsBox");

  // Toggle animation class on/off
  box.classList.toggle("animate");
}
