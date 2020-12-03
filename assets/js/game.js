const hintTextElement = document.getElementById('hint')
const optionsElement = document.getElementById('option-buttons')
const dialogueTextElement = document.getElementById('dialogue')

let state = {}

function startGame() {
    state = {}
    show = showHintText(1)
    show = showDialogue(1)
}

function showHintText (hintTextIndex) {
    const hintText = hintTexts.find(hintText => hintText.id === hintTextIndex)
    hintTextElement.innerText = hintText.text
        while (optionsElement.firstChild) {
            optionsElement.removeChild(optionsElement.firstChild)
    }

    hintText.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionsElement.appendChild(button)
        }
    })
}


function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextHintTextId = option.nextText
    if (nextHintTextId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showHintText(nextHintTextId)
}



function showDialogue (dialogueTextIndex) {
    return dialogue.requiredState == null || dialogue.requiredState(state)
}

function selectDialogue(text) {
    if (hintText.id === [])
    return dialogueText === []
}

// ------------------------------------------------------ Button Options

const hintTexts = [
    {
        id: 1,
        text: "What will you do?",
        options: [
            {
                text: "Talk",
                nextText: 2,
            },
            {
                text: "Use",
                nextText: 3,
            },
            {
                text: "Challenge",
                nextText: 4,
            },
            {
                text: "Look at",
                nextText: 5,
            },
        ]
    },

// ------------------------------------------------------ Talk To Functions

    {
        id: 2,
        text: "Talk to:",
        options: [
            {
                text: "Bjorn",
                nextText: 6,
            },
            {
                text: "Astrid",
                nextText: 7,
            },
            {
                text: "Sigurd",
                nextText: 8,
            },
            {
                text: "Back",
                nextText: 1,
            },
        ]
    },
    {
        id: 6,
        text: "Talk to Bjorn about:",
        options: [
            {
                text: "Bjorn",
                nextText: 16,
            },
            {
                text: "Astrid",
                nextText: 17,
            },
            {
                text: "Sigurd",
                nextText: 18,
            },
            {
                text: "More",
                nextText: 98,
            },
        ]
    },
    {
        id: 98,
        text: "Talk to Bjorn about:",
        options: [
            {
                text: "The Council",
                nextText: 99,
            },
            {
                text: "The Settlement",
                nextText: 115,
            },
            {
                text: "The War",
                nextText: 101,
            },
            {
                text: "Back",
                nextText: 2,
            },
        ]
    },
    {
        id: 7,
        text: "Talk to Astrid about:",
        options: [
            {
                text: "Bjorn",
                nextText: 19,
            },
            {
                text: "Astrid",
                nextText: 20,
            },
            {
                text: "Sigurd",
                nextText: 21,
            },
            {
                text: "Back",
                nextText: 2,
            },
        ]
    },
    {
        id: 102,
        text: "Talk to Astrid about:",
        options: [
            {
                text: "The Council",
                nextText: 103,
            },
            {
                text: "The Settlement",
                nextText: 104,
            },
            {
                text: "The War",
                nextText: 105,
            },
            {
                text: "Back",
                nextText: 2,
            },
        ]
    },
    {
        id: 8,
        text: "Talk to Sigurd about:",
        options: [
            {
                text: "Bjorn",
                nextText: 22,
            },
            {
                text: "Astrid",
                nextText: 22,
            },
            {
                text: "Sigurd",
                nextText: 22,
            },
            {
                text: "More",
                nextText: 106,
            },
        ]
    },
    {
        id: 106,
        text: "Talk to Sigurd about:",
        options: [
            {
                text: "The Council",
                nextText: 22,
            },
            {
                text: "The Settlement",
                nextText: 22,
            },
            {
                text: "The War",
                nextText: 22,
            },
            {
                text: "Back",
                nextText: 2,
            },
        ]
    },

// ------------------------------------------------------ Use Functions

    {
        id: 3,
        text: "Use",
        options: [
            {
                text: "Sword",
                nextText: 9,
            },
            {
                text: "Axe",
                nextText: 10,
            },
            {
                text: "Gold",
                nextText: 11,
            },
            {
                text: "More",
                nextText: 12,
            }
        ]
    },
     {
        id: 12,
        text: "Use",
        options: [
            {
                text: "Paint",
                nextText: 13,
            },
            {
                text: "Shield",
                nextText: 14,
            },
            {
                text: "Snacks",
                nextText: 15,
            },
            {
                text: "Back",
                nextText: 1,
            }
        ]
    },
    
 // --------------------------- Use With Functions    
   
    {
        id: 9,
        text: "Use Sword with",
         options: [
            {
                text: "Bjorn",
                nextText: 69,
            },
            {
                text: "Astrid",
                nextText: 69,
            },
            {
                text: "Sigurd",
                nextText: 70,
            },
            {
                text: "More",
                nextText: 71,
            },
         ]
    },
    {
        id: 71,
        text: "Use Sword with",
         options: [
            {
                text: "Axe",
                nextText: 72,
            },
            {
                text: "Gold",
                nextText: 72,
            },
            {
                text: "Paints",
                nextText: 73,
            },
            {
                text: "More",
                nextText: 74,
            },
         ]
    },
    {
        id: 74,
        text: "Use Sword with",
         options: [
            {
                text: "Shield",
                nextText: 75,
            },
            {
                text: "Snacks",
                nextText: 76,
            },
            {
                text: "Self",
                nextText: 77,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 10,
        text: "Use Axe With",
         options: [
            {
                text: "Bjorn",
                nextText: 69,
            },
            {
                text: "Astrid",
                nextText: 69,
            },
            {
                text: "Sigurd",
                nextText: 70,
            },
            {
                text: "More",
                nextText: 68,
            },
         ]
    },
    {
        id: 68,
        text: "Use Axe with",
         options: [
            {
                text: "Sword",
                nextText: 72,
            },
            {
                text: "Gold",
                nextText: 72,
            },
            {
                text: "Paints",
                nextText: 73,
            },
            {
                text: "More",
                nextText: 97,
            },
         ]
    },
    {
        id: 100,
        text: "Use Axe with",
         options: [
            {
                text: "Shield",
                nextText: 75,
            },
            {
                text: "Snacks",
                nextText: 76,
            },
            {
                text: "Self",
                nextText: 77,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 11,
        text: "Use Gold with",
         options: [
            {
                text: "Bjorn",
                nextText: 79,
            },
            {
                text: "Astrid",
                nextText: 79,
            },
            {
                text: "Sigurd",
                nextText: 79,
            },
            {
                text: "More",
                nextText: 80,
            },
         ]
    },
    {
        id: 80,
        text: "Use Gold with",
         options: [
            {
                text: "Sword",
                nextText: 72,
            },
            {
                text: "Axe",
                nextText: 72,
            },
            {
                text: "Paints",
                nextText: 81,
            },
            {
                text: "More",
                nextText: 82,
            },
         ]
    },
    {
        id: 82,
        text: "Use Gold with",
         options: [
            {
                text: "Shield",
                nextText: 72,
            },
            {
                text: "Snacks",
                nextText: 72,
            },
            {
                text: "Self",
                nextText: 83,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
   
    {
        id: 13,
        text: "Use Paint with",
         options: [
            {
                text: "Bjorn",
                nextText: 85,
            },
            {
                text: "Astrid",
                nextText: 85,
            },
            {
                text: "Sigurd",
                nextText: 85,
            },
            {
                text: "More",
                nextText: 86,
            },
         ]
    },
    {
        id: 86,
        text: "Use Paint with",
         options: [
            {
                text: "Sword",
                nextText: 73,
            },
            {
                text: "Axe",
                nextText: 73,
            },
            {
                text: "Gold",
                nextText: 81,
            },
            {
                text: "More",
                nextText: 87,
            },
         ]
    },
    {
        id: 87,
        text: "Use Paint with",
         options: [
            {
                text: "Shield",
                nextText: 88,
            },
            {
                text: "Snacks",
                nextText: 75,
            },
            {
                text: "Self",
                nextText: 83,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 14,
        text: "Use Shield with",
         options: [
            {
                text: "Bjorn",
                nextText: 90,
            },
            {
                text: "Astrid",
                nextText: 85,
            },
            {
                text: "Sigurd",
                nextText: 85,
            },
            {
                text: "More",
                nextText: 91,
            },
         ]
    },
    {
        id: 91,
        text: "Use Shield with",
         options: [
            {
                text: "Sword",
                nextText: 75,
            },
            {
                text: "Axe",
                nextText: 75,
            },
            {
                text: "Gold",
                nextText: 75,
            },
            {
                text: "More",
                nextText: 92,
            },
         ]
    },
    {
        id: 82,
        text: "Use Shield with",
         options: [
            {
                text: "Paint",
                nextText: 88,
            },
            {
                text: "Snacks",
                nextText: 75,
            },
            {
                text: "Self",
                nextText: 75,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 15,
        text: "Use Snacks with",
         options: [
            {
                text: "Bjorn",
                nextText: 85,
            },
            {
                text: "Astrid",
                nextText: 85,
            },
            {
                text: "Sigurd",
                nextText: 94,
            },
            {
                text: "More",
                nextText: 95,
            },
         ]
    },
    {
        id: 95,
        text: "Use Snacks with",
         options: [
            {
                text: "Sword",
                nextText: 75,
            },
            {
                text: "Axe",
                nextText: 75,
            },
            {
                text: "Gold",
                nextText: 75,
            },
            {
                text: "More",
                nextText: 96,
            },
         ]
    },
    {
        id: 96,
        text: "Use Snacks with",
         options: [
            {
                text: "Paint",
                nextText: 75,
            },
            {
                text: "Shield",
                nextText: 75,
            },
            {
                text: "Self",
                nextText: 83,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 107,
        text: "Use Painted Sheild with",
        options: [
            {
                text: "Bjorn",
                nextText: 33,
            },
            {
                text: "Astrid",
                nextText: 85,
            },
            {
                text: "Sigurd",
                nextText: 85,
            },
            {
                text: "More",
                nextText: 109,
            },
         ]
    },
    {
        id: 109,
        text: "Use Painted Sheild with",
         options: [
            {
                text: "Sword",
                nextText: 75,
            },
            {
                text: "Axe",
                nextText: 75,
            },
            {
                text: "Gold",
                nextText: 75,
            },
            {
                text: "More",
                nextText: 110,
            },
         ]
    },
    {
        id: 96,
        text: "Use Painted Sheild with",
         options: [
            {
                text: "Paint",
                nextText: 111,
            },
            {
                text: "Snacks",
                nextText: 75,
            },
            {
                text: "Self",
                nextText: 75,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },

// ------------------------------------------------------ Challenge Functions

    {
        id: 4,
        text: "Challenge",
        options: [
            {
                text: "Bjorn",
                nextText: 23,
            },
            {
                text: "Astrid",
                nextText: 24,
            },
            {
                text: "Sigurd",
                nextText: 25,
            },
            {
                text: "Back",
                nextText: 26,
            },
        ]
    },
// ----------------------------------------- Bjorn Gift Functions
    {
        id: 23,
        text: "Give Bjorn:",
        options: [
            {
                text: "Sword",
                nextText: 26,
            },
            {
                text: "Axe",
                nextText: 27,
            },
            {
                text: "Gold",
                nextText: 28,
            },
            {
                text: "More",
                nextText: 29,
            }
        ]
    },
    {
        id: 29,
        text: "Give Bjorn:",         
        options: [
            {
                text: "Paint",
                nextText: 30,
            },
            {
                text: "Painted Shield",
                nextText: 33,
            },
            {
                text: "Shield",
                nextText: 31,
            },
            {
                text: "Snacks",
                nextText: 32,
            },
            {
                text: "Back",
                nextText: 1,
            }
        ]   
    },

    // ----------------------------------------- Astrid Riddle Functions
    
    // 24 is astrid dialogue and leads onto 34
    {
        id: 34,
        text: "What is your answer?",
        options: [
            {
                text: "Answer 1",
                nextText: 35,
            },
            {
                text: "Answer 2",
                nextText: 35,
            },
            {
                text: "Answer 3",
                nextText: 36,
            },
            {
                text: "Give Up",
                nextText: 2,
            }
        ]
    },
    // 35 is fail question
    // 36 is correct answer and move onto next dialogue, then 39
     {
        id: 39,
        text: "What is your answer?",
        options: [
            {
                text: "Answer 1",
                nextText: 40,
            },
            {
                text: "Answer 2",
                nextText: 35,
            },
            {
                text: "Answer 3",
                nextText: 35,
            },
            {
                text: "Give Up",
                nextText: 2,
            }
        ]
    },
    //40 is correct answer and move onto next dialogue, then 43
     {
        id: 43,
        text: "What is your answer?",
        options: [
            {
                text: "Answer 1",
                nextText: 35,
            },
            {
                text: "Answer 2",
                nextText: 45,
            },
            {
                text: "Answer 3",
                nextText: 35,
            },
            {
                text: "Give Up",
                nextText: 2,
            }
        ]
    },

    // ----------------------------------------- Sigurd Weapon Functions

    
// ------------------------------------------------------ Look at Functions

    
]


 const dialogueText = [
    {
        id: 16,
        text: "I am the mighty Jarl of this settlement.",
    },
    {
        id: 17,
        text: "Astrid is my beautiful wife. She is very wise, and loves those who solve her riddles."
    },
 ]
    



startGame()