// =========================
// Part 2: Functions Example
// =========================

// Function with parameters and return value
function addNumbers(a, b) {
  return a + b;
}

// Demonstrate scope: global vs local
let globalMessage = "Hello from global scope";

function showMessage() {
  let localMessage = "Hello from local scope";
  console.log(globalMessage); // can access
  console.log(localMessage);  // only inside function
}
showMessage();

console.log("5 + 10 =", addNumbers(5, 10)); // Example usage

// ==============================
// Part 3: Combine CSS + JS
// ==============================
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  // Add class to trigger animation
  box.classList.add("animate");

  // Remove it after 1.5s so it can be replayed
  setTimeout(() => {
    box.classList.remove("animate");
  }, 1500);
});

// ==============================
// Bonus: Custom Form Validation
// ==============================
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop default submit
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (username === "" || email === "") {
    alert("⚠️ All fields are required!");
    return;
  }

  if (!email.includes("@")) {
    alert("⚠️ Please enter a valid email!");
    return;
  }

  alert("✅ Form submitted successfully!");
});
