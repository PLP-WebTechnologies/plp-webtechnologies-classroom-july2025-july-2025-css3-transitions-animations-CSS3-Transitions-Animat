/* =============================
   Part 2 & 3: JavaScript Functions + Animations
   ============================= */

// Global variable
let globalServings = 8; // Default servings for the recipe

// Function to calculate ingredient amounts based on servings
function calculateServings(newServings) {
  let ratio = newServings / globalServings;
  return {
    flour: (2 * ratio).toFixed(1) + " cups flour",
    sugar: (1.5 * ratio).toFixed(1) + " cups sugar",
    butter: (1 * ratio).toFixed(1) + " cups butter",
    eggs: Math.round(4 * ratio) + " eggs"
  };
}

// DOM Elements
const animateBtn = document.getElementById("animateBtn");
const calculateBtn = document.getElementById("calculateBtn");
const cakeBox = document.getElementById("cakeBox");
const result = document.getElementById("result");

// Modal Elements
const showRecipeBtn = document.getElementById("showRecipeBtn");
const recipeModal = document.getElementById("recipeModal");
const closeModal = document.getElementById("closeModal");

// Function to toggle animation
function toggleCakeAnimation() {
  cakeBox.classList.toggle("animate");
}

// Function with parameters + return values
function showNewRecipe(servings) {
  let updated = calculateServings(servings);
  return `For ${servings} servings: ${updated.flour}, ${updated.sugar}, ${updated.butter}, ${updated.eggs}`;
}

// Event listeners
animateBtn.addEventListener("click", toggleCakeAnimation);

calculateBtn.addEventListener("click", function() {
  let servings = prompt("Enter the number of servings you want:");
  if (servings && !isNaN(servings)) {
    result.textContent = showNewRecipe(parseInt(servings));
  } else {
    result.textContent = "Please enter a valid number!";
  }
});

// Show Modal
showRecipeBtn.addEventListener("click", function() {
  recipeModal.style.display = "block";
});

// Close Modal
closeModal.addEventListener("click", function() {
  recipeModal.style.display = "none";
});

// Close modal if user clicks outside content
window.addEventListener("click", function(event) {
  if (event.target === recipeModal) {
    recipeModal.style.display = "none";
  }
});
