import React, {useState, useEffect} from 'react';
import WordDisplay from './components/WordDisplay.js';
import Keyboard from './components/Keyboard.js';
import HangmanStatus from './components/HangmanStatus.js';
import './App.css';

function App() {

  let words = ['ariel', 'eric', 'melody', 'coral', 'aviva', 'koki', 'chris','martin', 'jodi'];
  let [secretWord] = useState(words[Math.floor(Math.random() * words.length)]);

  console.log(secretWord);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 10;

  let handleGuess = (letter) => {
    if(!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if(!secretWord.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
      }
    }
  };

  useEffect(() => {
    let hasWon = secretWord.split().every((letter) => guessedLetters.includes(letter));
      if(hasWon) {
        alert("Congrats - you're the winner!");
      } 

      if(wrongGuesses >= maxWrongGuesses){
        alert("Sorry about that - you lost. The correct word was: " + secretWord);
      }

  }, [guessedLetters, wrongGuesses, secretWord]);


  return (
    <div className="App">
      <h1>Hangman Game, New Adventures Edition</h1>
      <WordDisplay secretWord={secretWord} guessedLetters={guessedLetters}/>
      <HangmanStatus wrongGuesses={wrongGuesses} maxWrongGuesses={maxWrongGuesses}/>
      <Keyboard handleGuess={handleGuess} guessedLetters = {guessedLetters} />
    </div>
  );
}

export default App;
