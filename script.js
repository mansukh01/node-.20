// Genie App - Main JavaScript

// DOM Elements
const modalContainer = document.getElementById('modal-container');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalCloseBtn = document.getElementById('modal-close-btn');
const voiceBtn = document.getElementById('voice-btn');
const micIcon = document.getElementById('mic-icon');
const toast = document.getElementById('toast');
const recipeForm = document.getElementById('recipe-form');
const ingredientsInput = document.getElementById('ingredients-input');
const generateBtn = document.getElementById('generate-btn');
const btnText = document.getElementById('btn-text');
const btnSpinner = document.getElementById('btn-spinner');
const errorMessage = document.getElementById('error-message');
const contentContainer = document.getElementById('content-container');
const settingsBtn = document.getElementById('settings-btn');
const surpriseBtn = document.getElementById('surprise-btn');
const applyChaiSettingsBtn = document.getElementById('apply-chai-settings');

// Modal Functions
function showModal(title, content) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modalContainer.classList.remove('hidden');
}

function hideModal() {
    modalContainer.classList.add('hidden');
}

// Toast Notification
function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.style.bottom = '24px';
    
    setTimeout(() => {
        toast.style.bottom = '-100px';
    }, duration);
}

// Voice Recognition Simulation
function simulateVoiceRecognition() {
    micIcon.classList.add('mic-listening');
    showToast('Listening... Say a command');
    
    // Simulate processing time
    setTimeout(() => {
        micIcon.classList.remove('mic-listening');
        const commands = [
            'Set movie night scene',
            'Turn on kitchen lights',
            'Play some relaxing music',
            'What can I cook with eggs and cheese?',
            'Set focus mode'
        ];
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        showToast(`Command received: "${randomCommand}"`);
        
        // Process simulated command
        if (randomCommand.includes('cook')) {
            ingredientsInput.value = 'eggs, cheese';
            generateRecipe();
        } else if (randomCommand.includes('movie night')) {
            activateScene('Movie Night');
        } else if (randomCommand.includes('focus mode')) {
            activateScene('Focus Mode');
        }
    }, 3000);
}

// Recipe Generation
function generateRecipe() {
    const ingredients = ingredientsInput.value.trim();
    
    if (!ingredients) {
        errorMessage.textContent = 'Please enter some ingredients first!';
        return;
    }
    
    errorMessage.textContent = '';
    btnText.classList.add('hidden');
    btnSpinner.classList.remove('hidden');
    
    // Simulate API call
    setTimeout(() => {
        btnText.classList.remove('hidden');
        btnSpinner.classList.add('hidden');
        
        // Generate recipe based on ingredients
        let recipeTitle, recipeTime, recipeDesc, recipeIngredients, recipeInstructions;
        
        if (ingredients.includes('paneer')) {
            recipeTitle = 'Paneer Tikka Masala';
            recipeTime = '30 mins';
            recipeDesc = 'A delicious creamy curry made with your leftover paneer and vegetables.';
            recipeIngredients = [
                '250g paneer, cubed',
                '1 large onion, finely chopped',
                '1 bell pepper (Shimla mirch), diced',
                '2 tomatoes, pureed',
                '2 tbsp oil or ghee',
                '1 tsp cumin seeds',
                '1 tbsp ginger-garlic paste',
                '1 tsp garam masala',
                '1 tsp red chili powder',
                '1/2 tsp turmeric',
                '2 tbsp fresh cream',
                'Salt to taste',
                'Fresh coriander for garnish'
            ];
            recipeInstructions = [
                'Heat oil in a pan. Add cumin seeds and let them splutter.',
                'Add chopped onions and sauté until golden brown.',
                'Add ginger-garlic paste and cook for 1 minute.',
                'Add diced bell peppers and cook for 2-3 minutes.',
                'Add tomato puree, turmeric, red chili powder, and salt. Cook until oil separates.',
                'Add paneer cubes and gently mix.',
                'Add 1/2 cup water and simmer for 5 minutes.',
                'Stir in fresh cream and garam masala.',
                'Garnish with fresh coriander and serve hot with rice or naan.'
            ];
        } else if (ingredients.includes('egg') || ingredients.includes('eggs')) {
            recipeTitle = 'Cheesy Egg Scramble';
            recipeTime = '15 mins';
            recipeDesc = 'A quick and delicious breakfast option using eggs and cheese.';
            recipeIngredients = [
                '4 eggs',
                '1/2 cup cheese, grated',
                '1 small onion, finely chopped',
                '1 small tomato, diced',
                '1 green chili, finely chopped (optional)',
                '2 tbsp butter',
                'Salt and pepper to taste',
                'Fresh herbs for garnish (optional)'
            ];
            recipeInstructions = [
                'Beat the eggs in a bowl with salt and pepper.',
                'Heat butter in a non-stick pan over medium heat.',
                'Add chopped onions and sauté until translucent.',
                'Add green chili and tomatoes, cook for 1-2 minutes.',
                'Pour in the beaten eggs and stir gently.',
                'When eggs are partially set, sprinkle grated cheese on top.',
                'Continue to cook until eggs are set but still moist and cheese is melted.',
                'Garnish with fresh herbs if desired and serve hot with toast.'
            ];
        } else if (ingredients.includes('potato') || ingredients.includes('aloo')) {
            recipeTitle = 'Spiced Potato Stir-Fry';
            recipeTime = '25 mins';
            recipeDesc = 'A flavorful and easy side dish using leftover potatoes and simple spices.';
            recipeIngredients = [
                '3 medium potatoes, boiled and cubed',
                '1 onion, finely chopped',
                '1 cup mixed vegetables (peas, carrots, beans)',
                '2 tbsp oil',
                '1 tsp cumin seeds',
                '1/2 tsp turmeric powder',
                '1 tsp red chili powder',
                '1 tsp coriander powder',
                'Salt to taste',
                'Fresh coriander leaves for garnish',
                'Lemon juice for serving'
            ];
            recipeInstructions = [
                'Heat oil in a pan. Add cumin seeds and let them splutter.',
                'Add chopped onions and sauté until golden brown.',
                'Add mixed vegetables and cook for 3-4 minutes.',
                'Add turmeric, red chili powder, coriander powder, and salt.',
                'Add boiled potato cubes and mix well.',
                'Cook on medium heat for 5-7 minutes, stirring occasionally.',
                'Garnish with fresh coriander leaves.',
                'Serve hot with a squeeze of lemon juice.'
            ];
        } else {
            recipeTitle = 'Improvised Kitchen Delight';
            recipeTime = '20 mins';
            recipeDesc = `A creative dish made with ${ingredients}.`;
            recipeIngredients = [
                `${ingredients} (as mentioned)`,
                '2 tbsp cooking oil or butter',
                'Spices according to taste',
                'Salt and pepper to taste',
                'Herbs for garnish'
            ];
            recipeInstructions = [
                'Prepare all ingredients by washing and chopping as needed.',
                'Heat oil or butter in a pan over medium heat.',
                'Add ingredients in order of cooking time (longer cooking items first).',
                'Season with spices, salt, and pepper according to taste.',
                'Cook until all ingredients are properly done.',
                'Garnish with fresh herbs and serve hot.'
            ];
        }
        
        // Build recipe HTML
        const ingredientsList = recipeIngredients.map(item => `<li>${item}</li>`).join('');
        const instructionsList = recipeInstructions.map((item, index) => `<li>${item}</li>`).join('');
        
        const recipeHTML = `
            <div class="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg p-6 animate-fade-in">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold">${recipeTitle}</h3>
                    <span class="bg-green-500/20 text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full">${recipeTime}</span>
                </div>
                <p class="text-gray-300 mb-4">${recipeDesc}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h4 class="font-medium mb-2 text-pink-400">Ingredients</h4>
                        <ul class="list-disc list-inside space-y-1 text-gray-300">
                            ${ingredientsList}
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-medium mb-2 text-pink-400">Instructions</h4>
                        <ol class="list-decimal list-inside space-y-2 text-gray-300">
                            ${instructionsList}
                        </ol>
                    </div>
                </div>
                
                <div class="border-t border-gray-700 pt-4">
                    <h4 class="font-medium mb-2 text-pink-400">Perfect Ambiance</h4>
                    <div class="flex flex-wrap gap-2">
                        <button class="ambiance-btn bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm transition">Bollywood Classics</button>
                        <button class="ambiance-btn bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 px-3 py-1 rounded-full text-sm transition">Warm Lighting</button>
                        <button class="ambiance-btn bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm transition">Dining Mode</button>
                    </div>
                </div>
            </div>
        `;
        
        contentContainer.innerHTML = recipeHTML;
        showToast('Recipe generated successfully!');
        
        // Add event listeners to ambiance buttons
        document.querySelectorAll('.ambiance-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const ambianceType = btn.textContent;
                showToast(`${ambianceType} ambiance activated!`);
            });
        });
    }, 2000);
}

// Scene Activation
function activateScene(sceneName) {
    showToast(`${sceneName} activated!`);

    // Reset all scene effects first
    document.body.className = 'bg-gray-900 text-white font-sans';
    document.querySelectorAll('.scene-effect').forEach(el => el.remove());

    if (sceneName === 'Relaxation') {
        document.body.classList.add('relaxation-mode');
        const relaxOverlay = document.createElement('div');
        relaxOverlay.className = 'scene-effect fixed inset-0 bg-blue-900 bg-opacity-30 z-0';
        document.body.appendChild(relaxOverlay);
        
        // Add floating bubbles for relaxation effect
        for (let i = 0; i < 15; i++) {
            createBubble();
        }
        
        showToast('Take a deep breath and relax... 🧘‍♀️', 4000);
    } else if (sceneName === 'Focus Mode') {
        document.body.classList.add('focus-mode');
        showToast('Time to focus. All distractions are gone. 🧘', 4000);
    } else if (sceneName === 'Romance') {
        document.body.classList.add('romance-mode');
        for (let i = 0; i < 10; i++) {
            createHeart();
        }
        showToast('Feeling the love! ❤️', 4000);
    } else if (sceneName === 'Party Mode') {
        document.body.classList.add('party-mode');
        const discoBall = document.createElement('div');
        discoBall.className = 'scene-effect disco-ball';
        document.body.appendChild(discoBall);
        showToast('Let\'s get this party started! 🕺', 4000);
    }

    // Visual feedback for scene activation
    document.querySelectorAll('.scene-btn').forEach(btn => {
        if (btn.querySelector('span').textContent === sceneName) {
            btn.classList.add('ring-4', 'ring-white', 'ring-opacity-50');
            setTimeout(() => {
                btn.classList.remove('ring-4', 'ring-white', 'ring-opacity-50');
            }, 2000);
        }
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'scene-effect heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'scene-effect bubble';
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${Math.random() * 4 + 6}s`;
    bubble.style.width = `${Math.random() * 30 + 10}px`;
    bubble.style.height = bubble.style.width;
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

// Surprise Ingredients
function getSurpriseIngredients() {
    const surpriseIngredients = [
        'paneer, tomato, onion',
        'rice, dal, ghee',
        'potato, peas, carrot',
        'chicken, lemon, ginger',
        'bread, eggs, cheese',
        'mushroom, spinach, garlic',
        'tofu, bell pepper, soy sauce',
        'pasta, tomato sauce, cheese'
    ];
    return surpriseIngredients[Math.floor(Math.random() * surpriseIngredients.length)];
}

// Apply Chai Settings
function applyChaiSettings() {
    const musicType = document.getElementById('music-select').value;
    const volume = document.getElementById('volume-slider').value;
    const warmLights = document.getElementById('warm-lights-toggle').checked;
    const brightness = document.getElementById('brightness-slider').value;
    
    let musicName = '';
    switch(musicType) {
        case 'lofi': musicName = 'Lo-Fi Beats'; break;
        case 'classical': musicName = 'Classical Indian'; break;
        case 'ambient': musicName = 'Ambient Sounds'; break;
        case 'bollywood': musicName = 'Bollywood Acoustic'; break;
    }
    
    showToast(`Chai time settings applied! Playing ${musicName} at ${volume}% volume`);
    // Here you would normally send these settings to connected devices
}

// Settings Modal Content
function showSettingsModal() {
    const settingsContent = `
        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <span>Dark Mode</span>
                <label class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="dark-mode-toggle" class="sr-only peer" checked>
                    <div class="w-11 h-6 bg-gray-600 rounded-full peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 toggle-bg"></div>
                </label>
            </div>
            <div class="flex items-center justify-between">
                <span>Voice Commands</span>
                <label class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="voice-toggle" class="sr-only peer" checked>
                    <div class="w-11 h-6 bg-gray-600 rounded-full peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 toggle-bg"></div>
                </label>
            </div>
            <div class="flex items-center justify-between">
                <span>Notifications</span>
                <label class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="notifications-toggle" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-600 rounded-full peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 toggle-bg"></div>
                </label>
            </div>
            <div class="pt-4 border-t border-gray-700">
                <h3 class="font-medium mb-2">Connected Devices</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                    <li class="flex justify-between items-center">
                        <span>Living Room Lights</span>
                        <span class="text-green-400">Connected</span>
                    </li>
                    <li class="flex justify-between items-center">
                        <span>Kitchen Speaker</span>
                        <span class="text-green-400">Connected</span>
                    </li>
                    <li class="flex justify-between items-center">
                        <span>Bedroom AC</span>
                        <span class="text-red-400">Disconnected</span>
                    </li>
                </ul>
            </div>
            <button id="add-device-btn" class="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition">+ Add New Device</button>
        </div>
    `;
    showModal('Settings', settingsContent);
    
    // Add event listener to the Add Device button
    setTimeout(() => {
        const addDeviceBtn = document.getElementById('add-device-btn');
        if (addDeviceBtn) {
            addDeviceBtn.addEventListener('click', () => {
                showAddDeviceModal();
            });
        }
    }, 100);
}

// Add Device Modal
function showAddDeviceModal() {
    const addDeviceContent = `
        <div class="space-y-4">
            <div class="mb-4">
                <label for="device-type" class="block text-sm font-medium text-gray-300 mb-1">Device Type</label>
                <select id="device-type" class="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-pink-500 focus:border-pink-500">
                    <option value="light">Smart Light</option>
                    <option value="speaker">Smart Speaker</option>
                    <option value="ac">Air Conditioner</option>
                    <option value="tv">Smart TV</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="device-name" class="block text-sm font-medium text-gray-300 mb-1">Device Name</label>
                <input type="text" id="device-name" class="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-pink-500 focus:border-pink-500" placeholder="e.g. Bedroom Light">
            </div>
            <div class="mb-4">
                <label for="device-id" class="block text-sm font-medium text-gray-300 mb-1">Device ID/IP</label>
                <input type="text" id="device-id" class="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-pink-500 focus:border-pink-500" placeholder="e.g. 192.168.1.100">
            </div>
            <button id="connect-device-btn" class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2.5 px-5 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition">Connect Device</button>
        </div>
    `;
    showModal('Add New Device', addDeviceContent);
    
    // Add event listener to the Connect Device button
    setTimeout(() => {
        const connectDeviceBtn = document.getElementById('connect-device-btn');
        if (connectDeviceBtn) {
            connectDeviceBtn.addEventListener('click', () => {
                const deviceType = document.getElementById('device-type').value;
                const deviceName = document.getElementById('device-name').value;
                
                if (!deviceName) {
                    showToast('Please enter a device name', 2000);
                    return;
                }
                
                hideModal();
                showToast(`Connecting to ${deviceName}...`, 1500);
                
                setTimeout(() => {
                    showToast(`${deviceName} connected successfully!`, 3000);
                    // Here you would normally add the device to your connected devices list
                }, 2000);
            });
        }
    }, 100);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Expense Tracker
    const expenseForm = document.getElementById('expense-form');
    const expenseDescriptionInput = document.getElementById('expense-description');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalExpenses = document.getElementById('total-expenses');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function renderExpenses() {
        if (!expenseList) return;
        expenseList.innerHTML = '';
        if (expenses.length === 0) {
            expenseList.innerHTML = '<p class="text-gray-400 text-center">No expenses added yet.</p>';
            return;
        }

        expenses.forEach((expense, index) => {
            const expenseItem = document.createElement('div');
            expenseItem.className = 'flex justify-between items-center bg-gray-700/50 p-3 rounded-lg';
            expenseItem.innerHTML = `
                <span>${expense.description}</span>
                <div class="flex items-center gap-3">
                    <span>₹${expense.amount.toFixed(2)}</span>
                    <button class="delete-expense-btn text-red-400 hover:text-red-300 transition" data-index="${index}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            `;
            expenseList.appendChild(expenseItem);
            
            // Add event listener to the delete button
            const deleteBtn = expenseItem.querySelector('.delete-expense-btn');
            deleteBtn.addEventListener('click', () => deleteExpense(index));
        });
    }
    
    function deleteExpense(index) {
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
        updateTotals();
        showToast('Expense deleted successfully!', 2000);
    }

    function updateTotals() {
        if (!totalExpenses) return;
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        totalExpenses.textContent = total.toFixed(2);
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
        updateTotals();
    }

    if (expenseForm) {
        expenseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const description = expenseDescriptionInput.value.trim();
            const amount = parseFloat(expenseAmountInput.value);

            if (description && !isNaN(amount) && amount > 0) {
                addExpense(description, amount);
                expenseDescriptionInput.value = '';
                expenseAmountInput.value = '';
                showToast('Expense added successfully!');
            } else {
                showToast('Please enter a valid description and amount.', 3000);
            }
        });
    }

    // Initial render for expense tracker
    if (expenseList && totalExpenses) {
        renderExpenses();
        updateTotals();
    }

    // Modal close button
    modalCloseBtn.addEventListener('click', hideModal);
    modalContainer.querySelector('.modal-backdrop').addEventListener('click', hideModal);
    
    // Voice button
    voiceBtn.addEventListener('click', simulateVoiceRecognition);
    
    // Recipe form
    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        generateRecipe();
    });
    
    // Surprise button
    surpriseBtn.addEventListener('click', () => {
        ingredientsInput.value = getSurpriseIngredients();
    });
    
    // Settings button
    settingsBtn.addEventListener('click', showSettingsModal);
    
    // Apply Chai Settings button
    if(applyChaiSettingsBtn) {
        applyChaiSettingsBtn.addEventListener('click', applyChaiSettings);
    }
    
    // Scene buttons
    document.querySelectorAll('.scene-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const sceneName = btn.querySelector('span').textContent;
            activateScene(sceneName);
        });
    });
});

// Initialize with a welcome toast
setTimeout(() => {
    showToast('Welcome to Genie ✨ - Your Home\'s Vibe Manager!', 4000);
}, 1000);