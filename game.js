var game = (function(){

    var intersection = function(setA, setB){
	return new Set([x for (x of setA) if (setB.has(x))]);
    }
    
    var difference = function(setA, setB){
	return new Set([x for (x of setA) if (!setB.has(x))]);
    }
    var Game = function(lives, word, guesses){	
	this.lives = lives;
	this.word = word;
	this.guesses = guesses;
	this.word_letters = new Set(this.word);
	this.correct_guesses = intersection(this.guesses, this.word_letters);
	this.incorrect_guesses = difference(this.guesses, this.word_letters);	
	this.isDead = this.lives <= this.incorrect_guesses.size;
	this.hasWon = this.correct_guesses.size == (this.word_letters.size);
	return this;	
    }
    return { Game: Game };

})();