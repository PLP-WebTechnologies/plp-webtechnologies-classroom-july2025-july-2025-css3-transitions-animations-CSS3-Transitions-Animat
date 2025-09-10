// Part 2: Functions with parameters & return values
function calculateArea(width, height) {
  return width * height;
}
console.log("Area:", calculateArea(5, 10)); // Output: 50

// Local vs Global Scope
let globalVar = "I'm global!";
function scopeDemo() {
  let localVar = "I'm local!";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible only inside
}
scopeDemo();

// Part 3: JS + CSS Integration
const triggerBtn = document.getElementById("trigger-btn");
const triggerBox = document.getElementById("trigger-box");

triggerBtn.addEventListener("click", () => {
  triggerBox.classList.toggle("animate");
});

// Modal logic
const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
