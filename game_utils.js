var gameUtils = (function(){
    
    var incorrectGuesses = function(word, guesses){
	var word_letters = new Set(word);
	return setUtils.difference(guesses, word_letters);
    }
    var correctGuesses = function(word, guesses){
	var word_letters = new Set(word);
	return setUtils.intersection(word_letters, guesses);
    }
    var isDead = function(word, guesses, lives){
	return lives <= incorrectGuesses(word, guesses).size;
    }
    var hasWon = function(word, guesses){
	var word_letters = new Set(word);
	var won = (setUtils.intersection(word_letters, guesses).size == word_letters.size);
	console.log(word_letters)
	console.log(setUtils.intersection(word_letters, guesses).size);
	return won;
    };
    var chooseWord = function(words){
	var rand = Math.floor(Math.random() * words.length);
	return words[rand];
    };
    var isLetter = function(str){
        return str.length === 1 && str.match(/[a-z]/i).length>0;
    };
    return { chooseWord : chooseWord,
	     hasWon : hasWon,
	     isDead : isDead,
	     correctGuesses : correctGuesses,
	     incorrectGuesses : incorrectGuesses,
	     isLetter : isLetter
	   };
})();