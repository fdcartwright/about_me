'use strict';

var gameCounter = 0

//game intro
var userName = prompt('Welcome to the Guessing Game, you will have seven chances to answer yes or no questions. Let\'s see how well you know Dan. If you are ready, place your name below and select OK!');
alert('Alright ' + userName + ', let\'s go! Click OK to start question 1.');

// game question 1
function aboutMeOne() {

    var danCity = prompt('Does Dan live in Bellevue, WA?');

    if (danCity) {
        if (danCity.toLowerCase() === 'yes') {
            gameCounter++;
            alert('That\'s correct, ' + userName + '! Press OK to continue to question 2.');
        } else if (danCity.toLowerCase() === 'y') {
            gameCounter++;
            alert('That\'s correct, ' + userName + '! Press OK to continue to question 2.');
        } else {
            alert('Sorry ' + userName + ', that was not correct. Dan lives in Bellevue. Press OK to continue to question 2.');
        }
    }
}
aboutMeOne();

//game question 2
function aboutMeTwo() {
    var danCollege = prompt('Did Dan go to College at WSU?');
    if (danCollege.toLowerCase() === 'no') {
        gameCounter++;
        alert('That\'s correct, ' + userName + '! Dan went to Bellevue College. Press OK to continue to question 3.');
    } else if (danCollege.toLowerCase() === 'n') {
        gameCounter++;
        alert('That\'s correct, ' + userName + '! Dan went to Bellevue College. Press OK to continue to question 3.');
    } else {
        alert('Sorry ' + userName + ', that was not correct. Dan went to Bellevue College. Press OK to continue to question 3.');
    }
}
aboutMeTwo();

//game question 3
function aboutMeThree() {
    var danCode = prompt('Does Dan want to master JavaScript at CodeFellows?');
    if (danCode.toLowerCase() === 'yes') {
        gameCounter++;
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 4.');
    } else if (danCode.toLowerCase() === 'y') {
        gameCounter++;
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 4.');
    } else {
        alert('Sorry ' + userName + ', that was not correct. Dan does want to master JavaScript at CodeFellows. Press OK to continue to question 4.');
    }
}
aboutMeThree();

//game question 4
function aboutMeFour() {
    var danEmployment = prompt('Is Dan\'s prior employment in Real Estate?');
    if (danEmployment.toLowerCase() === 'yes') {
        gameCounter++;
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 5.');
    } else if (danEmployment.toLowerCase() === 'y') {
        gameCounter++;
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 2.');
    } else {
        alert('Sorry ' + userName + ', that was not correct. Dan lives in Bellevue. Press OK to continue to question 2.');
    }
}
aboutMeFour();

//game question 5
function aboutMeFive() {
    var danTech = prompt('Did Dan manage the online marketing at New Tier Real Estate?');
    if (danTech.toLowerCase() === 'yes') {
        gameCounter++;
        alert('That\'s correct, ' + userName + '! Press OK to continue to finish.');
    } else if (danTech.toLowerCase() === 'y') {
        gameCounter++;
        alert('That\'s correct, ' + userName + '! Press OK to continue to finish.');
    } else {
        alert('Sorry ' + userName + ', that was not correct. Dan did manage the online marketing at New Tier Real Estate. Press OK to continue to finish.');
    }
}
aboutMeFive();

//game question 6
function aboutMeSix() {
    for (var i = 0; i < 4; i++) {
        var userGuess = prompt(userName + ', Can you guess how many countries has Dan been to?')

        if (userGuess < '3') {
            alert('You are too low, please guess again');
        } else if (userGuess > '3') {
            alert('You are too high, please guess again.');
        } else if (userGuess === '3') {
            gameCounter++;
            alert(userName + ', you are correct!');
            break;
        }
        if (i === 3) {
            alert('The correct number is 3.');
        }
    }
}
aboutMeSix();

// game question 7
function aboutMeSeven(){
    var possibleAnswers = ['france', 'italy', 'fiji', 'australia', 'costa rica', 'new zealand', 'puerto rico', 'panama', 'columbia', 'cuba'];

    var maximumTries = 6;
    var currentTurn = 0;
    var playerHasWon = false;
    while (currentTurn < maximumTries) {
        if (playerHasWon === false) {
            var questionSevenGuess = prompt(userName + ', try to guess a country that Dan would like to vist?').toLowerCase();

            for (var i = 0; i < possibleAnswers.length; i++) {
                if (questionSevenGuess === possibleAnswers[i]) {
                    gameCounter++;
                    alert(userName + ', you are correct!');
                    playerHasWon = true;
                    break;
                }
            }
            currentTurn++;

            if (playerHasWon === false && (currentTurn < maximumTries)) {
                alert('Incorrect, try again!')
            } else if (playerHasWon === false && (currentTurn = maximumTries)) {
                alert('GAME OVER, your choices were France, Italy, Fiji, Australia, Costa Rica, New Zealand, Puerto Rico, Panama, Columbia, Cuba')
            }
        } else {
            break;
        }
    }
    alert(userName + ', your total score is ' + gameCounter + ' out of 7.');
}
aboutMeSeven();