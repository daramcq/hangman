var interface = (function(){

    var drawScreen = function(screen){
	$('#game-message').html(screen.msg);
	$('#gallows').html(screen.gallows);
	$('#display-word').html(screen.word);	
	$('#guesses').html(screen.wrong_guesses);
    };
    var chooseWord = function(words){
	var rand = Math.floor(Math.random() * words.length);
	return words[rand];
    };
    var isLetter = function(str){
        return str.length === 1 && str.match(/[a-z]/i).length>0;
    };    

    var init = function(){
	var lives = 5;
	var words = ['munificent','interlude', 'cavalcade',
		     'promontory', 'moribund', 'pabulum',
		     'sinecure', 'vestments','illegitimate',
		     'consummate', 'dialectical', 'corpulent',
		     'duopoly', 'oligarchic', 'gavel',
		     'edifice', 'verily', 'varlet',
		     'venal', 'sacrosanct', 'purgative',
		     'substantiate', 'corporeal', 'plenitude'];
	var word = chooseWord(words);
        var guesses = new Set([]);
	var game_obj = game.Game(lives, word, guesses);
	var scr = screen.Screen(game_obj);
	drawScreen(scr);
	$(document).keypress(function(e){	
	    handleInput(e);	  
        });
	var handleInput = function(e){
	    if (!isLetter(e.key) || (game_obj.guesses.has(e.key))){
		return;
	    }
	    if (game_obj.is_dead || game_obj.has_won){
		return;
	    }
	    game_obj = game_obj.addGuess(e.key);
	    scr = screen.Screen(game_obj);
	    drawScreen(scr);		
	}
    }    
    return { init : init };
})();