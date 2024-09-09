const secretWord = "javascript";
const secretNumber = Math.floor(Math.random() * 100) + 1;

function guessWord() {
    const wordInput = document.getElementById('word-input').value.toLowerCase();
    const wordResult = document.getElementById('word-result');
    
    if (wordInput === secretWord) {
        wordResult.textContent = "Congratulations! You guessed the word!";
        wordResult.style.color = "green";
    } else {
        wordResult.textContent = "Wrong guess. Try again!";
        wordResult.style.color = "red";
    }
}

function guessNumber() {
    const numberInput = parseInt(document.getElementById('number-input').value);
    const numberResult = document.getElementById('number-result');
    
    if (numberInput === secretNumber) {
        numberResult.textContent = "Congratulations! You guessed the number!";
        numberResult.style.color = "green";
    } else if (numberInput > secretNumber) {
        numberResult.textContent = "Too high. Try again!";
        numberResult.style.color = "red";
    } else {
        numberResult.textContent = "Too low. Try again!";
        numberResult.style.color = "red";
    }
}
