// Create an array of words
const words = ["dog", "lion", "tiger", "cheetah", "elephant", "leopard", "jaguar", "dinosaur"];
// choose word randomly
var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(chosenWord);
// create Underscore based on length of word with a loop
var rightWord = [];
var wrongWord = [];
var underScore = [];
var generateUnderScore = () => {
    for(var i = 0; i < chosenWord.length; i++){
        underScore.push("_ ");
    }
    return underScore;
}
console.log(generateUnderScore());
// Get Users guess
document.addEventListener("keyup" , (event) => {
    var userGuess = event.key;
// if user guess is right 
    if (chosenWord.indexOf(userGuess) > -1) {
     // add to the arry of right word   
     rightWord.push(userGuess);
     // replace underscore with right letter
     underScore[chosenWord.indexOf(userGuess)] = userGuess;
     console.log(underScore);
     console.log(rightWord);
    } else {
        // else push it to wrong word array
        wrongWord.push(userGuess);
        console.log(wrongWord);
    }
});
// check if the guess is right
// If right push to right array
// If wrong push to wrong array