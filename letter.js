

function Letter(x) {
    this.x = String(x).toLowerCase();
    this.guess = false;
    this.isGuessed = function() {
        if (this.guess) {
            return this.x;
        } else {
            return "_";
        }
    }
    this.charCheck = function(userInput) {
        if (userInput === x) {
            this.guess = true;
        } else {
            this.guess = false;
        }
    }
}

var a = new Letter("a");
a.charCheck("w");

console.log(a.isGuessed());

module.exports = Letter;

