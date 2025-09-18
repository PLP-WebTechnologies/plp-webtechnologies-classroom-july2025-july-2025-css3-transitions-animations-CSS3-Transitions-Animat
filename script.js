// Part 2: JS Functions, Scope, Parameters & Return
// Function to calculate square of a number
function squareNumber(num) {
    return num * num; // Return value
}

// Global variable
let globalValue = 5;

document.getElementById('calculateBtn').addEventListener('click', function() {
    const result = squareNumber(globalValue); // Using parameter & return
    document.getElementById('calcResult').textContent = `Square of ${globalValue} is ${result}`;
});

// Part 3: Trigger CSS animation using JS
const animateBtn = document.getElementById('animateBoxBtn');
const box = document.querySelector('.animatedBox');

animateBtn.addEventListener('click', function() {
    box.classList.toggle('animate'); // Add/remove class to trigger CSS transition
});
