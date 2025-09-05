let animationsEnabled = true;
let cardCounter = 1;

document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    setupEventListeners();
});

// ===== PART 1: CSS ANIMATION CONTROLS =====
function toggleAnimations() {
    animationsEnabled = !animationsEnabled;
    
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (animationsEnabled) {
            element.style.animationPlayState = 'running';
        } else {
            element.style.animationPlayState = 'paused';
        }
    });
    
    return animationsEnabled;
}

/**
 * Toggles dark mode theme
 * Demonstrates class manipulation and CSS transitions
 */
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
    
    return isDarkMode;
}

// ===== PART 2: CARD GALLERY FUNCTIONS =====
function initializeGallery() {
    const cardsContainer = document.getElementById('cardsContainer');
    const initialCards = 3;
    
    for (let i = 0; i < initialCards; i++) {
        const card = createCard(`Card ${cardCounter}`, `This is sample card content for card ${cardCounter}.`);
        cardsContainer.appendChild(card);
        cardCounter++;
    }
}

function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card animate-fadeIn';
    
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="btn-secondary" onclick="removeCard(this.parentElement)">Remove</button>
        <button class="btn-info" onclick="animateCard(this.parentElement, 'bounce')">Bounce!</button>
    `;
    
    return card;
}

function addCard() {
    const cardsContainer = document.getElementById('cardsContainer');
    const card = createCard(
        `Card ${cardCounter}`, 
        `This is dynamically added card number ${cardCounter}.`
    );
    
    cardsContainer.appendChild(card);
    cardCounter++;
    
    return cardCounter - 1; // Return the card number that was added
}

function removeCard(card) {
    card.style.transform = 'scale(0.8)';
    card.style.opacity = '0';
    card.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        card.remove();
    }, 300);
}

function animateCard(card, animationType) {
    // Remove any existing animation classes
    const animationClasses = ['animate-fadeIn', 'animate-slideIn', 'animate-pulse', 'animate-bounce'];
    card.classList.remove(...animationClasses);
    
    // Add the requested animation
    card.classList.add(`animate-${animationType}`);
    
    // Remove animation class after it completes
    setTimeout(() => {
        card.classList.remove(`animate-${animationType}`);
    }, 600);
}

function shuffleCards() {
    const cardsContainer = document.getElementById('cardsContainer');
    const cards = Array.from(cardsContainer.children);
    
    // Fisher-Yates shuffle algorithm
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        cardsContainer.appendChild(cards[j]);
    }
    
    // Animate each card after shuffling
    cards.forEach((card, index) => {
        setTimeout(() => {
            animateCard(card, 'slideIn');
        }, index * 100);
    });
}

// ===== PART 3: MATHEMATICAL FUNCTION DEMO =====

/**
 * Calculates the square of a number and displays the result
 * Demonstrates parameters, return values, and DOM manipulation
 */
function calculateSquare() {
    const input = document.getElementById('numberInput');
    const resultOutput = document.getElementById('resultOutput');
    
    const number = parseFloat(input.value);
    
    if (isNaN(number)) {
        showResult('Please enter a valid number!', 'error');
        return null;
    }
    
    const square = calculateSquareNumber(number);
    showResult(`The square of ${number} is ${square}`, 'success');
    
    return square;
}

/**
 * Calculates the square of a number
 * @param {number} num - The number to square
 * @returns {number} The squared result
 */
function calculateSquareNumber(num) {
    return num * num;
}

/**
 * Displays a result message with animation
 * @param {string} message - The message to display
 * @param {string} type - The message type (success, error, info)
 */
function showResult(message, type = 'info') {
    const resultOutput = document.getElementById('resultOutput');
    
    resultOutput.textContent = message;
    resultOutput.className = ''; // Clear previous classes
    
    // Add type-specific styling
    resultOutput.classList.add(type);
    resultOutput.classList.add('animate-pulse');
    
    // Remove animation class after completion
    setTimeout(() => {
        resultOutput.classList.remove('animate-pulse');
    }, 500);
}

// ===== EVENT LISTENER SETUP =====

/**
 * Sets up all event listeners for the application
 * Demonstrates modular function organization
 */
function setupEventListeners() {
    // Animation controls
    document.getElementById('toggleAnimations').addEventListener('click', function() {
        const status = toggleAnimations();
        this.textContent = status ? 'Disable Animations' : 'Enable Animations';
    });
    
    document.getElementById('changeTheme').addEventListener('click', function() {
        const isDark = toggleDarkMode();
        this.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
    
    // Gallery controls
    document.getElementById('addCard').addEventListener('click', addCard);
    document.getElementById('shuffleCards').addEventListener('click', shuffleCards);
    
    // Load saved preferences
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('changeTheme').textContent = 'Light Mode';
    }
    
    // Input field enter key support
    document.getElementById('numberInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateSquare();
        }
    });
}

// ===== UTILITY FUNCTIONS =====

/**
 * Generates a random color (demonstrates return values)
 * @returns {string} A random hex color
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - The function to debounce
 * @param {number} wait - The wait time in milliseconds
 * @returns {Function} The debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
