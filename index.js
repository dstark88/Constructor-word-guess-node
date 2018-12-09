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


(async function () { 
    while (remainingGuesses--) { 
        const inquirerResponse = await inquirer.prompt([{
            type: "input",
            name: "game",
            message: "Guess a letter!"
        }]);
        const liveWord = game.x;
        game.eachGuess(inquirerResponse.game);
        const output = game.stringRep();
        console.log(output);
        if (!output.includes("_")) {
            console.log("You found it!");
            return;
        }
    }
   
    console.log('What a pity. You ran out of guesses.');
})();
