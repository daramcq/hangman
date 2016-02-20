var screen = (function(){

    var getWord = function(game){
	var getLetter= function(letter){
	    return (game.guesses.has(letter) ? letter : "_");
	}
	var display_letters = game.word.split('').map(getLetter);
	return display_letters.join(' ');
    }
    
    var getMsg = function(game){
	var msg = '';
	if (game.has_won){
	    msg = 'Congrats! You won!'
	}else if (game.is_dead){
	    msg = 'Oh no, you\'re dead!';
	}else{
	    msg = 'Ok, press a key!';
	}
	return msg;
    }

    var Screen = function(game){	
	this.msg = getMsg(game);
	this.word = getWord(game);
	this.gallows = gallows[game.incorrect_guesses.size];
	this.wrong_guesses = [...game.incorrect_guesses].join(' ');

	return this;
    }    
    return { Screen : Screen };
})()