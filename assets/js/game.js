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
                text: "Hint",
                nextText: 5,
            },
        ]
    },
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
        id: 3,
        text: "Use",
        options: [
            {
                text: "Sword",
                setState: { hasSword: true },
                nextText: 9,
            },
            {
                text: "Axe",
                setState: { hasAxe: true },
                nextText: 10,
            },
            {
                text: "Gold",
                setState: { hasGold: true },
                nextText: 11,
            },
            {
                text: "More",
                nextText: 12,
            }
        ]
    },
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
    {
        id: 5,
        text: "Hint",
        options: [
            // ADD IN HINT OPTIONS
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
                text: "Back",
                nextText: 2,
            },
        ]
    }
]

startGame()