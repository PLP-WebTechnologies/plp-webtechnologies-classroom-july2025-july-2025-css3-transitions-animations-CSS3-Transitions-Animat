// Part 1: Animate Box with JS Function
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

function animateBox() {
    // Toggle scale and background color
    box.style.transform = box.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
    box.style.backgroundColor = box.style.backgroundColor === "rgb(255, 87, 51)" ? "#33C1FF" : "#FF5733";
}

animateBtn.addEventListener("click", animateBox);

// Part 2: Card Flip Function
const card = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");

function flipCard() {
    card.classList.toggle("flip");
}

flipBtn.addEventListener("click", flipCard);

// Part 3: Modal Popup
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
    modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Part 4: Function with parameters and return value
function calculateArea(width, height) {
    return width * height;
}

console.log("Area of 10x20 box:", calculateArea(10, 20));
