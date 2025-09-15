// String reversal function
function reverseString() {
    const input = document.getElementById('reverseInput').value;
    const outputElement = document.getElementById('reverseOutput');
            
    // Using function with parameter and return value
    const reversed = reverseText(input);
    outputElement.textContent = reversed || "Please enter some text!";
}
        
// Helper function with return value
function reverseText(text) {
    return text.split('').reverse().join('');
}
        
// Number multiplication function
function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const outputElement = document.getElementById('multiplyOutput');
            
    // Using function with multiple parameters and return value
    const result = multiply(num1, num2);
            
    if (isNaN(result)) {
        outputElement.textContent = "Please enter valid numbers!";
    } else {
            outputElement.textContent = `${num1} × ${num2} = ${result}`;
            }
}
        
        // Helper function with parameters and return
function multiply(a, b) {
    return a * b;
}
        

// Scope demonstration
function demonstrateScope() {
    const outputElement = document.getElementById('scopeOutput');
    outputElement.innerHTML = "";
            
            // Global variable
    let globalVar = "I'm global";
            
    // Function demonstrating local scope
    function localScopeDemo() {
        // Local variable with same name
        let globalVar = "I'm local";
        outputElement.innerHTML += `Inside function: ${globalVar}<br>`;
                
        // Another local variable
        let localVar = "I'm only available in this function";
        outputElement.innerHTML += `Local variable: ${localVar}<br>`;
                
        return localVar;
    }
            
    outputElement.innerHTML += `Before function: ${globalVar}<br>`;
            
    // Call the function
    const returnedValue = localScopeDemo();
            
    outputElement.innerHTML += `After function: ${globalVar}<br>`;
    outputElement.innerHTML += `Returned value: ${returnedValue}<br>`;
            
    // This would cause an error - uncomment to see:
    // outputElement.innerHTML += `Trying to access localVar: ${localVar}`;
}
        
// Part 3: Combined CSS and JavaScript
        
// Get animation target element
const animationTarget = document.getElementById('animationTarget');
        
// Animation functions
function fadeIn() {
    reset();
    setTimeout(() => {
        animationTarget.classList.add('fade-in');
    }, 10);
}
        
function spin() {
    reset();
    setTimeout(() => {
        animationTarget.classList.add('spin');
    }, 10);
}
        
function grow() {
    reset();
    setTimeout(() => {
        animationTarget.classList.add('grow');
    }, 10);
}
        
function shrink() {
    reset();
    setTimeout(() => {
        animationTarget.classList.add('shrink');
    }, 10);
}
        
function reset() {
    animationTarget.classList.remove('fade-in', 'spin', 'grow', 'shrink');
    // Force reflow to restart animations
    void animationTarget.offsetWidth;
}
        
// Card flip function
function flipCard() {
    const card = document.getElementById('card');
    card.classList.toggle('flipped');
}
        
// Initialize with a fade-in after page load
window.onload = function() {
    setTimeout(fadeIn, 500);
};
