
// Function with parameters & return value
function calculateArea(width, height) {
  return width * height;
}

// Demonstrating scope
let globalVar = "I'm global!";

function checkScope() {
  let localVar = "I'm local!";
  console.log(globalVar); 
  console.log(localVar);  
}
checkScope();

// Reusable function to trigger animations
function toggleAnimation(element, className) {
  element.classList.remove(className); 
  void element.offsetWidth; // Restart animation trick
  element.classList.add(className);
}

// Animate the box
const box = document.getElementById("box");
const triggerBox = document.getElementById("triggerBox");

triggerBox.addEventListener("click", () => {
  toggleAnimation(box, "animate-box");
});

// Modal functionality
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// Open modal
openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Close modal on button click
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal when clicking outside modal-content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

// Testing our calculateArea function
console.log("Area of 5x10 box:", calculateArea(5, 10));
