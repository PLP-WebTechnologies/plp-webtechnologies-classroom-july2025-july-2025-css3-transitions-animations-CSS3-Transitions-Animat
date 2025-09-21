// Global variable
let clickCount = 0;

// Function with parameters + return value
function calculateScale(count) {
  return 1 + count * 0.1;
}

// Animate the box and update count
function animateBox() {
  clickCount++;
  document.getElementById("count").textContent = clickCount;

  const box = document.querySelector(".box");
  let scale = calculateScale(clickCount); // use returned value
  box.style.transform = `scale(${scale})`;
  box.classList.add("bounce");

  // Remove bounce class after animation ends
  box.addEventListener("animationend", () => {
    box.classList.remove("bounce");
  });
}

// Event listener for button
document.getElementById("animateBtn").addEventListener("click", animateBox);

// Form validation (Part 3)
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submit
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (name === "" || email === "") {
    message.textContent = "Please fill out all fields!";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});
