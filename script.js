// ============================
// Part 2: JavaScript Functions
// ============================

// Example of global scope
let globalColor = "crimson";

// Function with parameters & return value
function changeBoxColor(element, color) {
  element.style.backgroundColor = color;
  return `Box color changed to ${color}`;
}

// Function demonstrating local vs global scope
function scopeDemo() {
  let localColor = "blue"; // only exists inside this function
  console.log("Inside function, localColor is:", localColor);
  console.log("Inside function, globalColor is:", globalColor);
}

// Reusable function to toggle a class (animation trigger)
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// ============================
// Part 3: Combine CSS + JS
// ============================

document.addEventListener("DOMContentLoaded", () => {
  const animateBtn = document.getElementById("animateBtn");
  const colorBtn = document.getElementById("colorBtn");
  const toggleModalBtn = document.getElementById("toggleModalBtn");

  const box = document.querySelector(".box");
  const modal = document.getElementById("myModal");

  // 🎬 Animate Box button
  animateBtn.addEventListener("click", () => {
    let isAnimating = toggleAnimation(box, "animate");
    console.log("Animation active?", isAnimating);
  });

  // 🎨 Change Box Color button
  colorBtn.addEventListener("click", () => {
    let result = changeBoxColor(box, "limegreen");
    console.log(result);
  });

  // 🪟 Toggle Modal button
  toggleModalBtn.addEventListener("click", () => {
    if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
      setTimeout(() => modal.classList.add("show"), 10); // trigger transition
    } else {
      modal.classList.remove("show");
      setTimeout(() => modal.classList.add("hidden"), 500); // wait for fade-out
    }
  });

  // Run scope demo in console
  scopeDemo();
});
