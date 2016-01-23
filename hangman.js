var hangman = (function(){
  
  var endGame = function(msg){
    $('#game').hide();
    $('#clickerson').show();
    $('#endgame_msg').html(msg);
  };
  var startGame = function(){
    var lives = 5;
    var words = ["mouse", "tiger", "antelope", "elephant", "intervention", "plausible-deniability"];
    var word = chooseWord(words);
    var word_letters = new Set(word);
    var guesses = new Set([]);
    
    var setupGame = function(word, lives, guesses){
      $('#game').show();
      $('#clickerson').hide();
      var display_word = getWord(word, guesses);
      $('#endgame_msg').html('');
      $('#letters').html(display_word).effect("slide");
      $('#life_counter').html(lives - wrongGuesses(word_letters, guesses));
    };
    var checkLetter = function(letter){
      
      if (isTried(letter, guesses)){
        alert("You've already tried that letter! Try again.");
        return;
      }else{
        guesses.add(letter);
      }
      
      console.log(guesses);
      if (isInWord(letter, word_letters)){
        alert("Well Done!");
      }else{
        alert('Wrong!');
      }
      if (isDead(word_letters, guesses, lives)){
        msg = "You're DEAD!!!! MUAHAHAHAHA!!!!!\n Want to play again?";
        endGame(msg);
      }
      if (hasWon(word_letters, guesses)){
        msg ='You have WON!!! DAWDAWDAW \n Want to play again?';
        endGame(msg);
      }
      // Update the life counter
      var lives_left = lives - wrongGuesses(word_letters, guesses);
      $('#life_counter').html(lives_left);
      $('#letters').html(getWord(word, guesses))
    }
    var checkIt = function(){
      letter = $('#letter').val();
      checkLetter(letter);
    }
    setupGame(word, lives, guesses);
    
    $('#enterLetter').click(checkIt);
  }
  
  var isTried = function(letter, attempts){
    return attempts.has(letter);
  }
  var isInWord = function(letter, word_letters){
    return word_letters.has(letter);
  }
  
  var init = function(){
    $('#clickerson').click(startGame);
  }
  return { init : init };
})();