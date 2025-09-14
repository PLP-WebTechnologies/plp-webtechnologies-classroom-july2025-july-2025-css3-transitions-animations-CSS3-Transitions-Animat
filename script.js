
        // ========================================
        // PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES
        // ========================================

        // Global variables to demonstrate scope
        let globalCounter = 0;
        const globalMessage = "This is a global variable";

        /**
         * Function demonstrating parameters and return values
         * Calculates the area of a circle given a radius
         * @param {number} radius - The radius of the circle
         * @returns {number} The calculated area
         */
        function calculateCircleArea(radius) {
            if (radius <= 0) {
                return 0;
            }
            const area = Math.PI * radius * radius;
            return Math.round(area * 100) / 100; // Round to 2 decimal places
        }

        /**
         * Function that generates and returns a random color
         * Demonstrates return values and string manipulation
         * @returns {string} A random hex color code
         */
        function generateRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        /**
         * Function demonstrating local vs global scope
         * Shows how variables are accessible in different contexts
         */
        function demonstrateScope() {
            // Local variables
            const localMessage = "This is a local variable";
            let localCounter = 100;
            
            // Accessing global variable from within function
            globalCounter++;
            
            // Display scope information
            const scopeResult = document.getElementById('scopeResult');
            scopeResult.innerHTML = `
                <strong>Global Variables:</strong><br>
                globalCounter: ${globalCounter}<br>
                globalMessage: "${globalMessage}"<br><br>
                <strong>Local Variables (only accessible in this function):</strong><br>
                localMessage: "${localMessage}"<br>
                localCounter: ${localCounter}<br><br>
                <em>Note: Local variables are destroyed when function ends!</em>
            `;
        }

        /**
         * Function with closure demonstrating local scope persistence
         * Creates a counter that maintains its own local state
         */
        const createLocalCounter = (function() {
            let localCount = 0; // Private variable in closure
            
            return function() {
                localCount++;
                return localCount;
            };
        })();

        /**
         * Demonstration functions called by user interaction
         */
        function demonstrateCalculation() {
            const radiusInput = document.getElementById('radiusInput');
            const resultDiv = document.getElementById('areaResult');
            
            const radius = parseFloat(radiusInput.value);
            
            if (isNaN(radius) || radius <= 0) {
                resultDiv.innerHTML = '<span class="text-red-500">Please enter a valid positive number</span>';
                return;
            }
            
            const area = calculateCircleArea(radius);
            resultDiv.innerHTML = `
                <span class="text-green-600 font-semibold">
                    Area = π × ${radius}² = ${area} square units
                </span>
            `;
        }

        function demonstrateColorGeneration() {
            const colorResult = document.getElementById('colorResult');
            const randomColor = generateRandomColor();
            
            colorResult.style.backgroundColor = randomColor;
            colorResult.innerHTML = `
                <strong>Generated Color:</strong> ${randomColor}<br>
                <em>Each call returns a different random color!</em>
            `;
        }

        function incrementLocalCounter() {
            const count = createLocalCounter();
            document.getElementById('localCounterDisplay').textContent = count;
        }

        // ========================================
        // REUSABLE ANIMATION FUNCTIONS
        // ========================================

        /**
         * Reusable function to apply animations to elements
         * Demonstrates function parameters and DOM manipulation
         * @param {string} animationType - The type of animation to apply
         */
        function animateWithFunction(animationType) {
            const target = document.getElementById('functionAnimationTarget');
            
            // Remove any existing animation classes
            target.className = target.className.replace(/animate-\w+/g, '');
            
            // Add the specified animation class
            target.classList.add(`animate-${animationType}`);
            
            // Remove animation class after completion for repeatability
            setTimeout(() => {
                target.classList.remove(`animate-${animationType}`);
            }, 1000);
        }

        /**
         * Utility function to create timed delays
         * @param {number} ms - Milliseconds to delay
         * @returns {Promise} A promise that resolves after the delay
         */
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        /**
         * Function to validate and sanitize input parameters
         * @param {string} input - Input string to validate
         * @param {number} maxLength - Maximum allowed length
         * @returns {string} Sanitized input
         */
        function validateInput(input, maxLength = 50) {
            if (typeof input !== 'string') return '';
            return input.trim().substring(0, maxLength);
        }

        // ========================================
        // PART 3: CSS ANIMATIONS + JAVASCRIPT INTEGRATION
        // ========================================

        /**
         * Function to trigger specific animations on elements
         * Demonstrates dynamic class manipulation for CSS animations
         * @param {string} elementId - ID of the target element
         * @param {string} animationClass - CSS animation class to apply
         */
        function triggerAnimation(elementId, animationClass) {
            const element = document.getElementById(elementId);
            
            // Remove any existing animation classes
            element.className = element.className.replace(/animate-\w+/g, '');
            
            // Force reflow to ensure class removal takes effect
            element.offsetHeight;
            
            // Add new animation class
            element.classList.add(`animate-${animationClass}`);
            
            // Remove animation class after completion
            setTimeout(() => {
                element.classList.remove(`animate-${animationClass}`);
            }, 1000);
        }

        // ========================================
        // INTERACTIVE CARD FLIP SYSTEM
        // ========================================

        let isCardFlipped = false;

        /**
         * Toggle card flip animation
         * Demonstrates state management with animations
         */
        function toggleCardFlip() {
            const card = document.getElementById('flipCard');
            
            if (isCardFlipped) {
                card.classList.remove('flipped');
                isCardFlipped = false;
            } else {
                card.classList.add('flipped');
                isCardFlipped = true;
            }
        }

        // ========================================
        // DYNAMIC MODAL SYSTEM
        // ========================================

        /**
         * Show modal with specified animation
         * @param {string} animationType - Type of entrance animation
         */
        function showModal(animationType) {
            const overlay = document.getElementById('modalOverlay');
            const content = document.getElementById('modalContent');
            
            // Reset any previous animation classes
            content.className = 'modal-content';
            
            // Show overlay
            overlay.classList.add('active');
            
            // Apply entrance animation
            setTimeout(() => {
                content.classList.add(`modal-${animationType}`);
            }, 10);
        }

        /**
         * Hide modal with exit animation
         */
        function hideModal() {
            const overlay = document.getElementById('modalOverlay');
            const content = document.getElementById('modalContent');
            
            // Apply exit animation
            content.classList.add('modal-fadeOut');
            
            // Hide overlay after animation completes
            setTimeout(() => {
                overlay.classList.remove('active');
                content.classList.remove('modal-fadeOut');
            }, 300);
        }

        // ========================================
        // PROGRESS ANIMATION SYSTEM
        // ========================================

        /**
         * Animate progress bar from 0 to 100%
         * Demonstrates combining CSS transitions with JavaScript timing
         */
        async function animateProgress() {
            const progressBar = document.getElementById('progressBar');
            const progressText = document.getElementById('progressText');
            
            // Reset progress
            progressBar.style.width = '0%';
            progressText.textContent = '0%';
            
            // Animate progress
            for (let i = 0; i <= 100; i += 2) {
                progressBar.style.width = `${i}%`;
                progressText.textContent = `${i}%`;
                
                // Change color based on progress
                if (i < 30) {
                    progressBar.style.backgroundColor = '#ef4444'; // Red
                } else if (i < 70) {
                    progressBar.style.backgroundColor = '#f59e0b'; // Orange
                } else {
                    progressBar.style.backgroundColor = '#10b981'; // Green
                }
                
                await delay(50); // Wait 50ms between updates
            }
        }

        // ========================================
        // CUSTOM ANIMATION PLAYGROUND
        // ========================================

        /**
         * Create custom animation based on user inputs
         * Demonstrates parameter usage and dynamic CSS manipulation
         */
        function createCustomAnimation() {
            const element = document.getElementById('playgroundElement');
            const animationType = document.getElementById('animationType').value;
            const duration = parseFloat(document.getElementById('durationSlider').value);
            const color = document.getElementById('colorPicker').value;
            
            // Apply custom styles
            element.style.backgroundColor = color;
            element.style.animationDuration = `${duration}s`;
            
            // Remove any existing animation
            element.className = 'playground-element';
            
            // Force reflow
            element.offsetHeight;
            
            // Apply new animation
            element.classList.add(`custom-${animationType}`);
            
            // Remove animation class after completion
            setTimeout(() => {
                element.classList.remove(`custom-${animationType}`);
            }, duration * 1000);
        }

        // ========================================
        // INITIALIZATION AND EVENT LISTENERS
        // ========================================

        /**
         * Initialize the application when DOM is loaded
         */
        document.addEventListener('DOMContentLoaded', function() {
            // Update duration display when slider changes
            const durationSlider = document.getElementById('durationSlider');
            const durationValue = document.getElementById('durationValue');
            
            durationSlider.addEventListener('input', function() {
                durationValue.textContent = `${this.value}s`;
            });
            
            // Add keyboard event listeners for accessibility
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    hideModal();
                }
            });
            
            // Initialize title animation
            setTimeout(() => {
                document.getElementById('mainTitle').classList.add('title-glow');
            }, 500);
            
            console.log('🎨 Animation Playground initialized!');
            console.log('This application demonstrates:');
            console.log('• CSS3 transitions and keyframe animations');
            console.log('• JavaScript functions with parameters and return values');
            console.log('• Variable scope (global vs local)');
            console.log('• Dynamic CSS animation triggering');
            console.log('• Interactive user experiences');
        });

        // ========================================
        // UTILITY FUNCTIONS FOR ENHANCED FUNCTIONALITY
        // ========================================

        /**
         * Debounce function to limit function calls
         * @param {Function} func - Function to debounce
         * @param {number} wait - Wait time in milliseconds
         * @returns {Function} Debounced function
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

        /**
         * Function to generate random number within range
         * @param {number} min - Minimum value
         * @param {number} max - Maximum value
         * @returns {number} Random number within range
         */
        function randomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        /**
         * Function to convert hex color to RGB
         * @param {string} hex - Hex color code
         * @returns {object} RGB color object
         */
        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }

        // Example of higher-order function (function that returns a function)
        /**
         * Creates an animation function with preset parameters
         * @param {string} defaultAnimation - Default animation type
         * @param {number} defaultDuration - Default duration
         * @returns {Function} Configured animation function
         */
        function createAnimator(defaultAnimation, defaultDuration) {
            return function(elementId, customAnimation, customDuration) {
                const animation = customAnimation || defaultAnimation;
                const duration = customDuration || defaultDuration;
                
                const element = document.getElementById(elementId);
                element.style.animationDuration = `${duration}s`;
                element.classList.add(`animate-${animation}`);
                
                setTimeout(() => {
                    element.classList.remove(`animate-${animation}`);
                }, duration * 1000);
            };
        }

        // Create specialized animators using the higher-order function
        const quickBounce = createAnimator('bounce', 0.5);
        const slowFade = createAnimator('fadeIn', 2.0);

        // ========================================
        // DEMONSTRATION OF FUNCTION COMPOSITION
        // ========================================

        /**
         * Compose multiple functions together
         * @param {...Function} fns - Functions to compose
         * @returns {Function} Composed function
         */
        function compose(...fns) {
            return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
        }

        // Example functions for composition
        const addTen = (x) => x + 10;
        const multiplyByTwo = (x) => x * 2;
        const square = (x) => x * x;

        // Composed function: square(multiplyByTwo(addTen(x)))
        const complexCalculation = compose(square, multiplyByTwo, addTen);

        // Example: complexCalculation(5) = square(multiplyByTwo(addTen(5))) = square(multiplyByTwo(15)) = square(30) = 900

        console.log('🚀 Advanced JavaScript functions loaded!');
        console.log('Example of function composition: complexCalculation(5) =', complexCalculation(5));