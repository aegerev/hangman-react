import React from 'react';

function HangmanStatus({wrongGuesses, maxWrongGuesses}) {
    return (
        <h4> Wrong Guesses: {wrongGuesses} </h4>
    )
}

export default HangmanStatus;