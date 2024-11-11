document.addEventListener("DOMContentLoaded", function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;  
    let attempts = 0;

    const userGuess = document.getElementById("userGuess");
    const guessButton = document.getElementById("guessButton");
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");
    const playAgainButton = document.getElementById("playAgain");

    guessButton.addEventListener("click", function() {
        const guess = parseInt(userGuess.value);
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            feedback.textContent = "Please enter a number between 1 and 100.";
            return;
        }

        if (guess < randomNumber) {
            feedback.textContent = "Too low!";
        } else if (guess > randomNumber) {
            feedback.textContent = "Too high!";
        } else {
            feedback.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
            guessButton.disabled = true;
            playAgainButton.style.display = "block";
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        userGuess.value = "";
    });

    playAgainButton.addEventListener("click", function() {
        
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        guessButton.disabled = false;
        feedback.textContent = "";
        attemptsDisplay.textContent = "Attempts: 0";
        playAgainButton.style.display = "none";
    });
});
