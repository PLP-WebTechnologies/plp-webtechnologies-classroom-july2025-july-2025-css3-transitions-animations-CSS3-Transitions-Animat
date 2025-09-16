// Function with parameters + return value
function multiply(a, b) {
  // Local scope variable
  let result = a * b;
  return result;
}

// Demonstrate function scope + global usage
const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");

calcBtn.addEventListener("click", () => {
  // Call function with arguments
  let product = multiply(7, 8);

  // Display result (global scope access)
  calcResult.textContent = `7 × 8 = ${product}`;
});



const animateBtn = document.getElementById("animateBtn");
const circle = document.querySelector(".circle");


function triggerAnimation(element, className) {
  element.classList.add(className);

  
  setTimeout(() => {
    element.classList.remove(className);
  }, 2000);
}

animateBtn.addEventListener("click", () => {
  triggerAnimation(circle, "animate");
});
