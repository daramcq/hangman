var drawGame = (function(){
    
    var msg = '';
    var lives_counter = '';
    var word = '';
    var guesses = '';
    
    var drawMsg = function(msg){
	$('#game-message').html(msg);
    }
    var drawLives = function(lives){
	$('#lives').html(lives);
    }
    var drawGallows = function(gallows){
	console.log("Drawing gallows");
	console.log(gallows);
	$('#gallows').html(gallows);
    }
    var drawWrongGuesses = function(wrong_guesses){
	$('#guesses').html(wrong_guesses);
    }
    var drawWord = function(word){
	$('#display-word').html(word);
    }
    var drawSpasms = function(spasms){
	console.log('spasming');
	
    }
    var drawDead = function(spasms){
	console.log('drawing dead');
	for (var i=0; i<100; i++){
	    console.log(spasms[i%spasms.length]);	    
	    setTimeout(function(){
		drawGallows(spasms[i%spasms.length]);
	    }, 1000);
	}
    }
    var drawGame = function(game){
	drawMsg(game.msg);
	drawLives(game.lives);
	drawGallows(game.gallows);
	drawWord(game.word)
	drawWrongGuesses(game.wrong_guesses);
    }
    return { drawGame : drawGame,
	     drawDead : drawDead };
})();