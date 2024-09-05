import React from 'react';
import Letter from './Letter.js';

function Keyboard({handleGuess, guessedLetters}) {
    const letters = 'qwertyuiopasdfghjklzxcvbnm'.split('');

    return (
        <div className="Keyboard">
            {letters.map((letter) => (
                <Letter 
                    key={letter}
                    letter = {letter}
                    handleGuess={handleGuess}
                    isGuessed={guessedLetters.includes(letter)}
                    />
            ))}
        </div>
    );
}

export default Keyboard;