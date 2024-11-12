const storyData = {
    start: {
        text: "You are the captain of the starship 'Nova Explorer'. During a routine mission, your ship detects an unusual signal from an uncharted planet. What do you do?",
        choices: [
            { text: "Investigate the signal", nextScene: "investigateSignal" },
            { text: "Report back to command first", nextScene: "reportCommand" }
        ],
        image: "1.png"
    },
    
    investigateSignal: {
        text: "As you approach the planet, you discover an ancient alien structure emitting the signal. Your scanners detect both valuable technology and potential dangers.",
        choices: [
            { text: "Land near the structure", nextScene: "landNear" },
            { text: "Send a drone to investigate", nextScene: "sendDrone" }
        ],
        image: "2.png"
    },
    
    reportCommand: {
        text: "Command is interested but concerned about the risk. They give you two options.",
        choices: [
            { text: "Wait for backup to arrive", nextScene: "waitBackup" },
            { text: "Return with better equipment", nextScene: "betterEquipment" }
        ],
        image: "3.png"
    },
    
    landNear: {
        text: "You land near the structure. Your crew discovers it's a vast library of alien knowledge, but the building's security systems are active.",
        choices: [
            { text: "Try to bypass security", nextScene: "bypassSecurity" },
            { text: "Look for a peaceful way to communicate", nextScene: "communicate" }
        ],
        image: "4.png"
    },
    
    sendDrone: {
        text: "The drone discovers valuable artifacts but triggers an ancient defense system. Energy readings are increasing rapidly.",
        choices: [
            { text: "Attempt to retrieve the drone", nextScene: "retrieveDrone" },
            { text: "Abandon the drone and retreat", nextScene: "abandonDrone" }
        ],
        image: "5.png"
    },
    
    // Endings
    bypassSecurity: {
        text: "Your attempt to bypass security fails catastrophically. The structure's defenses activate, forcing a hasty retreat. While you escape with your crew, the opportunity is lost forever. (Ending 1: Failed Mission)",
        image: "6.png"
    },
    
    communicate: {
        text: "Your peaceful approach works! The security systems recognize your non-hostile intent. You establish first contact with an AI guardian and gain access to incredible technological knowledge. Your discovery advances human civilization by centuries. (Ending 2: Peaceful Discovery)",
        image: "7.png"
    },
    
    retrieveDrone: {
        text: "The retrieval mission goes wrong. The defense system overloads, causing a massive explosion. While your ship escapes, the ancient structure and its knowledge are lost forever. (Ending 3: Catastrophic Loss)",
        image: "8.png"
    },
    
    abandonDrone: {
        text: "A wise choice! The drone is destroyed, but you gather valuable data about the defense systems. This information proves crucial for future successful missions to similar sites. (Ending 4: Strategic Retreat)",
        image: "9.png"
    },
    
    waitBackup: {
        text: "The backup team arrives with specialized equipment. Together, you make a groundbreaking discovery and establish a permanent research base. Your patience leads to one of humanity's greatest achievements. (Ending 5: Successful Cooperation)",
        image: "10.png"
    },
    
    betterEquipment: {
        text: "You return with advanced equipment, but find the structure has disappeared without a trace. Some mysteries of the universe remain unsolved. (Ending 6: Lost Opportunity)",
        image: "11.png"
    }
};

let currentScene = 'start';

function startGame() {
    currentScene = 'start';
    updatePage();
}

function updatePage() {
    const scene = storyData[currentScene];
    const storyText = document.getElementById('storyText');
    const choices = document.getElementById('choices');
    const sceneImage = document.getElementById('sceneImage');
    
    // Update story text
    storyText.textContent = scene.text;
    
    // Update image
    sceneImage.src = scene.image;
    
    // Clear previous choices
    choices.innerHTML = '';
    
    // Add new choices if they exist
    if (scene.choices) {
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.classList.add('choice-button');
            button.addEventListener('click', () => {
                currentScene = choice.nextScene;
                updatePage();
            });
            choices.appendChild(button);
        });
    } else {
        // If no choices, this is an ending - add restart button
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Play Again';
        restartButton.classList.add('choice-button');
        restartButton.addEventListener('click', startGame);
        choices.appendChild(restartButton);
    }
}

// Start the game when the page loads
window.addEventListener('load', startGame);