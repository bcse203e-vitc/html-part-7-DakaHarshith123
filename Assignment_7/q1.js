<!DOCTYPE html>
<html>
<head>
    <title>Guess the Number Game</title>
</head>
<body>
    <h1>Guess the Number!</h1>
    <p>I'm thinking of a number between 1 and 100.</p>
    <p>You have 5 attempts.</p>

    <input type="number" id="guessInput">
    <button onclick="checkGuess()">Guess</button>

    <p id="feedback"></p>
    <p id="attemptsLeft">Attempts left: 5</p>

    <script>
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 5;

        function checkGuess() {
            let guess = parseInt(document.getElementById("guessInput").value);

            if (isNaN(guess) || guess < 1 || guess > 100) {
                document.getElementById("feedback").textContent = "Please enter a valid number between 1 and 100.";
                return;
            }

            attempts--;
            document.getElementById("attemptsLeft").textContent = "Attempts left: " + attempts;

            if (guess === randomNumber) {
                document.getElementById("feedback").textContent = "Congratulations! You guessed it in " + (5 - attempts) + " tries.";
                disableInput();
            } else if (attempts === 0) {
                document.getElementById("feedback").textContent = "You ran out of attempts. The number was " + randomNumber + ".";
                disableInput();
            } else if (guess < randomNumber) {
                document.getElementById("feedback").textContent = "Too low! Try again.";
            } else {
                document.getElementById("feedback").textContent = "Too high! Try again.";
            }

            document.getElementById("guessInput").value = ""; 
        }

        function disableInput() {
            document.getElementById("guessInput").disabled = true;
            document.querySelector("button").disabled = true;
        }
    </script>
</body>
</html>
