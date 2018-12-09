
var Letter = require("./letter");

function Word(word) {
  this.letter = [];
  for (var i = 0; i < word.lenght; i++) {
    var eachLetter = new Letter (word[i]);
    this.letter.push(eachLetter);
  }
  this.checkLetter = function() {
    var testWord = [];
    for (var i = 0; i < this.letter.lenght; i++) {
     
      testWord.push(this.letter[i].answer());
  }
  testWord = testWord.join(" ");
  return testWord;
  }
  this.eachGuess = function (input) {
    for (var i = 0; i < this.letter.lenght; i++) {
      this.letter[i].letterTest(input);
    }
  }
}


// var java = new Word("java");
// // sql.charCheck("sql");
// console.log(new Word, "new Word");

// console.log(sql.isGuessed());

module.exports = Word;