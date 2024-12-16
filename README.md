# hangman-react

## User Story
A while back, I was trying to do an activity from the MIT MERN Stack Bootcamp, when something caught my eye - a self-study discussion. I decided to check out what it was all about.

When I opened it, the directions were to look at the code mentioned and write down everything related to the components of the game (Component hierarchy and roles), everything related to the game state (State management), and everything related to in-app communication (Communication between components). I talked about all that, and then I thought, "Why not create my own Hangman game using React and actually learn about those 3 key topics?" This is what came out of that simple idea. 

## ACTIVITY
The idea was to create a simple, yet interactive, game of Hangman using React. During the creation of the game, I learned 3 super important things:
* There are 5 components in the game. One of them, GameContainer, is the parent container. The other 4 are the children components of the project. 
* The State of the game holds the core of the game. The state has the secret word, guessed letters, etc. The State keeps the game going.
* When it comes to communication, the game uses 2 things: props and callback functions. Props are used to pass data from the parent container to the State and child components. Callback functions are used to communicate between child components and the parent component.

 UPDATE 12.16.24: The app is updated with all-new characters from the show! Some of them are new, some characters that were there had to be removed. Additionally, each time you win (or lose), after you click 'ok', the page **the page refreshes.** So go right ahead - play as much as you want to!
## Technology Stack
* React
  * useState()
  * Callback functions

## Deployment
Deployed: https://aegerev.github.io/hangman-react

GitHub repo: https://github.com/aegerev/hangman-react



(c) 2024 Alexander Egerev. All Rights Reserved.


