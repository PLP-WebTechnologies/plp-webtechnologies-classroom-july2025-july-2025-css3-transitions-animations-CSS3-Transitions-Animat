// Global scope variables
let clickCount = 0;
let isLightOn = false;

// DOM Elements
const toggleBtn = document.getElementById("toggleBtn");
const statusText = document.getElementById("statusBar");
const bulb = document.querySelector(".bulb");
const counter = document.querySelector(".counter");
const resetBtn = document.getElementById("resetBtn");

function updateUI() {
  if (isLightOn) {
    bulb.classList.add("on");
    bulb.classList.add("glow");
    bulb.classList.remove("off");
    toggleBtn.textContent = "Turn Off";
    statusText.textContent = "The light is currently ON";
    statusText.classList.add("on");
    statusText.classList.remove("off");
    toggleBtn.style.backgroundColor = "#f39c12";
  } else {
    bulb.classList.add("off");
    bulb.classList.remove("on");
    bulb.classList.remove("glow");
    toggleBtn.textContent = "Turn On";
    statusText.textContent = "The light is currently OFF";
    statusText.classList.add("off");
    statusText.classList.remove("on");
    toggleBtn.style.backgroundColor = "#2c3e50";
  }
}

function handleToggleClick() {
  isLightOn = !isLightOn;
  incrementClickCount();
  updateUI();
}

function incrementClickCount() {
  clickCount++;
  counter.textContent = clickCount;
  return clickCount;
}

function resetClickCount() {
  clickCount = 0;
  counter.textContent = clickCount;

  resetBtn.classList.add("spin");
  setTimeout(() => {
    resetBtn.classList.remove("spin");
  }, 1000);
}

// Event Listeners

toggleBtn.addEventListener("click", handleToggleClick);

resetBtn.addEventListener("click", () => {
  resetClickCount();
  if (isLightOn) {
    isLightOn = false;
    updateUI();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateUI();
});
