/* ---------- Part 2: JavaScript Functions ---------- */

// Function demonstrating parameters and return values
function greetUser(name) {
    return `Hello, ${name}! Welcome to Week 7.`;
}

// Function demonstrating local vs global scope
let globalCounter = 0;

function incrementCounter() {
    let localCounter = 0; // local scope
    localCounter++;
    globalCounter++;
    return `Local: ${localCounter}, Global: ${globalCounter}`;
}

// Trigger functions on button click
document.getElementById('trigger-js').addEventListener('click', () => {
    const greeting = greetUser("Student");
    const counterMessage = incrementCounter();
    document.getElementById('js-output').textContent = `${greeting} | ${counterMessage}`;
});

/* ---------- Part 3: CSS + JS Integration ---------- */
document.getElementById('animate-box-btn').addEventListener('click', () => {
    const box = document.getElementById('box-to-animate');
    box.classList.toggle('box-animate'); // add/remove animation class dynamically
});
