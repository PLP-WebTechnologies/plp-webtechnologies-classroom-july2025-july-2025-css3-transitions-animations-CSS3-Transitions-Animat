// ---Functions with parameters, return values, and scope ---

// Reusable function to toggle classes
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// Function to log scope demonstration
function scopeDemo(param) {
  let localVar = "I am local";
  console.log("Parameter:", param);
  console.log("Local Variable:", localVar);
  console.log("Global Variable:", globalVar);
  return param.toUpperCase();
}

let globalVar = "I am global";

// Call scopeDemo for demo
console.log(scopeDemo("hello scope"));

// --- Part 3: Combining CSS + JS ---

// Animate box on button click
const box = document.querySelector(".box");
const animateBoxBtn = document.getElementById("animateBoxBtn");

animateBoxBtn.addEventListener("click", () => {
  toggleClass(box, "active");
});

const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");

// Toggle modal visibility
toggleModalBtn.addEventListener("click", () => {
  modal.classList.toggle("show");
});

// Optional: close modal when clicking outside content
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

