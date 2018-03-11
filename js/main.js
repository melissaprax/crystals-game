//document ready jquery
$( document ).ready(function() {

//set variables
crystalOne = null;
crystalTwo = null;
crystalThree = null;
crystalFour = null;

//random number at start of game
let randomNumber = Math.floor((Math.random() * 100) + 1);

//output random number to html
$("#random-number").text(randomNumber);

//each crystal will have a specific number value
let crystalValue = function(w, x, y, z) {
    Math.floor((Math.random() * 100) + 1);
}
console.log(crystalValue);

//on click of crystal, that value will make the random # go down

//define wins

let gameWins = 0;

//define losses

let gameLosses = 0;

//wins go up if number is matched

//losses go up if it's not

//if a win or loss occurs, game resets
//game reset changes value of crystals

//closes up document ready
});



//let crystalOne = {
    //     'name': 'amethyst',
    //     'value': function crystalValue() {
    //         this.Math.floor((Math.random() * 100) + 1);
    //     }, 
    // };
    // let crystalTwo = {
    //     'name': 'labradorite',
    //     'value': function crystalValue() {
    //         this.Math.floor((Math.random() * 100) + 1);
    //     }, 
    // };
    // let crystalThree = {
    //     'name': 'opal',
    //     'value': function crystalValue() {
    //         this.Math.floor((Math.random() * 100) + 1);
    //     },  
    // };
    // let crystalFour = {
    //     'name': 'rose quartz',
    //     'value': function crystalValue() {
    //         this.Math.floor((Math.random() * 100) + 1);
    //     },  
    // };
    