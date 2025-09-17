/*
 * JavaScript Animation Controller
 * Part 2: Functions — Scope, Parameters & Return Values
 * Part 3: Combining CSS Animations with JavaScript
 */

// Global variable to demonstrate scope - Part 2
let globalVar = "I'm global!";

// Function with parameters and return value - Part 2
function addNumbers(a, b) {
    // Local variables - these are only accessible within this function
    const localResult = a + b;
    return localResult;
}

// Function to demonstrate parameters and return values - Part 2
function calculate() {
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const num2 = parseInt(document.getElementById('num2').value) || 0;
    
    // Call function with parameters and get return value
    const result = addNumbers(num1, num2);
    
    document.getElementById('result').textContent = `Result: ${num1} + ${num2} = ${result}`;
}

// Function to demonstrate scope - Part 2
function demonstrateScope() {
    // This variable is local to this function
    let localVar = "I'm local!";
    
    // We can access the global variable
    const scopeDemoElement = document.getElementById('scope-demo');
    scopeDemoElement.innerHTML = `
        <strong>Global variable:</strong> ${globalVar}<br>
        <strong>Local variable:</strong> ${localVar}<br>
    `;
    
    // Trying to access localResult here would cause an error
    // because it's defined inside the addNumbers function
    // console.log(localResult); // This would be undefined
}

// Part 3: Combining CSS Animations with JavaScript

// Card flip function - Part 3
function flipCard() {
    const card = document.getElementById('flip-card');
    card.classList.toggle('flipped');
}

// Animation control functions - Part 3
function startAnimation() {
    const element = document.getElementById('js-controlled');
    element.classList.add('spin');
}

function stopAnimation() {
    const element = document.getElementById('js-controlled');
    element.classList.remove('spin');
}

function toggleAnimation() {
    const element = document.getElementById('js-controlled');
    element.classList.toggle('spin');
}

// Modal functions - Part 3
function openModal() {
    const modal = document.getElementById('demo-modal');
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('demo-modal');
    modal.classList.remove('show');
}

// Initialize event listeners when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Part 2: JavaScript Functions event listeners
    document.getElementById('calculate-btn').addEventListener('click', calculate);
    document.getElementById('scope-demo-btn').addEventListener('click', demonstrateScope);
    
    // Part 3: Combining CSS and JavaScript event listeners
    document.getElementById('flip-card-btn').addEventListener('click', flipCard);
    document.getElementById('start-animation-btn').addEventListener('click', startAnimation);
    document.getElementById('stop-animation-btn').addEventListener('click', stopAnimation);
    document.getElementById('toggle-animation-btn').addEventListener('click', toggleAnimation);
    document.getElementById('open-modal-btn').addEventListener('click', openModal);
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    
    // Close modal if clicked outside of content
    document.getElementById('demo-modal').addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal();
        }
    });
    
    // Initialize page with some animations
    startAnimation();
});
