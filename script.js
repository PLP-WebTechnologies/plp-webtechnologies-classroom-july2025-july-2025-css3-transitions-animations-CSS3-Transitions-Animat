// ===== Part 2: Box Animation =====
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

//  Function to toggle animation (demonstrates function & scope)
function toggleBoxAnimation(element) {
  element.classList.toggle("animate");
}

animateBtn.addEventListener("click", () => {
  toggleBoxAnimation(box);
});

// ===== Part 3: Card Flip Animation =====
const flipBtn = document.getElementById("flipBtn");
const card = document.getElementById("card");

// Function to flip card
function flipCard(element) {
  element.classList.toggle("flipped");
}

flipBtn.addEventListener("click", () => {
  flipCard(card);
});
