var drawGame = (function(){
    
    var drawScreen = function(screen){
	$('#game-message').html(screen.msg);
	$('#gallows').html(screen.gallows);
	$('#display-word').html(screen.word);	
	$('#guesses').html(screen.wrong_guesses);
    }
    return { drawScreen : drawScreen };
})();