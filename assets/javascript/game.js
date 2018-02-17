(function() {
// Create an array of words
const words = ["dog", "lion", "tiger", "cat", "python", "leopard", "bear", "dinosaur"];
// choose word randomly
var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(chosenWord);
// create Underscore based on length of word with a loop
var rightWord = [];
var wrongWord = [];
var underScore = [];
var guessesRemaining = "n";
 n = 10;
var docUnderScore = document.querySelector(".underscore");
var docRightGuess = document.querySelector(".rightGuess");
var docWrongGuess = document.querySelector(".wrongGuess");
console.log(docWrongGuess);
var generateUnderScore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
var myButton = document.querySelector(".start");
myButton.addEventListener("click", function(event){
    playGame();
});


function playGame() {
    document.addEventListener("keyup", (event) => {
        var userGuess = event.key;
        // if user guess is right 
        if (chosenWord.indexOf(userGuess) > -1) {
            // add to the array of right word   
            rightWord.push(userGuess);
            // replace underscore with right letter
            underScore[chosenWord.indexOf(userGuess)] = userGuess;
            docUnderScore.innerHTML = underScore.join("");
            //check to see if user word matches guesses
            if (underScore.join("") == chosenWord) {
                alert("You Win!");
                }
            } else if (!wrongWord.includes(userGuess)) {
                // else push it to wrong word array
                wrongWord.push(userGuess);
                docWrongGuess.innerHTML = wrongWord;
                n -= 1;
                guessesRemaining = document.querySelector(".guessesRemaining");
                guessesRemaining.innerHTML = n;
                //if guessesRemaining is zero then show alert game over
                if(n < 1) {
                    guessesRemaining.innerHTML = "Game Over :( ";
                    alert("Press the start key");
                }
            }
             else {
                alert("Press different key");
             }
        }); 
}
// document.addEventListener("keyup", (event) => {
//     var userGuess = event.key;
//     // if user guess is right 
//     if (chosenWord.indexOf(userGuess) > -1) {
//         // add to the array of right word   
//         rightWord.push(userGuess);
//         // replace underscore with right letter
//         underScore[chosenWord.indexOf(userGuess)] = userGuess;
//         docUnderScore.innerHTML = underScore.join("");
//         //check to see if user word matches guesses
//         if (underScore.join("") == chosenWord) {
//             alert("You Win!");
//             }
//         } else if (!wrongWord.includes(userGuess)) {
//             guessesRemaining -= 1;
//             console.log(guessesRemaining);
//             // else push it to wrong word array
//             wrongWord.push(userGuess);
//             docWrongGuess.innerHTML = wrongWord;
//         }
//         // else {
//         //     alert("Press different key");
//         // }
//     }); 
    
    docUnderScore.innerHTML = generateUnderScore().join("");

})();

       
        