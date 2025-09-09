/* ===== Part 2: JavaScript Functions & Scope ===== */

// Global variable
let globalCounter = 0;

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b; // returns the sum
}

// Function demonstrating local scope
function incrementCounter() {
  let localCount = 1; // local variable
  globalCounter += localCount; // modifies global
  return globalCounter;
}

/* ===== Part 3: Combining CSS & JS ===== */

// Animate box on button click
const triggerBtn = document.getElementById("triggerBtn");
const animateBox = document.getElementById("animateBox");

triggerBtn.addEventListener("click", () => {
  animateBox.classList.toggle("spin"); // toggle spin animation
});

// Modal open/close
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Example use of functions
console.log("5 + 10 =", addNumbers(5, 10)); // returns 15
console.log("Counter =", incrementCounter()); // increments globalCounter
