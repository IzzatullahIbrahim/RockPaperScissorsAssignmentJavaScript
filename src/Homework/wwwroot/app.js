function playerMove() {
    playMove = parseInt(prompt("Enter what number you want to enter 1. Rock 2. Paper 3. Scissors"));
    if (playMove === 1) {
        console.log('You pick Rock');
    }
    else if (playMove === 2) {
        console.log('You pick Paper');
    }
    else {
        console.log('*You pick Scissor');
    }
    return move = playMove;
}
//Simple computer move, computer choose rock or paper or scissor
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function computerMove() {
    comMove = getRandomNumber(1, 3);
    if (comMove === 1) {
        console.log('Computer pick Rock');
    }
    else if (comMove === 2) {
        console.log('Computer pick Paper');
    }
    else {
        console.log('Computer pick Scissors');
    }
    return comMove = comMove;
}
//Comparing two input and decide who win
function compare() {
    if (playMove == 1 && comMove == 2) {
        computerScore = computerScore + 1;
        console.log('Computer is winning');
    }
    else if (playMove === 1 && comMove === 3) {
        playerScore = playerScore + 1;
        console.log('Player is winning');
    }
    else if (playMove === 2 && comMove === 1) {
        playerScore = playerScore + 1;
        console.log('Player is winning');
    }
    else if (playMove === 2 && comMove === 3) {
        computerScore = computerScore + 1;
        console.log('Computer is winning');
    }
    else if (playMove === 3 && comMove === 1) {
        computerScore = computerScore + 1;
        console.log('Computer is winning');
    }
    else if (playMove === 3 && comMove === 2) {
        playerScore = playerScore + 1;
        console.log('Player is winning');
    }
    else {
        'It is tie';
    }
}
function isGameOver() {
    if (playerScore == 3) {
        alert("***************Player Win***************");
        console.log("***************Player Win***************");
        playGame = false;
    }
    else if (computerScore == 3) {
        alert("***************Computer Win***************");
        console.log("***************Computer Win***************");
        playGame = false;
    }
}
var playerScore = 0;
var computerScore = 0;
var playGame = true;
var x = 1;
do {
    console.log("***************Round " + x + " FIGHT***************");
    playerMove();
    computerMove();
    compare();
    isGameOver();
    console.log("Player Score is " + playerScore + ", ComputerScore is " + computerScore);
    x = x + 1;
} while (playGame == true);
