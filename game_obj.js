var gameObj = (function(){
    
    var getWord = function(word, guesses){
	var getLetter= function(letter){
	    console.log(word);
	    if (guesses.has(letter)){
		return letter;
	    }else{
		return "_";
	    }
	}
	var display_letters = word.split('').map(getLetter);
	return display_letters.join(' ');
    };  
    var init = function(word, guesses, lives){
	
	var display_word = getWord(word, guesses);
	var wrong_guesses = gameUtils.incorrectGuesses(word, guesses);
	var display_wrong_guesses = [...wrong_guesses].join(' ');
	var gallows_sketch = gallows.stages[wrong_guesses.size];
	
	return { msg : "Ok, pick a letter!",
		 lives : lives,
		 gallows : gallows_sketch,
		 word : display_word,
		 wrong_guesses : display_wrong_guesses }
    }
    return { init : init}

})();