// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable
let animationState = false;

// Function with parameters and return value
function calculateScale(base, factor) {
  return base * factor;
}

// Local scope example
function logAnimationStatus() {
  let status = animationState ? "Running" : "Stopped";
  console.log("Animation is currently:", status);
}

// Reusable function to trigger animation
function triggerBoxAnimation() {
  const box = document.querySelector(".animated-box");
  box.style.animation = "none"; // reset
  void box.offsetWidth; // force reflow
  box.style.animation = "pulse 2s infinite";
  animationState = true;
  logAnimationStatus();
}

// Modal toggle function
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("visible");
  modal.classList.toggle("hidden");
}