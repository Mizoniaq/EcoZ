// Game data structure
const gameState = {
    currentDay: 1,
    scores: {
        ecoScore: 50,
        pollution: 50,
        wellBeing: 50,
        budget: 100
    }
};

// Game story
const story = [
    {
        day: 1,
        title: "The Beginning of Change",
        text: "Your city is launching a major ecological transition plan. As an engaged citizen, you must make decisions that will impact the future of your community.",
        image: "ressources2/j1 The Beginning of Change.png",
        choices: [
            {
                text: "Lead a grassroots environmental movement",
                effects: { ecoScore: 15, wellBeing: 10, budget: -20, pollution: -15 }
            },
            {
                text: "Join the city's official transition committee",
                effects: { ecoScore: 10, wellBeing: 5, budget: -5, pollution: -10 }
            },
            {
                text: "Start a sustainable business initiative",
                effects: { ecoScore: 8, wellBeing: 8, budget: 15, pollution: -8 }
            },
            {
                text: "Focus on personal lifestyle changes",
                effects: { ecoScore: 5, wellBeing: 5, budget: 0, pollution: -5 }
            },
            {
                text: "Wait and see how others react first",
                effects: { ecoScore: -5, wellBeing: -10, budget: 5, pollution: 10 }
            }
        ]
    },
    {
        day: 2,
        title: "Transport Revolution",
        text: "The city is reimagining its transportation system. Your choices will shape how people move around for decades to come.",
        image: "ressources2/j2 Transport Revolution.png",
        choices: [
            {
                text: "Advocate for a car-free city center",
                effects: { ecoScore: 20, wellBeing: 15, budget: -25, pollution: -20 }
            },
            {
                text: "Push for electric vehicle infrastructure",
                effects: { ecoScore: 12, wellBeing: 8, budget: -15, pollution: -12 }
            },
            {
                text: "Develop a bike-sharing program",
                effects: { ecoScore: 10, wellBeing: 10, budget: -10, pollution: -10 }
            },
            {
                text: "Improve existing public transport",
                effects: { ecoScore: 8, wellBeing: 5, budget: -8, pollution: -8 }
            },
            {
                text: "Keep the current system with minor improvements",
                effects: { ecoScore: -5, wellBeing: -10, budget: 10, pollution: 10 }
            }
        ]
    },
    {
        day: 3,
        title: "Food System Transformation",
        text: "The local food system needs a complete overhaul. How will you approach this challenge?",
        image: "ressources2/j3 Food System Transformation.png",
        choices: [
            {
                text: "Create a city-wide urban farming network",
                effects: { ecoScore: 18, wellBeing: 15, budget: -20, pollution: -15 }
            },
            {
                text: "Establish a local food cooperative",
                effects: { ecoScore: 12, wellBeing: 10, budget: -10, pollution: -10 }
            },
            {
                text: "Launch a zero-waste restaurant chain",
                effects: { ecoScore: 10, wellBeing: 8, budget: 20, pollution: -8 }
            },
            {
                text: "Support existing local farmers",
                effects: { ecoScore: 8, wellBeing: 5, budget: -5, pollution: -5 }
            },
            {
                text: "Focus on reducing food waste only",
                effects: { ecoScore: 5, wellBeing: 3, budget: 0, pollution: -3 }
            },
            {
                text: "Import cheap processed food",
                effects: { ecoScore: -10, wellBeing: -10, budget: 15, pollution: 15 }
            }
        ]
    },
    {
        day: 4,
        title: "Energy Revolution",
        text: "The city's energy infrastructure is outdated. A major decision about the future of power generation awaits.",
        image: "ressources2/j4 Energy Revolution.png",
        choices: [
            {
                text: "Push for 100% renewable energy by 2030",
                effects: { ecoScore: 25, wellBeing: 10, budget: -35, pollution: -25 }
            },
            {
                text: "Create a community solar power initiative",
                effects: { ecoScore: 15, wellBeing: 12, budget: -20, pollution: -15 }
            },
            {
                text: "Invest in smart grid technology",
                effects: { ecoScore: 10, wellBeing: 8, budget: 10, pollution: -10 }
            },
            {
                text: "Implement energy efficiency programs",
                effects: { ecoScore: 8, wellBeing: 5, budget: -5, pollution: -8 }
            },
            {
                text: "Maintain current energy mix with minor improvements",
                effects: { ecoScore: -10, wellBeing: -10, budget: 15, pollution: 15 }
            }
        ]
    },
    {
        day: 5,
        title: "Waste Management Crisis",
        text: "The city's waste management system is overwhelmed. How will you address this growing problem?",
        image: "ressources2/j5 Waste Management Crisis.png",
        choices: [
            {
                text: "Implement a zero-waste city program",
                effects: { ecoScore: 20, wellBeing: 15, budget: -25, pollution: -20 }
            },
            {
                text: "Create a circular economy initiative",
                effects: { ecoScore: 15, wellBeing: 10, budget: -15, pollution: -15 }
            },
            {
                text: "Start a recycling tech startup",
                effects: { ecoScore: 10, wellBeing: 8, budget: 25, pollution: -10 }
            },
            {
                text: "Improve existing recycling facilities",
                effects: { ecoScore: 8, wellBeing: 5, budget: -8, pollution: -8 }
            },
            {
                text: "Focus on waste reduction education",
                effects: { ecoScore: 5, wellBeing: 3, budget: 0, pollution: -5 }
            },
            {
                text: "Landfill expansion and incineration",
                effects: { ecoScore: -10, wellBeing: -10, budget: 20, pollution: 20 }
            }
        ]
    },
    {
        day: 6,
        title: "Green Spaces",
        text: "A large area of the city needs redevelopment. How will you transform this space?",
        image: "ressources2/j6 Green Spaces.png",
        choices: [
            {
                text: "Create an urban forest and wildlife corridor",
                effects: { ecoScore: 20, wellBeing: 20, budget: -30, pollution: -20 }
            },
            {
                text: "Develop a network of community gardens",
                effects: { ecoScore: 15, wellBeing: 15, budget: -20, pollution: -15 }
            },
            {
                text: "Build a sustainable housing complex",
                effects: { ecoScore: 12, wellBeing: 10, budget: 30, pollution: -10 }
            },
            {
                text: "Create a mixed-use park",
                effects: { ecoScore: 10, wellBeing: 8, budget: -10, pollution: -8 }
            },
            {
                text: "Leave it as a natural reserve",
                effects: { ecoScore: 5, wellBeing: 5, budget: 0, pollution: -5 }
            },
            {
                text: "Sell land for commercial development",
                effects: { ecoScore: -10, wellBeing: -10, budget: 25, pollution: 15 }
            }
        ]
    },
    {
        day: 7,
        title: "Final Decision",
        text: "A week has passed. Your actions have set the course for the city's future. What's your final move?",
        image: "ressources2/j7 Final Decision.png",
        choices: [
            {
                text: "Launch a city-wide ecological revolution",
                effects: { ecoScore: 25, wellBeing: 20, budget: -30, pollution: -25 }
            },
            {
                text: "Create a sustainable business district",
                effects: { ecoScore: 15, wellBeing: 15, budget: 35, pollution: -15 }
            },
            {
                text: "Focus on community well-being",
                effects: { ecoScore: 10, wellBeing: 25, budget: -10, pollution: -10 }
            },
            {
                text: "Maintain current progress",
                effects: { ecoScore: 5, wellBeing: 5, budget: 5, pollution: -5 }
            },
            {
                text: "Scale back environmental initiatives",
                effects: { ecoScore: -15, wellBeing: -15, budget: 30, pollution: 20 }
            }
        ]
    }
];

// Utility functions
function updateScores(effects) {
    for (const [key, value] of Object.entries(effects)) {
        if (key === 'budget') {
            gameState.scores[key] += value; // Budget can go above 100
        } else {
            gameState.scores[key] = Math.max(0, Math.min(100, gameState.scores[key] + value));
        }
    }
    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.getElementById('eco-score').textContent = gameState.scores.ecoScore;
    document.getElementById('budget-score').textContent = gameState.scores.budget;
    document.getElementById('wellbeing-score').textContent = gameState.scores.wellBeing;
    document.getElementById('pollution-score').textContent = gameState.scores.pollution;
}

function getEnding({ budget, pollution, wellBeing, ecoScore }) {
    // Burnout Ending : bien-être très bas
    if (wellBeing <= 35) {
        return "😔 Burnout Ending: People gave up. Your reforms lacked heart.";
    }
    // Collapse Ending : pollution très haute OU ecoScore très bas
    if (pollution >= 60 || ecoScore <= 35) {
        return "💀 Collapse Ending: Society crumbled due to your lack of action.";
    }
    // Corporate Ending : budget élevé ET ecoScore faible
    if (budget >= 110 && ecoScore <= 60) {
        return "💼 Corporate Ending: You got rich, but the planet paid the price.";
    }
    // Green Utopia Ending : scores élevés, mais plus accessibles
    if (ecoScore >= 65 && pollution <= 45 && wellBeing >= 50 && budget >= 60) {
        return "🌿 Green Utopia Ending: You inspired a national ecological transition!";
    }
    // Mixed Ending : tous les autres cas
    return "🌀 Mixed Ending: Some progress was made, but challenges remain.";
}

function createChoiceButton(choice) {
    const button = document.createElement('button');
    button.className = 'choice-button';
    button.textContent = choice.text;
    button.addEventListener('click', () => {
        updateScores(choice.effects);
        gameState.currentDay++;
        if (gameState.currentDay <= 7) {
            displayCurrentSituation();
        } else {
            displayEndGame();
        }
    });
    return button;
}

function displayCurrentSituation() {
    const currentSituation = story.find(s => s.day === gameState.currentDay);
    if (currentSituation) {
        document.getElementById('current-day').textContent = gameState.currentDay;
        document.getElementById('situation-title').textContent = currentSituation.title;
        document.getElementById('situation-text').textContent = currentSituation.text;
        
        // Update the situation image
        const situationImage = document.getElementById('situation-image');
        if (currentSituation.image) {
            situationImage.src = currentSituation.image;
            situationImage.style.display = 'block';
        } else {
            situationImage.style.display = 'none';
        }

        const choicesContainer = document.getElementById('choices-container');
        choicesContainer.innerHTML = '';
        currentSituation.choices.forEach(choice => {
            choicesContainer.appendChild(createChoiceButton(choice));
        });
    }
}

function displayEndGame() {
    const ending = getEnding(gameState.scores);
    const endingName = ending.split(':')[0].replace('🌿 ', '').replace('💀 ', '').replace('💼 ', '').replace('😔 ', '').replace('🌀 ', '');
    let imageName = '';
    if (endingName.trim() === 'Green Utopia Ending') imageName = 'END Green Utopia Ending .png';
    else if (endingName.trim() === 'Collapse Ending') imageName = 'END Collapse Ending.png';
    else if (endingName.trim() === 'Corporate Ending') imageName = 'END Corporate Ending.png';
    else if (endingName.trim() === 'Burnout Ending') imageName = 'END Burnout Ending.png';
    else imageName = 'END Mixed Ending .png';
    const imagePath = `ressources2/${imageName}`;
    const gameContent = document.querySelector('.game-content');
    gameContent.innerHTML = `
        <h2>End of Adventure</h2>
        <img src="${imagePath}" alt="${endingName}" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 24px;">
        <p>${ending}</p>
        <div class="final-scores">
            <p>Environmental Score: ${gameState.scores.ecoScore}%</p>
            <p>Budget: ${gameState.scores.budget}</p>
            <p>Well-being: ${gameState.scores.wellBeing}%</p>
            <p>Pollution: ${gameState.scores.pollution}%</p>
        </div>
        <button class="choice-button" onclick="location.reload()">Play Again</button>
    `;
}

// Game initialization
document.addEventListener('DOMContentLoaded', () => {
    const introVideo = document.getElementById('intro-video');
    const gameSection = document.getElementById('game-section');
    const videoContainer = document.getElementById('intro-video-container');
    const skipBtn = document.getElementById('skip-intro-btn');

    // Empêcher le scroll pendant la vidéo d'intro
    document.body.style.overflow = 'hidden';

    // Hide the game initially
    gameSection.style.display = 'none';

    // Fonction pour passer l'intro
    function skipIntro() {
        videoContainer.style.display = 'none';
        gameSection.style.display = 'block';
        document.body.style.overflow = 'auto';
        displayCurrentSituation();
        updateScoreDisplay();
    }

    // When video ends, show the game
    introVideo.addEventListener('ended', skipIntro);

    // Skip button
    skipBtn.addEventListener('click', skipIntro);

    // Optional: Allow skipping the video with Escape
    introVideo.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            skipIntro();
        }
    });
}); 