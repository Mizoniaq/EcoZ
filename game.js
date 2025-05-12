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
                effects: { ecoScore: -5, wellBeing: 0, budget: 5, pollution: 5 }
            }
        ]
    },
    {
        day: 2,
        title: "Transport Revolution",
        text: "The city is reimagining its transportation system. Your choices will shape how people move around for decades to come.",
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
                effects: { ecoScore: -5, wellBeing: 0, budget: 5, pollution: 5 }
            }
        ]
    },
    {
        day: 3,
        title: "Food System Transformation",
        text: "The local food system needs a complete overhaul. How will you approach this challenge?",
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
                effects: { ecoScore: 10, wellBeing: 8, budget: 15, pollution: -8 }
            },
            {
                text: "Support existing local farmers",
                effects: { ecoScore: 8, wellBeing: 5, budget: -5, pollution: -5 }
            },
            {
                text: "Focus on reducing food waste only",
                effects: { ecoScore: 5, wellBeing: 3, budget: 0, pollution: -3 }
            }
        ]
    },
    {
        day: 4,
        title: "Energy Revolution",
        text: "The city's energy infrastructure is outdated. A major decision about the future of power generation awaits.",
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
                effects: { ecoScore: -5, wellBeing: 0, budget: 5, pollution: 5 }
            }
        ]
    },
    {
        day: 5,
        title: "Waste Management Crisis",
        text: "The city's waste management system is overwhelmed. How will you address this growing problem?",
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
                effects: { ecoScore: 10, wellBeing: 8, budget: 20, pollution: -10 }
            },
            {
                text: "Improve existing recycling facilities",
                effects: { ecoScore: 8, wellBeing: 5, budget: -8, pollution: -8 }
            },
            {
                text: "Focus on waste reduction education",
                effects: { ecoScore: 5, wellBeing: 3, budget: 0, pollution: -5 }
            }
        ]
    },
    {
        day: 6,
        title: "Green Spaces",
        text: "A large area of the city needs redevelopment. How will you transform this space?",
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
                effects: { ecoScore: 12, wellBeing: 10, budget: 25, pollution: -10 }
            },
            {
                text: "Create a mixed-use park",
                effects: { ecoScore: 10, wellBeing: 8, budget: -10, pollution: -8 }
            },
            {
                text: "Leave it as a natural reserve",
                effects: { ecoScore: 5, wellBeing: 5, budget: 0, pollution: -5 }
            }
        ]
    },
    {
        day: 7,
        title: "Final Decision",
        text: "A week has passed. Your actions have set the course for the city's future. What's your final move?",
        choices: [
            {
                text: "Launch a city-wide ecological revolution",
                effects: { ecoScore: 25, wellBeing: 20, budget: -30, pollution: -25 }
            },
            {
                text: "Create a sustainable business district",
                effects: { ecoScore: 15, wellBeing: 15, budget: 30, pollution: -15 }
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
                effects: { ecoScore: -15, wellBeing: -10, budget: 20, pollution: 15 }
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
    if (ecoScore >= 80 && pollution <= 20 && wellBeing >= 60) {
        return "🌿 Green Utopia Ending: You inspired a national ecological transition!";
    }
    if (pollution >= 80 && ecoScore <= 30) {
        return "💀 Collapse Ending: Society crumbled due to your lack of action.";
    }
    if (budget >= 120 && ecoScore <= 40) {
        return "💼 Corporate Ending: You got rich, but the planet paid the price.";
    }
    if (wellBeing <= 20) {
        return "😔 Burnout Ending: People gave up. Your reforms lacked heart.";
    }
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
    const currentSituation = story[gameState.currentDay - 1];
    document.getElementById('current-day').textContent = gameState.currentDay;
    document.getElementById('situation-title').textContent = currentSituation.title;
    document.getElementById('situation-text').textContent = currentSituation.text;

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    currentSituation.choices.forEach(choice => {
        choicesContainer.appendChild(createChoiceButton(choice));
    });
}

function displayEndGame() {
    const ending = getEnding(gameState.scores);
    const gameContent = document.querySelector('.game-content');
    gameContent.innerHTML = `
        <h2>End of Adventure</h2>
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
    displayCurrentSituation();
    updateScoreDisplay();
}); 