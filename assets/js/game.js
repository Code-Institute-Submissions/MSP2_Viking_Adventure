// Thanks to Web Dev Simplified (https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) for their basic text adventure structure that was used as a starting block to build upon.

const textElement = document.getElementById('choice');
const optionButtonsElement = document.getElementById('option-buttons');
const dialogueTextElement = document.getElementById('dialogue');

let state = {};

let paintShield = [12, 29, 51, 62, 74, 82, 87, 96, 100];

var shield;

// Sets the game at 0 with state of all members of the High Council not pleased, no painted shield, and all other inventory items set to true

function  startGame() {

    state = {
        BjornPleased: 0, 
        SigurdPleased: 0, 
        AstridPleased: 0,
        hasPaintedShield: 0,
    };
        showTextNode(0); 
}

// Game Complete function reaches end node and then resets state

function gameComplete() {
    console.log ("gameComplete");
    state = {
        BjornPleased: 0, 
        SigurdPleased: 0, 
        AstridPleased: 0,
        hasPaintedShield: 0,
    };
        showTextNode(300);
}

// Function uses the textNode ID tree below to bring the correct node ID

function showTextNode(textNodeIndex) {

// Once all members of the High Council are pleased, the game should move onto ID 300 and the win state

    if (state.BjornPleased == 1 && state.AstridPleased == 1 && state.SigurdPleased == 1) {
    gameComplete();
    return;
}
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    dialogueTextElement.innerText = textNode.dialogue;

// Expands and reduces number of buttons as necessary

    while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

// sets painted shield once painted

shield = ["Shield","Painted Shield"][state.hasPaintedShield];
console.log(shield, state.hasPaintedShield);

if (paintShield.includes(textNodeIndex)) {
    textNode.options[0].text = shield;
}

// Sets the state once user performs certain actions

console.log(textNode.condition);
    if (textNode.condition != undefined) {
        state[textNode.condition] = 1;
}
console.log(state);

// Returns the correct text response to the buttons

  textNode.options.forEach(option => {
    if (showOption(option)) {
        const button = document.createElement('button');
        button.innerText = option.text;          
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(textNodeIndex, option));
        optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

// starts the game if the textNodeID is equal to or less than 0, and changes the nextText dependant on the state

function selectOption(textNodeIndex, option) {
    let nextTextNodeId = option.nextText;
    if (Array.isArray(nextTextNodeId)) {
        nextTextNodeId = option.nextText[state.hasPaintedShield];
    }
    if (nextTextNodeId <= 0) {
        return startGame();
    } 
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

// -------------------------------- choice tree

let textNodes =
[
  {
    "id":0,
    "text":"You stand among the Jarl and his High Council.",
    "dialogue":"Jarl Bjorn: You boy, I have not seen you here before. What do you want?",
    "options":[
        {"text":"Ask to live in their settlement.","nextText":1}
    ]
  },
  {
    "id":1,
    "text":"What will you do?",
    "dialogue":"Jarl Bjorn: You want to live in my settlement? Show us why we should have you!",
    "options":[
      {"text":"Talk","nextText":2},
      {"text":"Use","nextText":3},
      {"text":"Challenge","nextText":4},
      {"text":"Look at","nextText":5}
    ]
  },
// ------------------------------------------ Talk to functions
  {
    "id":2,
    "text":"Talk to:",
    "dialogue":"",
    "options":[
      {"text":"Bjorn","nextText":6},
      {"text":"Astrid","nextText":7},
      {"text":"Sigurd","nextText":8},
      {"text":"Back","nextText":1}
    ]
  },
// ----------------------------- Bjorn Responses
  {
    "id":6,
    "text":"Talk to Bjorn about:",
    "dialogue":"Jarl Bjorn: You have a question for me?",
    "options":[
      {"text":"Bjorn","nextText":16},
      {"text":"Astrid","nextText":17},
      {"text":"Sigurd","nextText":18},
      {"text":"More","nextText":98}
    ]
  },
  {
    "id":98,
    "text":"Talk to Bjorn about:",
    "dialogue":"Jarl Bjorn: You have a question for me?",
    "options":[
      {"text":"The Council","nextText":99},
      {"text":"The Settlement","nextText":115},
      {"text":"The War","nextText":101},
      {"text":"Back","nextText":2}
    ]
  },
  {
    "id":16,
    "text":"",
    "dialogue":"Bjorn: I am Jarl Bjorn. I am in charge of this fine settlement. If you want to live here, you must show me your worth.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":17,
    "text":"",
    "dialogue":"Bjorn: Astrid is my wife. Not only is she the most beautiful woman in the land, she is the wisest too. If you want her favour, you must best her in a game of minds.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":18,
    "text":"",
    "dialogue":"Bjorn: Sigurd… He is the greatest drengr (warrior) in the land. He has never been defeated in combat. If you wish to challenge him, you must think outside the box",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":99,
    "text":"",
    "dialogue":"Bjorn: I formed this council to ensure every decision was made in the best interests of the settlement. The three you see before you make up its board.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":115,
    "text":"",
    "dialogue":"Bjorn: This settlement is my greatest achievement and my life's work. We built it up from the earth, and have defended it from invaders ever since.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":101,
    "text":"",
    "dialogue":"Bjorn: News of the invading tribes does concern me, but if they ever attempt to breach our walls, Sigurd here will show them the error of their ways.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
// ----------------------------- Astrid Responses
  {
    "id":7,
    "text":"Talk to Astrid about:",
    "dialogue":"Astrid: What would you ask of me?",
    "options":[
      {"text":"Bjorn","nextText":19},
      {"text":"Astrid","nextText":20},
      {"text":"Sigurd","nextText":21},
      {"text":"More","nextText":102}
    ]
  },
  {
    "id":102,
    "text":"Talk to Astrid about:",
    "dialogue":"Astrid: What would you ask of me?",
    "options":[
      {"text":"The Council","nextText":103},
      {"text":"The Settlement","nextText":104},
      {"text":"The War","nextText":105},
      {"text":"Back","nextText":2}
    ]
  },
  {
    "id":19,
    "text":"",
    "dialogue":"Astrid: Jarl Bjorn is my husband. None of what you see here would have been possible without his efforts. On the battlefield, he was known as Bjorn Brightshield for his love of painted shields.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":20,
    "text":"",
    "dialogue":"Astrid: I am Bjorn’s wife. Now that we have a settled and sheltered life here within the walls of our settlement, I spend my time gaining knowledge of the greater world.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":21,
    "text":"",
    "dialogue":"Astrid: Sigurd is a mighty warrior who has never seen defeat in battle. To my knowledge, his only weakness is an intolerance to nuts.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":103,
    "text":"",
    "dialogue":"Astrid: We established this council to ensure the people of this fine settlement had fair and just leadership. So far it has brought us only fortune, and may it continue that way.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":104,
    "text":"",
    "dialogue":"Astrid: Bjorn and I began work on this settlement almost twenty years ago. It is his greatest achievement. I on the other hand prefer to think of my intellect as my greatest achievement.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":105,
    "text":"",
    "dialogue":"Astrid: I have heard of these invading forces, yes. If they dare to face us, they shall fall.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
// ----------------------------- Sigurd Responses
  {
    "id":8,
    "text":"Talk to Sigurd about:",
    "dialogue":"Sigurd: Hmmph?",
    "options":[
      {"text":"Bjorn","nextText":22},
      {"text":"Astrid","nextText":22},
      {"text":"Sigurd","nextText":22},
      {"text":"More","nextText":106}
    ]
  },
  {
    "id":106,
    "text":"Talk to Sigurd about:",
    "dialogue":"Sigurd: Hmmph?",
    "options":[
      {"text":"The Council","nextText":22},
      {"text":"The Settlement","nextText":22},
      {"text":"The War","nextText":22},
      {"text":"Back","nextText":2}
    ]
  },
  {
    "id":22,
    "text":"",
    "dialogue":"Sigurd: No talk. Only FIGHT!",
    "options":[
        {"text":"Okay then...","nextText":1}
    ]
  },
// ------------------------------------------ Use Functions
  {
    "id":3,
    "text":"Use",
    "dialogue":"",
    "options":[
      {"text":"Sword","nextText":9},
      {"text":"Axe","nextText":10},
      {"text":"Gold","nextText":11},
      {"text":"More","nextText":12}
    ]
  },
  {
    "id":12,
    "text":"Use",
    "dialogue":"",
    "options":[
      {"text":"Shield","nextText":[14,107]},
      {"text":"Paint","nextText":13}, 
      {"text":"Snacks","nextText":15},
      {"text":"Back","nextText":1}
    ]
  },
// ----------------------------- Sword and Axe functions
  {
    "id":9,
    "text":"Use Sword with",
    "dialogue":"",
    "options":[
      {"text":"Bjorn","nextText":69},
      {"text":"Astrid","nextText":69},
      {"text":"Sigurd","nextText":70},
      {"text":"More","nextText":71}
    ]
  },
  {
    "id":71,
    "text":"Use Sword with",
    "dialogue":"",
    "options":[
      {"text":"Axe","nextText":72},
      {"text":"Gold","nextText":72},
      {"text":"Paints","nextText":73},
      {"text":"More","nextText":74}
    ]
  },
  {
    "id":74,
    "text":"Use Sword with",
    "dialogue":"",
    "options":[
      {"text":"Shield","nextText":[75, 75]},
      {"text":"Snacks","nextText":76},
      {"text":"Self","nextText":77},
      {"text":"Back","nextText":1}
    ]
  },
  {
    "id":10,
    "text":"Use Axe With",
    "dialogue":"",
    "options":[
      {"text":"Bjorn","nextText":69},
      {"text":"Astrid","nextText":69},
      {"text":"Sigurd","nextText":70},
      {"text":"More","nextText":68}
    ]
  },
  {
    "id":68,
    "text":"Use Axe with",
    "dialogue":"",
    "options":[
      {"text":"Sword","nextText":72},
      {"text":"Gold","nextText":72},
      {"text":"Paints","nextText":73},
      {"text":"More","nextText":100}
    ]
  },
  {
    "id":100,
    "text":"Use Axe with",
    "dialogue":"",
    "options":[
      {"text":"Shield","nextText":[75, 75]},
      {"text":"Snacks","nextText":76},
      {"text":"Self","nextText":77},
      {"text":"Back","nextText":1}
    ]
  },
  {
    "id":69,
    "text":"",
    "dialogue":"Ivar: I’m trying to join these people, not kill them.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":70,
    "text":"What were you expecting?",
    "dialogue":"Narrator: Ivar brandished his weapon at Sigurd, who took the challenge with gusto. He leapt across the room and cleaved Ivar in twain before the young farmer could blink.",
    "options":[
        {"text":"Game Over","nextText":200}
    ]
  },
  {
    "id":72,
    "text":"",
    "dialogue":"Ivar: That does nothing. I don’t know what I was expecting to happen there...",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":73,
    "text":"",
    "dialogue":"Ivar: The only thing I paint my weapons in is the blood of my enemies… and the occasional splash of metal polish.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":75,
    "text":"",
    "dialogue":"Ivar: That feels counterproductive.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":76,
    "text":"",
    "dialogue":"Ivar: I’m not going to waste this tasty nut-based snack like that.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":77,
    "text":"* Slow Clap *",
    "dialogue":"Narrator: In a fit of madness, Ivar turned his own weapon on himself and cut himself down to a crowd of thoroughly confused people.",
    "options":[
        {"text":"Game Over","nextText":200}
    ]
  },
// ----------------------------- Gold functions
  {
    "id":11,
    "text":"Use Gold with",
    "dialogue":"",
    "options":[
      {"text":"Bjorn","nextText":79},
      {"text":"Astrid","nextText":79},
      {"text":"Sigurd","nextText":79},
      {"text":"More","nextText":80}
    ]
  },
  {
    "id":80,
    "text":"Use Gold with",
    "dialogue":"",
    "options":[
      {"text":"Sword","nextText":72},
      {"text":"Axe","nextText":72},
      {"text":"Paints","nextText":81},
      {"text":"More","nextText":82}
    ]
  },
  {
    "id":82,
    "text":"Use Gold with",
    "dialogue":"",
    "options":[
      {"text":"Shield","nextText":[72, 72]},
      {"text":"Snacks","nextText":72},
      {"text":"Self","nextText":83},
      {"text":"Back","nextText":1}
    ]
  },
  {
    "id":79,
    "text":"",
    "dialogue":"Ivar: Bjorn made it clear they don’t want my gold. More for me, I guess.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":81,
    "text":"",
    "dialogue":"Ivar: But it’s already so pretty as it is.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":83,
    "text":"",
    "dialogue":"Ivar: … Maybe later.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
// ----------------------------- Paint functions
  {
    "id":13,
    "text":"Use Paint with",
    "dialogue":"",
    "options":[
      {"text":"Bjorn","nextText":85},
      {"text":"Astrid","nextText":85},
      {"text":"Sigurd","nextText":85},
      {"text":"More","nextText":86}
    ]
  },
  {
    "id":86,
    "text":"Use Paint with",
    "dialogue":"",
    "options":[
      {"text":"Sword","nextText":73},
      {"text":"Axe","nextText":73},
      {"text":"Gold","nextText":81},
      {"text":"More","nextText":87}
    ]
  },
  {
    "id":87,
    "text":"Use Paint with",
    "dialogue":"",
    "options":[
      {"text":"Shield","nextText":[88, 111]},
      {"text":"Snacks","nextText":75},
      {"text":"Self","nextText":83},
      {"text":"Back","nextText":1}
    ]
  },
  {
    "id":85,
    "text":"",
    "dialogue":"Ivar: I don’t think they’d like that.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":88,
    "text":"",
    "dialogue":"Ivar: It looks much better now. I should have done that ages ago.",
    "condition": "hasPaintedShield",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
// ----------------------------- Shield functions
  {
    "id":14,
    "text":"Use Shield with",
    "dialogue":"",
    "options":[
      {"text":"Bjorn","nextText":90},
      {"text":"Astrid","nextText":85},
      {"text":"Sigurd","nextText":85},
      {"text":"More","nextText":91}
    ]
  },
  {
    "id":91,
    "text":"Use Shield with",
    "dialogue":"",
    "options":[
      {"text":"Sword","nextText":75},
      {"text":"Axe","nextText":75},
      {"text":"Gold","nextText":75},
      {"text":"More","nextText":92}
    ]
  },
  {
    "id":92,
    "text":"Use Shield with",
    "dialogue":"",
    "options":[
      {"text":"Paint","nextText":88},
      {"text":"Snacks","nextText":75},
      {"text":"Self","nextText":75},
      {"text":"Back","nextText":1}
    ]
  },
  {
    "id":90,
    "text":"",
    "dialogue":"Ivar: Jarl Bjorn doesn’t want my shield in this state. It looks so dull.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
// ----------------------------- Snacks functions
  {
    "id":15,
    "text":"Use Snacks with",
    "dialogue":"",
    "options":[
      {"text":"Bjorn","nextText":85},
      {"text":"Astrid","nextText":85},
      {"text":"Sigurd","nextText":94},
      {"text":"More","nextText":95}
    ]
  },
  {
    "id":95,
    "text":"Use Snacks with",
    "dialogue":"",
    "options":[
      {"text":"Sword","nextText":75},
      {"text":"Axe","nextText":75},
      {"text":"Gold","nextText":75},
      {"text":"More","nextText":96}
    ]
  },
  {
    "id":96,
    "text":"Use Snacks with",
    "dialogue":"",
    "options":[
      {"text":"Shield","nextText":[75, 75]},
      {"text":"Paint","nextText":75},
      {"text":"Self","nextText":83},
      {"text":"Back","nextText":1}
    ]
  },
  {
    "id":94,
    "text":"Sigurd takes the snack.",
    "dialogue":"Ivar: Hey Sigurd, I bet all that fighting must make you hungry, want a tasty drengr snack?",
    "options":[
        {"text":"Continue","nextText":119}
    ]
  },
// ----------------------------- Painted Shield functions
  {
    "id":107,
    "text":"Use Painted Sheild with",
    "dialogue":"",
    "options":[
      {"text":"Bjorn","nextText":33},
      {"text":"Astrid","nextText":85},
      {"text":"Sigurd","nextText":85},
      {"text":"More","nextText":109}
    ]
  },
  {
    "id":109,
    "text":"Use Painted Sheild with",
    "dialogue":"",
    "options":[
      {"text":"Sword","nextText":75},
      {"text":"Axe","nextText":75},
      {"text":"Gold","nextText":75},
      {"text":"More","nextText":110}
    ]
  },
  {
    "id":96,
    "text":"Use Painted Sheild with",
    "dialogue":"",
    "options":[
      {"text":"Paint","nextText":111},
      {"text":"Snacks","nextText":75},
      {"text":"Self","nextText":75},
      {"text":"Back","nextText":1}
    ]
  },
  {
    "id":111,
    "text":"",
    "dialogue":"Ivar: I’ve already painted that.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":33,
    "text":"Ivar offers Bjorn the Painted Shield.",
    "dialogue":"Ivar: Jarl Bjorn, I’ve got this Painted Shield I thought you might accept as a gift.",
    "options":[
        {"text":"Continue","nextText":118}
    ]
  },
// ------------------------------------------ Challenge Functions
  {
    "id":4,
    "text":"Challenge",
    "dialogue":"Ivar: If I want to live here, I need to win their favour...",
    "options":[
      {"text":"Bjorn","nextText":23},
      {"text":"Astrid","nextText":24},
      {"text":"Sigurd","nextText":25},
      {"text":"Back","nextText":1}
    ]
  },
// ----------------------------- Bjorn Challenge
  {
    "id":23,
    "text":"Give Bjorn:",
    "dialogue":"Bjorn: What is it, boy?",
    "options":[
      {"text":"Sword","nextText":117},
      {"text":"Axe","nextText":117},
      {"text":"Gold","nextText":117},
      {"text":"More","nextText":29}
    ]
  },
  {
    "id":29,
    "text":"Give Bjorn:",
    "dialogue":"Bjorn: What is it, boy?",
    "options":[
      {"text":"Shield","nextText":[117, 33]},
      {"text":"Paint","nextText":117},
      {"text":"Snacks","nextText":117},
      {"text":"Back","nextText":1}
    ]
  },
  {
    "id":117,
    "text":"",
    "dialogue":"Bjorn: Is that the best you can do? I’ve seen deer droppings I’d rather own! Come back when you have something of worth to give me.",
    "options":[
        {"text":"Back","nextText":23}
    ]
  },
  {
    "id":118,
    "text":"Bjorn accepts the Painted Shield.",
    "dialogue":"Bjorn: ODIN’S BEARD! Now that is a gift. It will look splendid with the rest of my collection. Well done, boy. You have earned my blessing.",
    "condition": "BjornPleased",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
// ----------------------------- Astrid Challenge
  {
    "id":24,
    "dialogue":"Astrid: If you want to win my favour, you must prove your intellect. Answer these riddles three and you shall have what you desire.",
    "text":"Are you ready to challenge Astrid?",
    "options":[
        {"text":"Yes","nextText":34},
        {"text":"Later","nextText":4}
    ]
  },
  {
    "id":34,
    "text":"What is your answer?",
    "dialogue":"Astrid: I war with wind and waves, fighting both as I fall. Steadfast when still, yet should I move they're stronger than me. They tear me away, at once make me flee, and want to take what I try to protect. If my tail endures, they don't succeed. I'll resist if the stones hold me firm. Now hark my name.",
    "options":[
      {"text":"A Sail","nextText":35},
      {"text":"A Windmill","nextText":35},
      {"text":"An Anchor","nextText":36},
      {"text":"Give Up","nextText":4}
    ]
  },
  {
    "id":35,
    "dialogue":"Astrid: Incorrect. I fear you aren't as wise as I hoped...",
    "text":"You got it wrong. Try again?",
    "options":[
        {"text":"Yes","nextText":34},
        {"text":"Later","nextText":4}
    ]
  },
  {
    "id":36,
    "dialogue":"Astrid: Very good. Perhaps you are smarter than you seem. Are you ready for another?",
    "text":"Are you ready for round two?",
    "options":[
        {"text":"Yes","nextText":39},
        {"text":"Later","nextText":4}
    ]
  },
  {
    "id":39,
    "text":"What is your answer?",
    "dialogue":"Astrid: I am both friend and foe. I hurt men and hinder words, yet elevate spirits and speech. We will laugh together, yet you’ll never remember come dawn. Can you solve, oh weary traveler, this riddle?",
    "options":[
      {"text":"Ale","nextText":40},
      {"text":"A Harpy","nextText":130},
      {"text":"A Politician","nextText":130},
      {"text":"Give Up","nextText":4}
    ]
  },
  {
    "id":130,
    "dialogue":"Astrid: Incorrect. I fear you aren't as wise as I hoped...",
    "text":"You got it wrong. Try again?",
    "options":[
        {"text":"Yes","nextText":39},
        {"text":"Later","nextText":4}
    ]
  },
  {
    "id":40,
    "dialogue":"Astrid: Superb. You have quite the mind on you. Are you ready for the last riddle?",
    "text":"Are you ready for round three?",
    "options":[
        {"text":"Yes","nextText":43},
        {"text":"Later","nextText":4}
    ]
  },
  {
    "id":43,
    "text":"What is your answer?",
    "dialogue":"Astrid: Alone I battle, wounded by steel, weary of war. All I see is savage fighting. No assistance will come for my cursed self. Struck by both friend and foe brings resolve for all but me, whose wounds grow ever wider. I demise amidst men, yet the herbs that aid those shalt never cure me. What am I?",
    "options":[
      {"text":"A Soldier","nextText":131},
      {"text":"A Shield","nextText":45},
      {"text":"A Sword","nextText":131},
      {"text":"Give Up","nextText":4}
    ]
  },
  {
    "id":131,
    "dialogue":"Astrid: Incorrect. I fear you aren't as wise as I hoped...",
    "text":"You got it wrong. Try again?",
    "options":[
        {"text":"Yes","nextText":43},
        {"text":"Later","nextText":4}
    ]
  },
  {
    "id":45,
    "dialogue":"Astrid: Bravo! You have exceeded my expectations. Very well, traveller, you have my approval.",
    "text":"The wise queen is pleased. Well done.",
    "condition": "AstridPleased",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
// ----------------------------- Sigurd Challenge
  {
    "id":25,
    "text":"Select Your Weapon of Choice",
    "dialogue":"Sigurd: You dare to face me, do you?",
    "options":[
      {"text":"Sword","nextText":70},
      {"text":"Axe","nextText":70},
      {"text":"Gold","nextText":116},
      {"text":"More","nextText":51}
    ]
  },
  {
    "id":51,
    "text":"Select Your Weapon of Choice",
    "dialogue":"Sigurd: You dare to face me, do you?",
    "options":[
      {"text":"Shield","nextText":[116,116]},
      {"text":"Paints","nextText":116},
      {"text":"Snacks","nextText":94},
      {"text":"Back","nextText":4}
    ]
  },
  {
    "id":116,
    "dialogue":"Narrator: Ivar flings his worldly possessions at the mighty warrior. It does nothing but ensure Ivar’s death will be quick.",
    "text":"Well, no one can say you didn't try...",
    "options":[
        {"text":"Game Over","nextText":200}
    ]
  },
  {
    "id":119,
    "dialogue":"Narrator: Hungry from battle, Sigurd devours the snack without reading the label, and succumbs to anaphylactic shock. As he sits there dying, he nods at Ivar for being the one man to best him.",
    "text":"Well that's one way to beat an unbeatable drengr.",
    "condition": "SigurdPleased",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
// ------------------------------------------ Look at Functions
  {
    "id":5,
    "text":"Look at",
    "dialogue":"",
    "options":[
      {"text":"High Council","nextText":55},
      {"text":"Longhouse","nextText":121},
      {"text":"Items","nextText":120},
      {"text":"Back","nextText":1}
    ]
  },
  {
    "id":55,
    "text":"Look at",
    "dialogue":"",
    "options":[
      {"text":"Bjorn","nextText":56},
      {"text":"Astrid","nextText":57},
      {"text":"Sigurd","nextText":58},
      {"text":"Back","nextText":5}
    ]
  },
  {
    "id":120,
    "text":"Look at",
    "dialogue":"",
    "options":[
      {"text":"Sword","nextText":59},
      {"text":"Axe","nextText":60},
      {"text":"Gold","nextText":61},
      {"text":"More","nextText":62}
    ]
  },
  {
    "id":62,
    "text":"Look at",
    "dialogue":"",
    "options":[
      {"text":"Shield","nextText":[64,66]},
      {"text":"Paint","nextText":63},
      {"text":"Snacks","nextText":65},
      {"text":"Back","nextText":5}
    ]
  },
  {
    "id":56,
    "text":"Look at Bjorn",
    "dialogue":"Ivar: He's the Jarl of the settlement. I'll need to win him over if I can live here.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":57,
    "text":"Look at Astrid",
    "dialogue":"Ivar: She's the Jarl's wife. She seems very wise.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":58,
    "text":"Look at Sigurd",
    "dialogue":"Ivar: A brute of a man. I would be wise to avoid conflict with him.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":121,
    "text":"Look at the Longhouse",
    "dialogue":"Ivar: It’s a beautiful hall. Jarl Bjorn has quite a lovely collection of Painted Shields from his many battles. I bet they can put on a feast that would make Odin himself jealous.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":59,
    "text":"Look at Sword",
    "dialogue":"Ivar: This trusty sword has cut down many a foe… or at least it will do one day.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":60,
    "text":"Look at Axe",
    "dialogue":"Ivar: My axe. I've chopped down many a tree with this.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":61,
    "text":"Look at Gold",
    "dialogue":"Ivar: It's all the gold I have left.",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":63,
    "text":"Look at Paints",
    "dialogue":"Ivar: Some paints I managed to hold onto. I wonder if I'll ever get the chance to paint again…",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":64,
    "text":"Look at Shield",
    "dialogue":"Ivar: It's my old shield. It's seen better days. I wonder if there is anything I could do to give it a touch up?",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":65,
    "text":"Look at Snacks",
    "dialogue":"Ivar: It’s a Drengr Bar, the tasty treat for warriors on the go. The label reads ‘Warning, contains nuts.’",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
  {
    "id":66,
    "text":"Look at Painted Shield",
    "dialogue":"Ivar: My old shield looks much better now it's painted. I wonder if the Jarl would approve?",
    "options":[
        {"text":"Continue","nextText":1}
    ]
  },
// ------------------------------------------ Game Fail
  {
    "id":200,
    "text":"Would you like to try again?",
    "dialogue":"Narrator: And so ends Ivar's tale.",
    "options":[
        {"text":"Yes","nextText":1},
        {"text":"No","nextText":1}
    ]
  },
// ------------------------------------------ Game Complete
  {
    "id":300,
    "text":"Would you like to play again?",
    "dialogue":"Bjorn: Congratulations, boy. It seems you’ve won the favour of the High Council. You and your family may live here so long as you desire.",
    "options":[
        {"text":"Yes","nextText":1},
        {"text":"No","nextText":1}
    ]
  }
];

startGame();