

function Letter(x) {
    this.x = String(x).toLowerCase();
    this.guess = false;
    this.isGuessed = function() {
        if (!this.guess) {
            return "_";
           
        } else {
            return this.x;
        }
    }
    this.charCheck = function(userInput) {
        if (userInput === this.x) {
            this.guess = true;
        } 
    }
}

// var a = new Letter("a");
// a.charCheck("w");

// console.log(a.isGuessed());

module.exports = Letter;

