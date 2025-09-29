// =======================
// Part 2: JS Functions
// =======================

// Function to generate random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Button to trigger function
const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");

calcBtn.addEventListener("click", () => {
    // Using the function and showing return value
    const number = getRandomNumber(1, 100);
    calcResult.textContent = `Random Number: ${number}`;
});

// =======================
// Part 3: Trigger CSS Animations with JS
// =======================
const animateBtn = document.getElementById("animateBoxBtn");
const animatedBox = document.querySelector(".animated-box");

animateBtn.addEventListener("click", () => {
    // Remove class if it already exists to allow re-triggering
    animatedBox.classList.remove("slide-fade");

    // Trigger reflow to restart animation
    void animatedBox.offsetWidth;

    // Add class to start animation
    animatedBox.classList.add("slide-fade");
});

// Example of a reusable function to animate any element
function triggerAnimation(element, animationClass) {
    element.classList.remove(animationClass);
    void element.offsetWidth;
    element.classList.add(animationClass);
}
