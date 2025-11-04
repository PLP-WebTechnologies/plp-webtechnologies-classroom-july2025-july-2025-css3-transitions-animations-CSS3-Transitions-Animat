// ---------- PART 2: JavaScript Functions ----------

// Global variable to track box movement state
let isMoved = false;

// Function with parameters and return value
function toggleBoxMovement(element, moveClass) {
  // Local scope variable
  let message;
  element.classList.toggle(moveClass);
  
  if (element.classList.contains(moveClass)) {
    message = "Box moved!";
  } else {
    message = "Box reset!";
  }
  
  return message; // Return value demonstrating function output
}

// Event listener for button
document.getElementById("move-btn").addEventListener("click", () => {
  const box = document.querySelector(".box");
  const result = toggleBoxMovement(box, "move");
  console.log(result); // Show return value in console
});


// ---------- PART 3: Combining CSS Animations with JavaScript ----------

// Modal elements
const modal = document.getElementById("modal");
const showBtn = document.getElementById("show-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");

// Function to show modal
function showModal() {
  modal.classList.remove("hidden");
  modal.classList.add("show");
}

// Function to hide modal
function hideModal() {
  modal.classList.add("hidden");
  modal.classList.remove("show");
}

// Add event listeners
showBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
