// GLOBAL variable
let box = document.querySelector(".box");
let modal = document.getElementById("modal");

// Function with parameter & return value
function calculateSize(multiplier) {
  return 100 * multiplier; // returns new size
}

// Function to animate the box using parameter
function startBoxAnimation() {
  let newSize = calculateSize(1.5); // Using return value
  box.style.transform = `scale(${newSize / 100})`;
  setTimeout(() => box.style.transform = "scale(1)", 1000); // Reset size after 1s
}

// Function to toggle modal visibility
function toggleModal() {
  modal.classList.toggle("hidden");
}

// Demonstrating local vs global scope
function changeBoxColor(color) {
  let localColor = color; // local variable
  box.style.backgroundColor = localColor;
}

// Example usage
changeBoxColor("#FF5722");
