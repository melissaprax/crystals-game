//document ready jquery
$( document ).ready(function() {

//random number at start of game
let randomNumber = Math.floor((Math.random() * 100) + 1);

//output random number to html
$("#random-number").text(randomNumber);

//define crystals
//each crystal will have a random number value
let crystalOne = {
        'name': 'amethyst',
        'value': Math.floor((Math.random() * 10) + 1),
    };
    let crystalTwo = {
        'name': 'labradorite',
        'value': Math.floor((Math.random() * 20) + 1),
    };
    let crystalThree = {
        'name': 'opal',
        'value': Math.floor((Math.random() * 10) + 1), 
    };
    let crystalFour = {
        'name': 'rose quartz',
        'value': Math.floor((Math.random() * 30) + 1), 
    };

//on click of crystal, that value will make the random # go down
$("#crystal1").on('click', function() {
    randomNumber -= crystalOne.value
    $("#random-number").text(randomNumber);
});
$("#crystal2").on('click', function() {
    randomNumber -= crystalTwo.value
    $("#random-number").text(randomNumber);
});
$("#crystal3").on('click', function() {
    randomNumber -= crystalThree.value
    $("#random-number").text(randomNumber);
});
$("#crystal4").on('click', function() {
    randomNumber -= crystalFour.value
    $("#random-number").text(randomNumber);
});

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




    