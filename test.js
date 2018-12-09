function Letter (letter) {
    this.letter = letter;
    this.guess = false;
    this.answer = function () {
        if (!this.guess) {
            return "_";
        }
        else { // No need to check whether this.guess is true here. It is the logical consequence...
            return this.letter;
        }
    }
    this.letterTest = function (guessed) {
        if (guessed === this.letter) {
            this.guess = true;
        }
        // Don't change this.letter, as you will forever forget what the correct letter is!
        // (code was deleted from here)
    }
}

function Word (word) { 
    this.splitWord = [];
    for (var i = 0; i < word.length; i++) { 
        var eachLetter = new Letter (word[i]);
        this.splitWord.push(eachLetter);
    }
    this.stringRep = function () {
        var testedWord = [];
        for (var i = 0; i < this.splitWord.length; i++) {
            // Don't push eachLetter, but use the i-variable as index! 
            testedWord.push(this.splitWord[i].answer());
        }
        testedWord = testedWord.join(" ");
        return testedWord;
    }

    this.eachGuess = function (input) {
        for (var i = 0; i < this.splitWord.length; i++) {
            this.splitWord[i].letterTest(input);
        }
    }    
}

// Simplified implementation of inquirer for this snippet only:
var inquirer = {
    prompt([{type, name, message}]) {
        return new Promise((resolve) => {
            const input = document.querySelector(`[name=${name}]`);
            input.value = "";
            input.placeholder = message;
            input.onchange = e => resolve({ [name]: input.value });
        });
    }
}

var remainingGuesses = 10;
var mainGame;
var currentWord;
var liveWord = [];
completeWord = null;
let countryPicker;
let testedWord;

var europe = ["Albania", "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Denmark", "England", "France", "Greece", "Germany",
"Hungary", "Iceland", "Italy", "Lithuania", "Monaco", "Norway", "Poland", "Portugal", "Romania", "Serbia", "Slovakia", "Spain", "Sweden",
"Switzerland", "Ukraine"];

function pickCountry () {
    countryPicker = europe[Math.floor((Math.random() * europe.length) + 1)];
    var mainGame2 = new Word (countryPicker);
    mainGame = mainGame2;
    currentWord = mainGame.stringRep();
    currentWord = JSON.stringify(currentWord);
    console.log("Word: " + currentWord);
}

pickCountry();
// Delete this after
console.log("1: " + countryPicker);
console.log("2: " + currentWord);

(async function () { // Use an async function to allow the use of AWAIT
    while (remainingGuesses--) { // You need a loop to repeat guess/response cycle
        // Use AWAIT -- simpler to use than THEN
        const inquirerResponse = await inquirer.prompt([{
            type: "input",
            name: "game",
            message: "Guess a letter!"
        }]);
        const liveWord = mainGame.splitWord;
        mainGame.eachGuess(inquirerResponse.game);
        // Don't display splitWord here, but stringRep:
        const output = mainGame.stringRep();
        console.log(output);
        // Detect that the word has been found, and exit if so
        if (!output.includes("_")) {
            console.log("You found it!");
            return;
        }
    }
    // The maximum number of guesses was not enough to find the word
    console.log('What a pity. You ran out of guesses.');
})();