// VARIABLES
// ==========================================================================
var stats = {
    wins: 0,
    remainingGuesses: 10,
    lettersGuessed: [],
    wordList: ["Horse", "Pig", "Dog", "Cat", "Parrot", "Iguana"],
    
    showWins: function() {
    this.wins = this.wins + 1;
  },
    decrementGuesses: function() {
        this.remainingGuesses = this.remainingGuesses - 1;
    }

  
}
// FUNCTIONS
// ==============================================================================
function writeStats() {
    console.log(stats.wins);
    console.log(stats.lettersGuessed);
  }
// MAIN PROCESS
// ==============================================================================
// This function is run whenever the user presses a key.
document.addEventListener("keyup", function(event){
    
    var userGuess = event.key;
    console.log(userGuess);
    
    

    var chosenWord = stats.wordList[Math.floor(Math.random() * stats.wordList.length)];
   console.log(chosenWord);

   var hiddenWord = "";
   for (i = 0; i < chosenWord.length; i++) {
       hiddenWord = hiddenWord + "_ ";
   }
   console.log(hiddenWord);

    writeStats();
    stats.decrementGuesses();
    console.log(stats.remainingGuesses);
});