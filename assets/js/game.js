// Thanks to Web Dev Simplified (https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) for their basic text adventure structure that was used as a loose guide

const textElement = document.getElementById('choice');
const optionButtonsElement = document.getElementById('option-buttons');
const dialogueTextElement = document.getElementById('dialogue');

let state = {};

let textNodes = {};

var BjornPleased;
var AstridPleased;
var SigurdPleased;
var hasPaintedShield;
var hasShield;
var hasPaint;
var hasSnacks;
var hasAxe;
var hasSword;
var hasGold;
var paintShield;

// Sets the game at 0 with state of all members of the High Council not pleased, no painted shield, and all other inventory items set to true

function loadData() {
        $.getJSON("assets/js/data.json", function (data) {
        textNodes = data;
        state = {
        BjornPleased: false, 
        SigurdPleased: false, 
        AstridPleased: false, 
        hasPaintedShield: false,
        hasSword: true,
        hasAxe: true,
        hasGold: true,
        hasPaint: true,
        hasShield: true,
        hasSnacks: true,
    };
        show = showTextNode(0);
    });
}

function  startGame() {
          loadData()  
}

// Once all members of the High Council are pleased, the game should move onto ID 300 and the win state

function gameComplete() {
    show = showTextNode(300);
}

// Uses the ID tree below to bring the correct node ID

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    dialogueTextElement.innerText = textNode.dialogue;
// Expands and reduces number of buttons as necessary
    while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

// Sets the state once user performs certain actions

console.log(textNode.condition)
    if (textNode.condition != undefined) {
        state[textNode.condition] = true
}
console.log(state)

    if (textNode.condition == BjornPleased == true && AstridPleased == true && SigurdPleased == true) {
        console.log (gameComplete())
}

  // Returns the correct text response to the buttons

  textNode.options.forEach(option => {
    if (showOption(option)) {
        const button = document.createElement('button');
        button.innerText = option.text;          
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

// sets the dialogue text to write along the screen. TO FIX

var i = 0;
var speechSpeed = 50;

function dialogueScrawl() {
  if (i < textNode.dialogue.length) {
    document.getElementById("dialogue-text").innerHTML += textNode.dialogue.charAt(i);
    i++;
    setTimeout(dialogueScrawl, speechSpeed);
  }
}


// starts the game if the textNodeID is equal to or less than 0, and ends the game once the three states are met

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    } 
   // else if (state == {BjornPleased: true, SigurdPleased: true, AstridPleased: true}) {       return gameComplete();    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

startGame();