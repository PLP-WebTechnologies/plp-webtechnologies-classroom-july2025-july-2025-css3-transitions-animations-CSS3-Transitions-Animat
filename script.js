/* --- Part 2: JavaScript Functions --- */

// Global variable example
let globalNumber = 10;

// Function with parameters + return value
function multiplyNumbers(a, b) {
  return a * b;
}

// Function showing scope (local vs global)
function showCalculation() {
  let localNumber = 5; // local scope
  let result = multiplyNumbers(globalNumber, localNumber);
  document.getElementById("function-output").textContent =
    `Global (${globalNumber}) × Local (${localNumber}) = ${result}`;
}

/* --- Part 3: Combining CSS & JS --- */

// Animate box with button
const animateBtn = document.getElementById("animate-btn");
const animateBox = document.getElementById("animate-box");

animateBtn.addEventListener("click", () => {
  animateBox.classList.toggle("move"); // toggle animation
});

// Modal functionality
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
