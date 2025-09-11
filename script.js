
let animationCount = 0;

// Function with parameter & return value
function incrementCount(by) {
  animationCount += by;
  return animationCount;
}

// Function to animate box (demonstrates scope)
function animateBox() {
  const box = document.getElementById('animBox');
  box.classList.remove('animate'); // reset animation
  void box.offsetWidth; // force reflow
  box.classList.add('animate');
  incrementCount(1);
}

// Modal logic using functions
function showModal() {
  document.getElementById('modal').classList.add('show');
}
function hideModal() {
  document.getElementById('modal').classList.remove('show');
}

// Event listeners 
document.getElementById('animateBtn').onclick = animateBox;
document.getElementById('showModalBtn').onclick = showModal;
document.getElementById('closeModalBtn').onclick = hideModal;

// log animation count when box animates
document.getElementById('animBox').addEventListener('animationend', function() {
  console.log('Box animated', animationCount, 'times');
});