# Milestone Project 2 - Viking Adventure Game

## LIVE LINK HERE
## GITHUB REPO LINK HERE

# Table of Contents

* Introduction

1. User Experience (UX)
* Project Goals
* User Stories
* Design

2. Features
* Existing Features
* Future features to implement

3. Technologies Used
* Language Used
* Frameworks, Libraries & Programs Used

4. Testing
* Bug fixes
* Performance
* Validator Test
* Meeting the Game needs

5. Deployment
* Running this project from the repository
* Running this project locally

6. Credits
* Content
* Media
* Code
* Acknowledgements


# Introduction

Inspired by classic point and click adventure games such as the Monkey Island series, GAME NAME is a short demo of what will one day become a full length game. 
In the game, we follow Ivar, a Norse farmer with dreams of becoming a famous Viking warrior. After his farm is attacked by an invading army, he and his family are forced to relocate to a larger settlement nearby.
It is here the game begins. In order to secure a place for his family in the new settlement, Ivar must first meet with an win over the high council, made up of three important figures:
Jarl Bjørn Odensson, his wife Astrid, and his prized warrior, Sigurd.
The player will guide Ivar through a series of options, learning more about the three members of the high council, and what exactly they can do to win over each member.
As the Jarl of the settlement, Bjørn has riches beyond his wildest imaginations, so the player must use everything they have in their inventory to create something truly unique to win him over.
Astrid, a wise and wistful poet, is searching for someone to match her intellect, and so challenges Ivar to answer three riddles, each of which he must get right in order to succeed.
Sigurd, a battlehardened drengr (warrior) will only approve of someone who can beat him in battle. While Ivar has access to both a sword and an axe, facing Siguard in combat will end in failure. In order to beat this formidable foe, Ivar must think outside the box...
Only once all three members of the high council have been won over will the player be granted refuge, thus concluding the demo.


# User Experience (UX)

## Project Goals

As a homage to the old point and click adventure games of the nineties, this project aims to provide players with an experience reminscent of those old games. 
The art style, user interface, and puzzles will be themed around this retro style. Offering players a demonstration of what will one day become a much larger game, 
this project aims to deliver an interesting, engaging, puzzle-focused experience that will leave players searching for more.

## User Stories

As a first time player, I want to:
* Understand the premise of the game, and the object required to succeed.
* Be presented with an easily-understood user interface.
* Be able to read instructions on how the game works.
* Navigate through the various challenges presented with help from dialogue and contextual clues.
* Have a bug-free experience.

As a returning player, I want to:
* Discover my progress has been saved in local storage.
* Discover alternative dialogue choices based on using incorrect items with things.
* Be able to play the demo entirely on any screen size I desire and have the interface adapt appropriately.

## Design

### Colour Scheme

### Typography

https://fonts.google.com/specimen/VT323?preview.text=Talk%20Use%20Inventory&preview.text_type=custom&sidebar.open=true&selection.family=VT323

### Artwork
All artwork has been created by project developer, Robert Clark, with inspiration gathered from old Point and Click adventure titles akin to those of the Monkey Island series.

### Wireframes

### Mockups

### Options Tree
As this game uses a branching narrative to offer players multiple options, a expansive tree of options had to be created to ensure each avenue was correctly coded. The tree can be seen in its entirety here:
INSERT TREE



# Features

## Existing Features

### Home Page
Here users are greeted with an animated homepage with the game name and links to the game and a help page. 
The artistic style mimics that of the game to ensure users understand the theme before the game has begun.

### Help Page
Here users are given a brief synopsis of the game's story, with an understanding of what situation their protagonist is in, and what is required of them to complete the game.

### Game Page
Here is the meat of the project. Users are introduced to the game before they are let loose to try and reach the game completion. 
Through the interactive buttons provided at the bottom of the page, users must use their inventory and conversational options to win the affection of each member of the High Council.

## Future features to implement

### Further interactivity
As this game uses gif-based images to present a living world, a future update will overhaul this by presenting layered content that users can navigate the character of Ivor through, interacting with things he sees both in and outside the camp.

# Technologies Used

### Languages Used

### Frameworks, Libraries & Programs Used


https://gifmaker.me


# Testing

## Bug fixes

### In-Game Modals
There was an issue regarding the in-game modals not appearing when requested. 

```
<nav class="navbar">
            <div>
                <ul class="nav nav-fill">
                    <button type="button" data-toggle="modal" data-target="#warningModal" class="btn btn-primary">Main Menu</button>
                    <button type="button" data-toggle="modal" data-target="#helpModal" class="btn btn-primary">Help</button>
                </ul>
            </div>
        </nav>
        <div class="modal fade" id="warningModal" tabindex="-1" role="dialog" aria-labelledby="warningModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="warningModalLabel">Are you sure?</h5>
                    </div>
                    <div class="modal-body">
                        <p>If you leave the game, you will lose your current progress.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Game</button>
                        <button type="link" class="btn btn-primary" onclick="window.location.href='index.html'">Return to Main Menu</button>
                    </div>
                </div>
            </div>
```
Despite best efforts to retrieve a solution online, it was the Code Institute tutors who provided the solution. A missing piece of jQuery code had been excluded from the game.html file, which once added made the first modal work fine.

### buttons
During the development of the modal, an issue arose in which the player choice buttons on the game.html page stopped displaying the various IDs shown in game.js.
As this occured immediately after the implementation of the modal and the inclusion of the jQuery file, it is here that I suspect the issue lies.
However, with every attempt to fix made, the layout is distorted wildly, and when the modal and jQuery aspects are removed, it does not restore functionality to the buttons.

After many attempted fixes, it turns out it wasn't a problem caused by the modal, but caused from adding in setState, requiredState and currentState elements to the game.js. Further work will be required on this to ensure it can still function as required.

### Game.html code error
During coding, a row div was rendered unneccessary, and blocked out while further testing was required. 
However, once the decision to delete it was made, it began to throw up an issue wherein the dialogue and 
choice buttons started being distorted out of shape. The code causing this can be seen below.

```
<!--<div class="row dialogue-box">
            <div class="col" id="dialogue">
                Dialogue
            </div>
        </div> --> 
```

Even though it was blocked out, it was still causing a bug when deleted. 
To fix it, the code was rewritten without being blocked out, then the blocked out code was deleted at the same time.
This appeared to revert the structure, so that once the new code was then deleted, it functioned as intended.

## Performance

## Validator Test

## Meeting the Game needs


# Deployment

### Running this project from the repository

### Running this project locally


# Credits

### Content

### Media

### Code

### Acknowledgements
