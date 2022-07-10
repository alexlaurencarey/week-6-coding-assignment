
//code to create deck

const deck = [];

function newDeck() {
    for(i = 1; i < 14; i++) {
        for(j = 1 ;j < 5; j++) {
            deck.push(i);
        }
}
}

newDeck();
console.log(deck);

// code to shuffle deck

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffle(deck);
  console.log(deck);

// code to deal two 2 players

var playerOne = [];
var playerTwo = [];
var middleIndex = 0;

function deal(array) {
    middleIndex = Math.ceil(array.length/2);
    playerOne = array.splice(0,middleIndex);
    playerTwo = array.splice(-middleIndex);
}

deal(deck);
console.log(playerOne);
console.log(playerTwo);


// code to run the game

var playerOneScore = 0;
var playerTwoScore = 0;

function playGame() {
    for(i=0; i < playerOne.length; i++) {
      if(playerOne[i] > playerTwo[i]) {
        playerOneScore++;
      } 
      else if (playerOne[i] < playerTwo[i]) {
        playerTwoScore++;
      }
      }
      } 



playGame();

var winner; 

if(playerOneScore > playerTwoScore){
    winner = "Player One is the Winner!!!";
} 
else {
    winner = "Player Two is the Winner!!!";
}

console.log("Player 1's score is " + playerOneScore);
console.log("Player 2's score is " + playerTwoScore);
console.log(winner);


