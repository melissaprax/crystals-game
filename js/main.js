//document ready jquery
$( document ).ready(function() {

//random number at start of game
let randomNumber = Math.floor((Math.random() * 100) + 1);

//output random number to html
let outPut = $("#random-number").text(randomNumber);

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

    //wins go up if number is matched
    if (randomNumber === 0) {
        gameWins++;
        $("#wins").html(gameWins);
    }
    //losses go up if it's not
    if (randomNumber < 0) {
        gameLosses++;
        $("#wins").html(gameLosses);
    }
});
$("#crystal2").on('click', function() {
    randomNumber -= crystalTwo.value
    $("#random-number").text(randomNumber);
    if (randomNumber === 0) {
        gameWins++;
        $("#wins").html(gameWins);
    }
    if (randomNumber < 0) {
        gameLosses++;
        $("#wins").html(gameLosses);
    }
});
$("#crystal3").on('click', function() {
    randomNumber -= crystalThree.value
    $("#random-number").text(randomNumber);
    if (randomNumber === 0) {
        gameWins++;
        $("#wins").html(gameWins);
    }
    if (randomNumber < 0) {
        gameLosses++;
        $("#wins").html(gameLosses);
    }
});
$("#crystal4").on('click', function() {
    randomNumber -= crystalFour.value
    $("#random-number").text(randomNumber);
    if (randomNumber === 0) {
        gameWins++;
        $("#wins").html(gameWins);
    }
    if (randomNumber < 0) {
        gameLosses++;
        $("#wins").html(gameLosses);
    }
});

//define wins

let gameWins = 0;

//define losses

let gameLosses = 0;

//if a win or loss occurs, game resets
//game reset changes value of crystals
let restartGame = function() {
    if (gameWins >= 1 || gameLosses >= 1) {
    randomNumber = Math.floor((Math.random() * 100) + 1);
    outPut = $("#random-number").text(randomNumber);
}}

//closes up document ready
});




    