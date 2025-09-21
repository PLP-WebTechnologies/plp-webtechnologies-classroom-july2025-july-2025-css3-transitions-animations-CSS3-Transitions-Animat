/* --------------------------------

   Part 2: JavaScript Functions

-------------------------------- */

// Example: function with parameters & return values

function calculateArea(width, height) {

  return width * height;

}

// Demonstrating local vs global scope

let globalMessage = "Hello from the global scope!";

function showScopeExample() {

  let localMessage = "This is inside the function.";

  console.log(globalMessage); // accessible

  console.log(localMessage);  // accessible only here

}

// showScopeExample(); // try calling in console

// Reusable function to add a class for animation

function triggerAnimation(element, animationClass) {

  element.classList.add(animationClass);

  // Remove the class when animation ends, so it can be reused

  element.addEventListener("animationend", () => {

    element.classList.remove(animationClass);

  }, { once: true });

}

/* --------------------------------

   Part 3: Combine CSS + JS

-------------------------------- */

const box = document.getElementById("animatedBox");

const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {

  triggerAnimation(box, "bounce");

});

// Popup example

const popup = document.getElementById("popup");

const showPopupBtn = document.getElementById("showPopup");

const closePopupBtn = document.getElementById("closePopup");

showPopupBtn.addEventListener("click", () => {

  popup.classList.add("show");

});

closePopupBtn.addEventListener("click", () => {

  popup.classList.remove("show");

});