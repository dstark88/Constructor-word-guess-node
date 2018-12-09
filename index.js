var inquirer = require("inquirer");
var Letter = require("./letter");
var Word = require("./word");

var remainingGuesses = 9;
var game;
var currentWord;
var liveWord = [];
completeWord = null;
var testedWord;

var computerOptions = ["beta", "html", "cql", "python", "racket", "rust", "kotlin", "simula", "sather", "labview", "ruby", "perl", "swift", "falcon", "erlang"];

function pick() {
    computerPick = computerOptions[Math.floor((Math.random() * computerOptions.length) + 1)];
    var game2 = new Word (computerPick);
    game = game2;
    currentWord = game.checkLetter();
    currentWord = JSON.stringify(currentWord);
    console.log("Word: " + currentWord);
}

pick();
// Delete this after
console.log("1: " + computerPick);
console.log("2: " + currentWord);


(async function () { // Use an async function to allow the use of AWAIT
    while (remainingGuesses--) { // You need a loop to repeat guess/response cycle
        // Use AWAIT -- simpler to use than THEN
        const inquirerResponse = await inquirer.prompt([{
            type: "input",
            name: "game",
            message: "Guess a letter!"
        }]);
        const liveWord = game.x;
        game.eachGuess(inquirerResponse.game);
        // Don't display splitWord here, but stringRep:
        const output = game.stringRep();
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
