const guessedLetters = document.querySelector(".guesses-letters");
const guessLetterButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesParagraph = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);
guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = textInput.value;
    console.log(guess);
    textInput.value = "";
});