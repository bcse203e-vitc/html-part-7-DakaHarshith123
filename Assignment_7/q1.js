let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 5;

function guessNumber() {
    let userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (userGuess === randomNumber) {
        alert("Congratulations! You've guessed the correct number.");
    } else if (userGuess > randomNumber) {
        if (attempts < maxAttempts) {
            alert("Too high! Try again.");
            guessNumber();
        } else {
            alert(`Sorry, you've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`);
        }
    } else if (userGuess < randomNumber) {
        if (attempts < maxAttempts) {
            alert("Too low! Try again.");
            guessNumber();
        } else {
            alert(`Sorry, you've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`);
        }
    }
}

guessNumber();
