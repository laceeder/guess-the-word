const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLettersButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//add placeholders for each letter
const placeholder = function(word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
}

placeholder(word);

guessLettersButton.addEventListener("click", function (e) {
  e.preventDefault();
  // Empty message paragraph
  message.innerText = "";
  // Grab what was entered in the input
  const guess = letterInput.value;
  // Make sure that it's a single letter
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    // We've got a letter! Let's guess!
    makeGuess(guess);
  }
  letterInput.value = "";
});

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    // Is the input empty?
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    // Did you type more than one letter?
    message.innerText = "Please enter a single letter.";
  } else if (input.match(acceptedLetter)) {
    // Did you type a number, special character, or something else?
    message.innerText = "Please enter a letter from A to Z.";
  } else {
    // A single letter, yay!
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter!";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    showGuessedLetters();
  }
};

const showGuessedLetters = function () {
  //clear the guessed letters
  guessedLettersElement.innerHTML = "";
  for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
  }
};