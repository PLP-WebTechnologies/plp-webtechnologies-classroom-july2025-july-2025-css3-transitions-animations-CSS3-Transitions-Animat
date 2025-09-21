
    // ----------------------------
// Part 2: Functions, Scope, Parameters & Returns
// ----------------------------

// Global scope variable
let animationCount = 0;

// Function with parameters + return
function calculateArea(width, height) {
  return width * height;
}

// Function to log area (local scope demo)
function showArea() {
  let area = calculateArea(5, 10); // local variable
  console.log("Area is:", area);
}
showArea(); // will log 50

// ----------------------------
// Part 3: Combine JS + CSS
// ----------------------------

// Animate the box on button click
const box = document.getElementById("animateBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", function () {
  box.classList.toggle("active");

  animationCount++;
  document.getElementById('counterDisplay').textContent = animationCount;
  console.log(`Box animated ${animationCount} times`);
});

// Modal show/hide
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("showModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

showModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  const modalContent = document.querySelector(".modal-content");

  // Add exit animation
  modalContent.classList.add("hide");

  // Wait for animation, then hide modal
  setTimeout(() => {
    modal.classList.add("hidden");
    modalContent.classList.remove("hide");
  }, 400);
});

