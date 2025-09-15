// Global variable
let globalMessage = "Hello from the global scope!";

/**
 * Function to generate a random number (uses parameters & return value)
 * @param {number} min - minimum value
 * @param {number} max - maximum value
 * @returns {number} random integer
 */
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Demonstrates local vs global scope
 */
function showRandomNumber() {
  let localMessage = "This is a local message."; // local scope
  let number = generateRandom(1, 100); // call function with params

  document.getElementById("randomOutput").textContent =
    `${globalMessage} | ${localMessage} | Your random number: ${number}`;
}

/* ========= Part 3: Combining CSS & JS ========= */

/**
 * Toggles animation on the JS-controlled box
 */
function triggerBoxAnimation() {
  const box = document.getElementById("jsBox");

  // Toggle class to trigger CSS animation
  box.classList.toggle("animate");
}
