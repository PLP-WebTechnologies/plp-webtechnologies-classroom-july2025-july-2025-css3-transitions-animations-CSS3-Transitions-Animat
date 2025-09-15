/* ====== Part 2: JavaScript Functions ====== */

// Global variable
let clickCount = 0;

// Function with parameters & return values
function multiply(a, b) {
  return a * b;
}

// Function demonstrating local scope
function localScopeDemo() {
  let localMessage = "I am local!";
  console.log(localMessage);
  // console.log(globalMessage); // Would error if not declared globally
}

// Reusable function for toggling CSS class
function toggleClass(element, className) {
  element.classList.toggle(className);
}

/* ====== Part 3: JS + CSS Integration ====== */

const jsBox = document.getElementById("jsBox");
const animateBtn = document.getElementById("animateBoxBtn");
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Animate box on button click
animateBtn.addEventListener("click", () => {
  clickCount++;
  console.log("Button clicked " + clickCount + " times.");
  console.log("3 * " + clickCount + " = " + multiply(3, clickCount));

  // Add animation class
  jsBox.classList.add("animate");

  // Remove animation class after it finishes (to allow re-trigger)
  setTimeout(() => {
    jsBox.classList.remove("animate");
  }, 1000);
});

// Open modal
toggleModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  toggleClass(modal, "active");
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  toggleClass(modal, "active");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 500); // matches transition duration
});

// Demo function scope
localScopeDemo();
