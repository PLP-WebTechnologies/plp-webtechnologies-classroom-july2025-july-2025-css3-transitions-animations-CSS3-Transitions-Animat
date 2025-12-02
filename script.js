// === Part 2: JavaScript Functions ===

// Function to calculate square of a number
function calculateSquare(num) {
    return num * num; // return value
}

// Function to update result in DOM
function displayResult(value) {
    const resultEl = document.getElementById('calcResult');
    resultEl.textContent = `Result: ${value}`;
}

// Event listener for calculation button
const calcBtn = document.getElementById('calcBtn');
calcBtn.addEventListener('click', () => {
    const input = document.getElementById('numberInput').value;
    if (input === "") {
        displayResult("Please enter a number!");
        return;
    }
    const square = calculateSquare(Number(input));
    displayResult(square);
});

// === Part 3: JS triggering CSS Animation ===
const animateBtn = document.getElementById('animateBtn');
const box = document.querySelector('.box');

// Function to trigger animation
function triggerAnimation(element, className) {
    element.classList.remove(className); // Reset animation
    void element.offsetWidth; // Trigger reflow
    element.classList.add(className); // Add animation class
}

// Event listener for animation button
animateBtn.addEventListener('click', () => {
    triggerAnimation(box, 'animate');
});
