const wordList = ["programming", "javascript", "developer", "web", "coding", "html", "css", "challenge", "solution", "game", "technology", "code", "computer", "software", "function", "variable", "debugging", "algorithm", "responsive", "interface"];

let currentWord;
let hiddenWord;
let attempts = 0;
const maxAttempts = 5;

function startNewGame() {
    currentWord = getRandomWord();
    hiddenWord = getRandomHiddenWord(currentWord);
    displayWord(hiddenWord);
    attempts = 0;
    updateAttemptsCount();
    hidePopup();
}

function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

function getRandomHiddenWord(word) {
    const hiddenWordArray = Array.from(word);
    for (let i = 3; i < hiddenWordArray.length; i++) {
        hiddenWordArray[i] = '_';
    }
    return hiddenWordArray.join(' ');
}

function displayWord(word) {
    document.getElementById('word-container').innerText = word;
}

function checkLetter() {
    const letterInput = document.getElementById('letterInput').value.toLowerCase();
    if (letterInput.length === 1 && /^[a-z]$/.test(letterInput)) {
        if (currentWord.includes(letterInput)) {
            updateHiddenWord(letterInput);
            displayWord(hiddenWord);
            if (hiddenWord.includes('_')) {
                checkGameStatus();
            } else {
                showPopup('Congratulations! You guessed the word!');
            }
        } else {
            attempts++;
            updateAttemptsCount();
            checkGameStatus();
        }
    } else {
        alert('Please enter a valid single letter (a-z)!');
    }
    document.getElementById('letterInput').value = '';
}


function updateHiddenWord(letter) {
    const wordArray = Array.from(currentWord);
    hiddenWord = hiddenWord.split(' ');

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === letter) {
            hiddenWord[i] = letter;
        }
    }

    hiddenWord = hiddenWord.join(' ');
}


function updateAttemptsCount() {
    document.getElementById('attemptsCount').innerText = attempts;
}

function checkGameStatus() {
    if (attempts >= maxAttempts) {
        showPopup('Sorry, you ran out of attempts. Try again!');
    }
}

function showPopup(message) {
    document.getElementById('popup-message').innerText = message;
    document.getElementById('result-popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('result-popup').style.display = 'none';
}

// Start the initial game
startNewGame();
