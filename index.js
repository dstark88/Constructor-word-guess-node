var inquirer = require("inquirer");
// var require = require("./index");
// const words = require("./word.js");
// var operator = process.argv[2].toLowerCase();

var computerOptions = ["beta", "html", "cql", "python", "racket", "rust", "kotlin", "simula", "sather", "labview", "ruby", "perl", "swift", "falcon", "erlang"];
//pick a random word
var computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log(computerPick, "computerPick");
var wins = 0;
var losses = 0;
var guesses = 9;

function startGame() {

    makeUnderscore();
    // docGuesses.innerHTML = guesses.toString();
    console.log(makeUnderscore, "makeUnderscore")

}


startGame();
//get users guess 
onkeyup = function (event) {
    var keyPressed = event.key.toLowerCase();
    console.log(keyPressed);
    //if user guess is right
    if (computerPick.indexOf(keyPressed) > -1) {
        //add to right letters
        rightLetter.push(keyPressed);
        console.log(rightLetter);
        //when right replace an underscore in the array
        underscore[computerPick.indexOf(keyPressed)] = keyPressed;
        // docUnderscore[0].innerHTML = underscore.join("");
        console.log(underscore.join(""), "underscore.join")
        // if all underscores are replaced
        if (underscore.join("") == computerPick) {
            alert("You Won!")
            wins++;
            docWins[0].innerHTML = "Wins Count: " + wins;
            resetUnderscore();

            // computer picks a word from the array of computer options     
        }
        // when wrong letter is pushed and they run out of guesses and lose    
    } else {
        wrongLetter.push(keyPressed);
        docWrongLetter[0].innerHTML = wrongLetter.join("");
        guesses--;
        docGuesses[0].innerHTML = "Remaining Guesses: " + guesses;
        if (guesses == 0) {
            alert("You lost! Try again!");
            losses++;
            docLosses[0].innerHTML = "Loss Count: " + losses;
            resetUnderscore();
        }
    }
}