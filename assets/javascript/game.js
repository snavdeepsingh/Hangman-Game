// Create an array of words
const words = ["dog", "lion", "tiger", "cheetah", "elephant", "leopard", "jaguar", "dinosaur"];
// choose word randomly
var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(chosenWord);
// create Underscore based on length of word with a loop
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
    var keyCode = event.keyCode;
    console.log(keyCode);
});
// check if the guess is right
// If right push to right array
// If wrong push to wrong array