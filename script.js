// A global variable to demonstrate scope
let globalVariable = "I am a GLOBAL variable.";

// 📚✨ Part 2: JavaScript Functions — Scope, Parameters & Return Values

/**
 * Demonstrates the difference between global and local scope.
 * It accesses a global variable and also declares a local one.
 */
function showScope() {
    let localVariable = "I am a LOCAL variable.";
    const resultElement = document.getElementById('scopeResult');
    resultElement.innerHTML = `
        <p><strong>Inside the function:</strong></p>
        <p>Global variable: "${globalVariable}"</p>
        <p>Local variable: "${localVariable}"</p>
    `;
}

/**
 * Calculates the product of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
function calculateProduct(a, b) {
    // This function takes parameters and returns a value, making it reusable.
    return a * b;
}

// 🎨🎬 Part 3: Combining CSS Animations with JavaScript

// Get the button and the card to animate
const triggerButton = document.getElementById('triggerAnimation');
const animatedCard = document.getElementById('jsTriggeredCard');

// Add a click event listener to the button
triggerButton.addEventListener('click', () => {
    // Use an if/else to toggle the class, showing or hiding the card
    if (animatedCard.classList.contains('is-visible')) {
        animatedCard.classList.remove('is-visible');
    } else {
        animatedCard.classList.add('is-visible');
    }
});

// Event listener for the calculation button
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', () => {
    // Use the reusable function to perform a calculation
    const num1 = 15;
    const num2 = 7;
    const product = calculateProduct(num1, num2);

    const resultElement = document.getElementById('calculationResult');
    resultElement.innerHTML = `
        <p><strong>Using the 'calculateProduct' function:</strong></p>
        <p>The product of ${num1} and ${num2} is: <strong>${product}</strong></p>
    `;
});

// Event listener for the scope button
const scopeButton = document.getElementById('scopeButton');
scopeButton.addEventListener('click', () => {
    showScope();
});
