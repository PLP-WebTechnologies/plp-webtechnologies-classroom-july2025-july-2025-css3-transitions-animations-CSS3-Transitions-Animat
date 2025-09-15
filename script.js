function getAnimationDuration(speed) {
  if (speed === "fast") return 500;
  if (speed === "slow") return 1500;
  return 1000;
}

function animateElement(selector, speed) {
  const element = document.querySelector(selector);
  const duration = getAnimationDuration(speed);

  element.classList.add("animate");

  setTimeout(() => {
    element.classList.remove("animate");
  }, duration);
}

function handleFastClick() {
  animateElement(".box", "fast");
}

function handleSlowClick() {
  animateElement(".box", "slow");
}

document.getElementById("animateBtn").addEventListener("click", handleFastClick);
document.getElementById("slowAnimateBtn").addEventListener("click", handleSlowClick);

document.querySelector(".card").addEventListener("click", function () {
  this.classList.toggle("flipped");
});

const loader = document.querySelector(".loader");
setInterval(() => {
  loader.classList.toggle("active");
}, 3000);

document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "m") {
    document.querySelector(".modal").classList.toggle("visible");
  }
});