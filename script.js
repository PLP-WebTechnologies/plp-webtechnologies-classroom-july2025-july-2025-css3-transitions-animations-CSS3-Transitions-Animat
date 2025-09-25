// Part 2: Global variable to track spinner state
let isSpinnerActive = false;

// Part 2: Function to check book availability (demonstrates parameters and return)
function checkBookAvailability(totalCopies, loanedCopies) {
    // Local scope variables
    const availableCopies = totalCopies - loanedCopies;
    return availableCopies > 0 ? `Available: ${availableCopies} copies` : 'No copies available';
}

// Part 2: Function to update availability display (demonstrates reuse and DOM manipulation)
function updateAvailabilityDisplay(total, loaned, elementId) {
    const availabilityText = checkBookAvailability(total, loaned);
    document.getElementById(elementId).textContent = availabilityText;
}

// Part 3: Function to flip card (triggers CSS animation)
function flipCard() {
    const card = document.getElementById('library-card');
    card.classList.toggle('flipped');
}

// Part 3: Function to show modal (triggers CSS slide-in animation)
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
}

// Part 3: Function to hide modal (triggers CSS slide-out animation)
function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Part 3: Function to toggle spinner (triggers CSS animation)
function toggleSpinner() {
    isSpinnerActive = !isSpinnerActive;
    const spinner = document.getElementById('spinner');
    spinner.classList.toggle('active', isSpinnerActive);
}

// Part 2: Initialize availability on page load
document.addEventListener('DOMContentLoaded', () => {
    // Example usage of reusable function with different parameters
    updateAvailabilityDisplay(5, 2, 'availability');
});
