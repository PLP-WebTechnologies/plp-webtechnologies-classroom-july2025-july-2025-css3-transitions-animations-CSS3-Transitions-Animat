/* JavaScript Code for Interactive Web Page */
// Ensuring strict mode for better error handling
        // Global variables to demonstrate scope
        let globalCounter = 0;
        const themes = ['light', 'dark'];
        
        // Utility Functions with Clear Parameter Usage and Return Values
        
        /**
         * Pure function demonstrating parameters and return values
         * @param {number} base - Base number
         * @param {number} multiplier - Multiplier value
         * @param {string} operation - Operation type
         * @returns {number} Calculated result
         */
        function calculateValue(base, multiplier, operation = 'multiply') {
            // Local scope variables
            let result;
            const localModifier = 10;
            
            switch(operation) {
                case 'multiply':
                    result = base * multiplier;
                    break;
                case 'add':
                    result = base + multiplier + localModifier;
                    break;
                case 'power':
                    result = Math.pow(base, multiplier);
                    break;
                default:
                    result = base;
            }
            
            return result;
        }

        /**
         * Function demonstrating scope awareness
         * Shows difference between local and global variables
         */
        function demonstrateScope() {
            // Local variable with same name as global
            let globalCounter = 100; // This shadows the global variable
            const localValue = 42;
            
            // Function demonstrating closure
            function innerFunction() {
                const innerValue = 'Inner scope';
                return `${innerValue}: ${localValue}`;
            }
            
            const output = `
                <strong>Scope Demonstration:</strong><br>
                Global counter: ${window.globalCounter || 0}<br>
                Local counter: ${globalCounter}<br>
                Inner function result: ${innerFunction()}<br>
                <small>Note: Local variable shadows global variable</small>
            `;
            
            updateOutput(output);
            
            // Increment actual global counter
            window.globalCounter = (window.globalCounter || 0) + 1;
        }

        /**
         * Function using parameters to calculate and display results
         */
        function calculateAndDisplay() {
            const base = Math.floor(Math.random() * 20) + 1;
            const multiplier = Math.floor(Math.random() * 5) + 1;
            
            const multiplyResult = calculateValue(base, multiplier, 'multiply');
            const addResult = calculateValue(base, multiplier, 'add');
            const powerResult = calculateValue(base, multiplier, 'power');
            
            const output = `
                <strong>Calculation Results:</strong><br>
                Base: ${base}, Multiplier: ${multiplier}<br>
                Multiply: ${multiplyResult}<br>
                Add (with local modifier): ${addResult}<br>
                Power: ${powerResult}
            `;
            
            updateOutput(output);
        }

        /**
         * Utility function to update output display
         * @param {string} content - HTML content to display
         */
        function updateOutput(content) {
            const outputElement = document.getElementById('function-output');
            outputElement.innerHTML = content;
            
            // Add animation class
            outputElement.style.animation = 'none';
            outputElement.offsetHeight; // Trigger reflow
            outputElement.style.animation = 'pulse 0.5s ease';
        }

        // Theme Management Functions

        /**
         * Toggle between light and dark themes
         */
        function toggleTheme() {
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            
            // Store theme preference
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('theme', newTheme);
            }
        }

        // Animation Control Functions

        /**
         * Trigger random animation on element
         * @param {HTMLElement} element - Target element
         */
        function triggerRandomAnimation(element) {
            const animations = ['bounce', 'spin', 'shake', 'pulse'];
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            
            // Remove existing animation classes
            animations.forEach(anim => element.classList.remove(anim));
            
            // Add new animation
            element.classList.add(randomAnimation);
            
            // Remove animation class after animation completes
            setTimeout(() => {
                element.classList.remove(randomAnimation);
            }, 1000);
        }

        /**
         * Flip card animation
         * @param {HTMLElement} card - Card element to flip
         */
        function flipCard(card) {
            card.classList.toggle('flipped');
        }

        /**
         * Animate progress bar with callback
         * @param {number} duration - Animation duration in ms
         * @param {Function} callback - Optional callback function
         */
        function animateProgress(duration = 2000, callback) {
            const progressBar = document.getElementById('progressBar');
            const startTime = performance.now();
            
            function updateProgress(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easedProgress = easeOutCubic(progress);
                progressBar.style.width = `${easedProgress * 100}%`;
                
                if (progress < 1) {
                    requestAnimationFrame(updateProgress);
                } else {
                    // Animation complete
                    if (callback && typeof callback === 'function') {
                        callback();
                    }
                    
                    // Reset after delay
                    setTimeout(() => {
                        progressBar.style.width = '0%';
                    }, 1000);
                }
            }
            
            requestAnimationFrame(updateProgress);
        }

        /**
         * Easing function for smooth animations
         * @param {number} t - Progress value (0-1)
         * @returns {number} Eased value
         */
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        // Modal Functions

        /**
         * Show modal with animation
         */
        function showModal() {
            const modal = document.getElementById('demoModal');
            modal.classList.add('show');
            
            // Update modal content with function results
            const dynamicContent = document.getElementById('modal-content-dynamic');
            const timestamp = new Date().toLocaleTimeString();
            dynamicContent.innerHTML = `<p>Modal opened at: ${timestamp}</p>`;
        }

        /**
         * Close modal with animation
         */
        function closeModal() {
            const modal = document.getElementById('demoModal');
            modal.classList.remove('show');
        }

        /**
         * Update modal content dynamically
         */
        function updateModalContent() {
            const dynamicContent = document.getElementById('modal-content-dynamic');
            const randomValue = Math.floor(Math.random() * 1000);
            const calculatedValue = calculateValue(randomValue, 2, 'multiply');
            
            dynamicContent.innerHTML = `
                <p><strong>Dynamic Update:</strong></p>
                <p>Random: ${randomValue}</p>
                <p>Calculated: ${calculatedValue}</p>
                <p>Updated: ${new Date().toLocaleTimeString()}</p>
            `;
        }

        // Advanced Animation Functions

        /**
         * Create loading sequence with multiple steps
         */
        function startLoadingSequence() {
            const spinner = document.getElementById('loadingSpinner');
            const steps = [
                { message: 'Initializing...', duration: 500 },
                { message: 'Loading data...', duration: 1000 },
                { message: 'Processing...', duration: 800 },
                { message: 'Complete!', duration: 500 }
            ];
            
            spinner.classList.add('active');
            
            let currentStep = 0;
            
            function executeStep() {
                if (currentStep < steps.length) {
                    const step = steps[currentStep];
                    updateOutput(`<strong>${step.message}</strong>`);
                    
                    setTimeout(() => {
                        currentStep++;
                        executeStep();
                    }, step.duration);
                } else {
                    spinner.classList.remove('active');
                    updateOutput('<strong>Loading sequence complete!</strong>');
                }
            }
            
            executeStep();
        }

        /**
         * Create particle explosion effect
         * @param {HTMLElement} button - Button that triggered the effect
         */
        function createParticleExplosion(button) {
            const container = document.getElementById('particle-container');
            const rect = button.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            // Calculate relative position
            const centerX = rect.left - containerRect.left + rect.width / 2;
            const centerY = rect.top - containerRect.top + rect.height / 2;
            
            // Create particles
            for (let i = 0; i < 15; i++) {
                createParticle(container, centerX, centerY);
            }
        }

        /**
         * Create individual particle
         * @param {HTMLElement} container - Container element
         * @param {number} x - X position
         * @param {number} y - Y position
         */
        function createParticle(container, x, y) {
            const particle = document.createElement('div');
            const size = Math.random() * 8 + 4;
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 100 + 50;
            
            particle.style.position = 'absolute';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = '#06b6d4';
            particle.style.borderRadius = '50%';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.pointerEvents = 'none';
            
            container.appendChild(particle);
            
            // Animate particle
            const deltaX = Math.cos(angle) * velocity;
            const deltaY = Math.sin(angle) * velocity;
            
            particle.animate([
                {
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translate(${deltaX}px, ${deltaY}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).addEventListener('finish', () => {
                particle.remove();
            });
        }

        /**
         * Apply 3D transformation effect
         * @param {HTMLElement} button - Button element
         */
        function create3DEffect(button) {
            const originalTransform = button.style.transform;
            
            button.style.transform = 'perspective(1000px) rotateX(15deg) rotateY(15deg) scale(1.1)';
            button.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            
            setTimeout(() => {
                button.style.transform = originalTransform;
                button.style.boxShadow = '';
            }, 2000);
        }

        /**
         * Trigger micro-interaction animation
         * @param {HTMLElement} element - Target element
         */
        function triggerMicroInteraction(element) {
            const keyframes = [
                { transform: 'scale(1) rotate(0deg)', filter: 'hue-rotate(0deg)' },
                { transform: 'scale(1.05) rotate(2deg)', filter: 'hue-rotate(90deg)' },
                { transform: 'scale(1.1) rotate(-1deg)', filter: 'hue-rotate(180deg)' },
                { transform: 'scale(1) rotate(0deg)', filter: 'hue-rotate(360deg)' }
            ];
            
            element.animate(keyframes, {
                duration: 600,
                easing: 'ease-in-out'
            });
        }

        /**
         * Create wave propagation effect
         */
        function waveEffect() {
            const cards = document.querySelectorAll('.glass-card');
            
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transform = 'translateY(-20px) scale(1.02)';
                    card.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.3)';
                    
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 300);
                }, index * 100);
            });
        }

        /**
         * Morph card with advanced animation
         * @param {HTMLElement} button - Trigger button
         */
        function morphCard(button) {
            const card = button.closest('.glass-card');
            const originalBorderRadius = card.style.borderRadius;
            const originalBackground = card.style.background;
            
            // Morph animation keyframes
            const morphKeyframes = [
                {
                    borderRadius: 'var(--border-radius)',
                    background: 'var(--glass-bg)',
                    transform: 'scale(1) rotate(0deg)'
                },
                {
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                    transform: 'scale(1.1) rotate(180deg)'
                },
                {
                    borderRadius: '0%',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    transform: 'scale(0.95) rotate(360deg)'
                },
                {
                    borderRadius: 'var(--border-radius)',
                    background: 'var(--glass-bg)',
                    transform: 'scale(1) rotate(0deg)'
                }
            ];
            
            card.animate(morphKeyframes, {
                duration: 2000,
                easing: 'ease-in-out'
            });
        }

        // Background Particle System

        /**
         * Initialize background particles
         */
        function initializeParticles() {
            const particleContainer = document.getElementById('particles');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                createBackgroundParticle(particleContainer);
            }
        }

        /**
         * Create background particle
         * @param {HTMLElement} container - Particle container
         */
        function createBackgroundParticle(container) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning and animation delay
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 6}s`;
            particle.style.animationDuration = `${4 + Math.random() * 4}s`;
            
            container.appendChild(particle);
        }

        // Event Listeners and Initialization

        /**
         * Initialize application
         */
        function initializeApp() {
            // Load saved theme
            if (typeof(Storage) !== "undefined") {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme && savedTheme !== document.body.getAttribute('data-theme')) {
                    toggleTheme();
                }
            }
            
            // Initialize particles
            initializeParticles();
            
            // Add global event listeners
            setupGlobalEventListeners();
            
            // Initialize tooltips and accessibility features
            initializeAccessibility();
        }

        /**
         * Setup global event listeners
         */
        function setupGlobalEventListeners() {
            // Close modal on outside click
            document.getElementById('demoModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
                
                // Theme toggle with keyboard shortcut
                if (e.ctrlKey && e.key === 't') {
                    e.preventDefault();
                    toggleTheme();
                }
            });
            
            // Add hover effects to buttons
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.filter = 'brightness(1.1)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.filter = '';
                });
            });
            
            // Add intersection observer for scroll animations
            if ('IntersectionObserver' in window) {
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };
                
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                        }
                    });
                }, observerOptions);
                
                // Observe all cards
                document.querySelectorAll('.glass-card').forEach(card => {
                    observer.observe(card);
                });
            }
        }

        /**
         * Initialize accessibility features
         */
        function initializeAccessibility() {
            // Add focus indicators for keyboard navigation
            const focusableElements = document.querySelectorAll('button, .flip-card, .animated-box');
            
            focusableElements.forEach(element => {
                element.addEventListener('focus', function() {
                    this.style.outline = '2px solid var(--accent-color)';
                    this.style.outlineOffset = '2px';
                });
                
                element.addEventListener('blur', function() {
                    this.style.outline = '';
                    this.style.outlineOffset = '';
                });
            });
            
            // Add ARIA labels dynamically
            const flipCards = document.querySelectorAll('.flip-card');
            flipCards.forEach((card, index) => {
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
                card.setAttribute('aria-label', `Flip card ${index + 1}`);
            });
            
            // Add keyboard support for interactive elements
            document.querySelectorAll('.flip-card, .animated-box').forEach(element => {
                element.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });
        }

        // Performance Optimization Functions

        /**
         * Debounce function for performance optimization
         * @param {Function} func - Function to debounce
         * @param {number} wait - Wait time in milliseconds
         * @returns {Function} Debounced function
         */
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func.apply(this, args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        /**
         * Throttle function for performance optimization
         * @param {Function} func - Function to throttle
         * @param {number} limit - Time limit in milliseconds
         * @returns {Function} Throttled function
         */
        function throttle(func, limit) {
            let inThrottle;
            return function executedFunction(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }

        // Additional Animation Keyframes
        const additionalStyles = `
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes glowPulse {
                0%, 100% {
                    box-shadow: 0 0 5px var(--primary-color);
                }
                50% {
                    box-shadow: 0 0 20px var(--primary-color), 0 0 30px var(--primary-color);
                }
            }
            
            @keyframes typewriter {
                from { width: 0; }
                to { width: 100%; }
            }
            
            @keyframes blink {
                50% { border-color: transparent; }
            }
        `;

        // Inject additional styles
        const styleSheet = document.createElement('style');
        styleSheet.textContent = additionalStyles;
        document.head.appendChild(styleSheet);

        // Initialize app when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }

        // Export functions for testing (if in development environment)
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = {
                calculateValue,
                demonstrateScope,
                easeOutCubic,
                debounce,
                throttle
            };
        }
