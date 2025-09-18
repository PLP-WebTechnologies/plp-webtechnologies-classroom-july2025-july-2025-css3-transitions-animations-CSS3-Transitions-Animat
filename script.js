/* ---------- Part 2: JavaScript Functions ---------- */

// Example of global vs local scope
let globalCounter = 0;

// Function with parameters and return value
function addNumbers(a, b) {
  return a + b; // returns sum
}

// Function to demonstrate local scope
function increaseCounter(step) {
  let localCount = globalCounter + step;
  globalCounter = localCount; // updates global
  return localCount;
}

/* ---------- Part 3: Combining CSS + JS ---------- */

const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  animateBox.classList.remove("animate"); // reset
  void animateBox.offsetWidth; // force reflow to restart animation
  animateBox.classList.add("animate");
  console.log("Counter is now:", increaseCounter(1));
});

/* Modal Logic */
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // show modal
  setTimeout(() => modal.classList.add("show"), 10); // trigger CSS transition
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 500); // wait for animation
});

// Demo usage of functions in console
console.log("Sum of 5 + 3 =", addNumbers(5, 3));
