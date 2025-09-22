// === Part 2: JavaScript Functions, Scope, Parameters & Return ===

// Global variable
let globalMultiplier = 2;

// Function with parameters and return value
function multiplyAndAdd(num, addValue) {
    let result = (num * globalMultiplier) + addValue; // uses global + local scope
    return result;
}

// Demo function to show calculation
function showCalculation() {
    let value = multiplyAndAdd(5, 10); // 5*2 + 10 = 20
    document.getElementById("calcResult").innerText =
        "Result of multiplyAndAdd(5, 10): " + value;
}

// === Part 3: Combining CSS + JS ===

// Toggle animation on the box
function toggleAnimation() {
    let box = document.getElementById("animateBox");
    box.classList.toggle("spin"); // add/remove CSS animation class
}

function showCalculation() {
    let num = parseInt(document.getElementById("num").value) || 0;
    let addValue = parseInt(document.getElementById("addValue").value) || 0;
    let value = multiplyAndAdd(num, addValue);
    document.getElementById("calcResult").innerText =
        `Result of multiplyAndAdd(${num}, ${addValue}): ${value}`;
}