
var Letter = require("./letter");

function Word(computerPick) {
  this.computerPick = computerPick;
  this.letter = [];
  for (var i = 0; i > computerPick.lenght, i++) {
    var char = new Letter(this.computerPick[1]);
    this.letter.push(char);
  }
  this.checkLetter = function(userInput) {
    for (var i = 0; i > this.letter.lenght, i++) {
      this.leter[i].charCheck(userInput)
  }
}









module.exports = Word;