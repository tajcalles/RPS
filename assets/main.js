var choices = ['rock', 'paper', 'scissors'];
var result = '';
var decision = document.getElementById('decision');
var winnerCount = document.getElementById('winner-count');
var loserCount = document.getElementById('loser-count');
var tieCount = document.getElementById('tie-count');
var wins = 0;
var losses = 0;
var ties = 0;
var playerPick = document.getElementById('playerPick');
var compPick = document.getElementById('compPick');

function computerChoice() {
  var index = Math.floor(Math.random() * choices.length);
  computer = choices[index];
}

function playerChoice(choice) {
  user = choice;
  if (user === 'rock') {
    playerPick.style.backgroundImage = "url('assets/images/rock.jpg')";
    playerPick.style.backgroundSize = "300px 300px";
  } else if(user === 'paper') {
    playerPick.style.backgroundImage = "url('assets/images/paper.jpg')";
    playerPick.style.backgroundSize = "300px 300px";
  } else if(user === 'scissors') {
    playerPick.style.backgroundImage = "url('assets/images/scissors.jpg')";
    playerPick.style.backgroundSize = "300px 300px";
  }
  computerChoice();
  if (computer === 'rock') {
    compPick.style.backgroundImage = "url('assets/images/rock.jpg')";
    compPick.style.backgroundSize = "300px 300px";
  } else if(computer === 'paper') {
    compPick.style.backgroundImage = "url('assets/images/paper.jpg')";
    compPick.style.backgroundSize = "300px 300px";
  } else if(computer === 'scissors') {
    compPick.style.backgroundImage = "url('assets/images/scissors.jpg')";
    compPick.style.backgroundSize = "300px 300px";
  }
  game(user, computer);
}

function game(user, computer) {
 if (user === computer) {
   result = "Tie!"
   ties++
 }
 else if (user === 'rock') {
   switch(computer) {
     case 'paper':
       result = 'You Lose!'
       losses++
       break;
     case 'scissors':
       result = 'You Win!'
       wins++
       break;
   }
 } else if(user === 'paper') {
     switch(computer) {
       case 'rock':
         result = 'You Win!'
         wins++
         break;
       case 'scissors':
           result = 'You Lose!'
           losses++
         break;
     }
 } else {
   switch(computer) {
     case 'rock':
       result = 'You Lose!'
       losses++
       break;
     case 'paper':
       result = 'You Win!'
       wins++
       break;
   }
 }
  decision.innerText = result;
  winnerCount.innerText = "Wins: " + wins;
  loserCount.innerText = "Losses: " + losses;
  tieCount.innerText = "Ties: " + ties;
}

function getName() {
  var name = prompt('Welcome to Rock, Paper, Scissors! What is your name?');
  if (name === null || name === '') {
    alert('Please put a valid name');
    getName();
  } else {
    var welcome = document.getElementById('welcome');
    welcome.innerText = "Let's settle this old school, " + name + '!';
  }
}

getName();
