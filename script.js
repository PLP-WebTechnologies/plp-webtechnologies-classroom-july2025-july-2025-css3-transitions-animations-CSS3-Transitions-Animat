/**
 * We wrap all our code in a 'DOMContentLoaded' event listener.
 * This ensures that the JavaScript code doesn't run until the
 * HTML document has been fully loaded and parsed.
 */
document.addEventListener('DOMContentLoaded', () => {

    /*
    |--------------------------------------------------------------------------
    | Part 2: JavaScript Functions (Scope, Parameters, Return)
    |--------------------------------------------------------------------------
    */

    // --- 2a. Local vs. Global Scope ---

    // This variable is in the GLOBAL scope for this script.
    // Any function can access and modify it.
    let globalName = 'Not Set';

    // Get DOM elements for this demo
    const nameInput = document.getElementById('nameInput');
    const setGlobalBtn = document.getElementById('setGlobalBtn');
    const localScopeBtn = document.getElementById('localScopeBtn');
    const scopeDisplay = document.getElementById('scopeDisplay');

    /**
     * Function to update the global variable.
     * It has a "side effect" of changing `globalName`.
     */
    function setGlobalName() {
        globalName = nameInput.value || 'Anonymous';
        scopeDisplay.textContent = `Global name is: ${globalName}`;
        console.log(`Global name set to: ${globalName}`);
    }

    /**
     * Function to demonstrate local scope.
     * It defines a variable that *only* exists inside this function.
     */
    function demoLocalScope() {
        // This variable is in the LOCAL scope of `demoLocalScope`.
        // It "shadows" any global variable with the same name.
        let localName = 'LocalScopeUser';
        
        // This function can *access* the global variable...
        let message = `Inside local scope:\n- localName is: ${localName}\n- globalName is: ${globalName}`;
        console.log(message);
        
        // Use our custom, non-blocking alert
        showCustomAlert('Scope Demonstration', message.replace(/\n/g, '<br>'));
    }

    // Attach event listeners
    setGlobalBtn.addEventListener('click', setGlobalName);
    localScopeBtn.addEventListener('click', demoLocalScope);


    // --- 2b. Advanced Scope: Closure (Function Factory) ---
    
    const counterBtn = document.getElementById('counterBtn');

    /**
     * This is a "function factory". It creates and returns a new function.
     * @returns {Function} A new function that acts as a counter.
     */
    function createCounter() {
        // This `count` variable is "enclosed" in the returned function's scope.
        // It is private and persists across calls. This is a "closure".
        let count = 0;
        
        // Return a new function
        return function() {
            count++;
            return count;
        };
    }

    // Create a new, specific counter instance
    const myCounter = createCounter();

    counterBtn.addEventListener('click', () => {
        const newCount = myCounter(); // Call the *returned* function
        counterBtn.textContent = `Clicked ${newCount} times`;
    });
    

    // --- 2c. Parameters & Return Values ---

    const createElementBtn = document.getElementById('createElementBtn');
    const elementFactoryOutput = document.getElementById('elementFactoryOutput');

    /**
     * A reusable, "pure" function to create a new DOM element.
     * @param {string} tag - The HTML tag to create (e.g., 'p', 'div').
     * @param {string} text - The text content for the new element.
     * @param {string} [cssClass] - (Optional) A CSS class to add.
     * @returns {HTMLElement} The newly created DOM element (return value).
     */
    function createElementWithText(tag, text, cssClass) {
        const newElement = document.createElement(tag);
        newElement.textContent = text;
        if (cssClass) {
            newElement.classList.add(cssClass);
        }
        // Return the fully-formed element
        return newElement;
    }

    createElementBtn.addEventListener('click', () => {
        // Call our function with parameters
        const newDiv = createElementWithText('div', `I was created at ${new Date().toLocaleTimeString()}`, 'dynamic-div');
        
        // Use the returned value
        elementFactoryOutput.prepend(newDiv); // prepend adds it to the top
    });


    /*
    |--------------------------------------------------------------------------
    | Part 3: Combining CSS Animations with JavaScript
    |--------------------------------------------------------------------------
    */

    // --- 3a. Trigger Animation ---
            
    const triggerBtn = document.getElementById('triggerAnimationBtn');
    const jsTriggerBox = document.getElementById('jsTriggerBox');
    
    /**
     * A reusable function to apply a CSS animation to an element.
     * @param {HTMLElement} element - The DOM element to animate
     * @param {string} animationClass - The CSS class containing the animation
     */
    function triggerAnimation(element, animationClass) {
        // 1. Remove the class if it already exists to reset the animation
        element.classList.remove(animationClass);
        
        // 2. Force a "reflow"
        // This trick ensures the browser notices the class removal
        // before re-adding it, allowing the animation to run again.
        void element.offsetWidth; 
        
        // 3. Add the class to trigger the animation
        element.classList.add(animationClass);

        // 4. Remove the class after the animation finishes
        // This keeps the DOM clean. We get the duration from CSS (0.5s = 500ms)
        element.addEventListener('animationend', () => {
             element.classList.remove(animationClass);
        }, { once: true }); // {once: true} auto-removes the listener
    }

    triggerBtn.addEventListener('click', () => {
        triggerAnimation(jsTriggerBox, 'shake-animation');
    });


    // --- 3b. Card Flip ---
            
    const flipCard = document.getElementById('flipCard');

    flipCard.addEventListener('click', () => {
        // `classList.toggle()` is the perfect tool for this.
        // It adds 'is-flipped' if not present, and removes it if present.
        flipCard.querySelector('.flip-card-inner').classList.toggle('is-flipped');
    });


    // --- 3c. Modal ---
            
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    function openModal() {
        modal.classList.add('is-visible');
    }
    
    function closeModal() {
        modal.classList.remove('is-visible');
    }

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    
    // Also close modal if user clicks on the overlay (background)
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- 3d. Loading Bar ---
    
    const startLoadBtn = document.getElementById('startLoadBtn');
    const resetLoadBtn = document.getElementById('resetLoadBtn');
    const loadingBar = document.getElementById('loadingBar');

    startLoadBtn.addEventListener('click', () => {
        // Set to 0% first in case it was already run
        loadingBar.style.width = '0%';
        
        // Use setTimeout to simulate a process and update after a short delay
        setTimeout(() => {
            // JS directly modifies the 'width' style.
            // CSS handles the transition to animate the change.
            loadingBar.style.width = '100%';
        }, 100); // 100ms delay
    });

    resetLoadBtn.addEventListener('click', () => {
        loadingBar.style.width = '0%';
    });


    // --- 3e. Staggered Animations ---
    
    const staggerBtn = document.getElementById('staggerBtn');
    const staggerItems = document.querySelectorAll('#staggerList .stagger-item');

    staggerBtn.addEventListener('click', () => {
        // First, reset all items (in case we run it again)
        staggerItems.forEach(item => {
            item.classList.remove('is-visible');
        });

        // Loop through each item and add the class with a delay
        staggerItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('is-visible');
            }, index * 150); // 150ms delay for each item
        });
    });


    /*
    |--------------------------------------------------------------------------
    | Helper Functions
    |--------------------------------------------------------------------------
    */

    /**
     * A helper function to create a simple, non-blocking modal alert
     * This avoids using the ugly and blocking `window.alert()`
     */
    function showCustomAlert(title, message) {
        // Create elements dynamically
        const alertOverlay = document.createElement('div');
        alertOverlay.className = 'modal-overlay is-visible';
        
        const alertContent = document.createElement('div');
        alertContent.className = 'modal-content';
        
        const alertTitle = document.createElement('h2');
        alertTitle.textContent = title;
        
        const alertMessage = document.createElement('p');
        alertMessage.innerHTML = message; // Use innerHTML to render line breaks
        
        const alertCloseBtn = document.createElement('button');
        alertCloseBtn.className = 'btn btn-primary w-full';
        alertCloseBtn.textContent = 'Got it!';
        
        // Assemble the modal
        alertContent.appendChild(alertTitle);
        alertContent.appendChild(alertMessage);
        alertContent.appendChild(alertCloseBtn);
        alertOverlay.appendChild(alertContent);
        document.body.appendChild(alertOverlay);
        
        // Add event listeners to close
        const closeAlert = () => document.body.removeChild(alertOverlay);
        alertCloseBtn.addEventListener('click', closeAlert);
        alertOverlay.addEventListener('click', (event) => {
            if (event.target === alertOverlay) {
                closeAlert();
            }
        });
    }

});
