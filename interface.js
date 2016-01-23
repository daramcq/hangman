var interface = (function(){
    
    var init = function(){
	var lives = 4;
	var words = ['words','antelope','interlude'];
	var word = chooseWord(words);
        var guesses = new Set([]);
	var g = game.Game(lives, word, guesses);
	var screen = drawGame.Screen(g);
	drawGame.drawScreen(screen);
	$(document).keypress(function(e){
	    handleInput(e);
        });
	var handleInput = function(e){
	    if (!isLetter(e.key)){
		return;
	    }
	    if (game.guesses.has(e.key)){
		return;
	    }
	    g = game.Game(g.lives, g.word, game.guesses.add(e.key));
	    console.log(g);
	    screen = drawGame.Screen(g);
	    drawGame.drawScreen(screen);		
	}
    }
    var chooseWord = function(words){
	var rand = Math.floor(Math.random() * words.length);
	return words[rand];
    };
    var isLetter = function(str){
        return str.length === 1 && str.match(/[a-z]/i).length>0;
    };    
    
    return { init : init };
})();