var drawGame = (function(){
    var getWord = function(game){
	var getLetter= function(letter){
	    return (game.guesses.has(letter) ? letter : "_");
	}
	var display_letters = game.word.split('').map(getLetter);
	return display_letters.join(' ');
    }
    var getMsg = function(game){
	var msg = '';
	if (game.hasWon){
	    msg = 'Congrats! You won!'
	}else if (game.isDead){
	    msg = 'Oh no, you\'re dead!';
	}else{
	    msg = 'Ok, press a key!';
	}
	return msg;
    }
    var getGallows = function(game){
	return gallows.stages[game.incorrect_guesses.size];
    }
    var Screen = function(game){	
	this.msg = getMsg(game);
	this.word = getWord(game);
	this.gallows = getGallows(game);
	this.wrong_guesses = [...game.incorrect_guesses].join(' ');

	return this;
    }    
    var drawSpasms = function(spasms){
	console.log('spasming');
	
    }
    var drawDead = function(spasms){
	for (var i=0; i<100; i++){
	    console.log(spasms[i%spasms.length]);	    
	    setTimeout(function(){
		drawGallows(spasms[i%spasms.length]);
	    }, 1000);
	}
    }
    var drawScreen = function(screen){
	$('#game-message').html(screen.msg);
	$('#gallows').html(screen.gallows);
	$('#display-word').html(screen.word);	
	$('#guesses').html(screen.wrong_guesses);
    }
    return { drawScreen : drawScreen,
	     Screen : Screen,
	     drawDead : drawDead };
})();