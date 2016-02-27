var game = (function(){

    var intersection = function(setA, setB){
	var el_in_b = (x => setB.has(x));
	return new Set([...setA].filter(el_in_b));
    }
    
    var difference = function(setA, setB){
	var el_not_in_b = (x => !setB.has(x));
	return new Set([...setA].filter(el_not_in_b));
    }
    var Game = function(lives, word, guesses){	
	this.lives = lives;
	this.word = word;
	this.guesses = guesses;
	this.word_letters = new Set(this.word);
	this.correct_guesses = intersection(this.guesses, this.word_letters);
	this.incorrect_guesses = difference(this.guesses, this.word_letters);	
	this.is_dead = this.lives <= this.incorrect_guesses.size;
	this.has_won = this.correct_guesses.size == this.word_letters.size;
	
	this.addGuess = function(letter){
	    return Game(this.lives, this.word,
			this.guesses.add(letter));
	}
	return this;
    }
    return { Game: Game };

})();