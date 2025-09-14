// Example of scope, parameters, return values, and animation triggers

// GLOBAL SCOPE: Accessed by all functions
const box = document.getElementById("box");
const button = document.getElementById("animateBtn");

// FUNCTION: Adds animation class
function triggerAnimation(element, animationClass) {
  // PARAMETERS: element, animationClass
  element.classList.add(animationClass);

  // RETURN VALUE: Timer ID so we can control it if needed
  return setTimeout(() => {
    // Remove animation class so it can be triggered again
    element.classList.remove(animationClass);
  }, 1000); // matches animation duration
}

// EVENT LISTENER to button
button.addEventListener("click", () => {
  // LOCAL SCOPE: variable only exists inside this function
  let timerId = triggerAnimation(box, "animate");

  console.log("Animation triggered, timerId:", timerId);
});
