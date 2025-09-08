
let isGiftOpen = false;

function toggleGift(giftId, shouldOpen) {
  const gift = document.getElementById(giftId);
  if (shouldOpen) {
    gift.classList.add("open");
  } else {
    gift.classList.remove("open");
  }
  return shouldOpen; // return state
}

function openGift() {
  // local variable
  let action = isGiftOpen ? "Closing gift..." : "Opening gift...";
  console.log(action);

  // update global variable
  isGiftOpen = toggleGift("magicGift", !isGiftOpen);
}

function wiggleGift() {
  const gift = document.getElementById("magicGift");
  gift.classList.add("wiggle");
  setTimeout(() => gift.classList.remove("wiggle"), 600);
}

function resetGift() {
  isGiftOpen = toggleGift("magicGift", false);
  console.log("Gift reset!");
}

const btn = document.getElementById("animate-btn");
const giftBox = document.getElementById("magicGift");

btn.addEventListener("click", openGift);      // click → flip gift
btn.addEventListener("mouseover", wiggleGift); // hover → wiggle
giftBox.addEventListener("dblclick", resetGift); // double click → reset
