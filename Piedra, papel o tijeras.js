const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error! Please write the correct input: rock, paper or scissors');
  }
} 

// console.log(getUserChoice('rock')); if it is correct ir should print rock, paper or scissors, or it should print Error! Please write the correct input: rock, paper or scissors
// const getComputerChoice = () => {
//  let randomNumber = Math.floor(Math.random() *3);
// if (randomNumber === 0) {
//   return 'rock'
// } else if (randomNumber === 1) {
//   return 'paper';
// } else if (randomNumber === 2) {
//   return 'scissors';
//   }
// }
// console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'


const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() *3); 
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2: 
    return 'scissors';
  } 
} 

// console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'YOU WON!'
  }
  if (userChoice === computerChoice) {
    return 'TIE!'
  } if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'CPU WINS!'
    } else {
      return 'YOU WON!'
    }
  } if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'CPU WINS!'
    } else {
      return 'YOU WON!'
    }
  } if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'CPU WINS!'
    } else {
      return 'YOU WON!'
    }
  }
}

// console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
// console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
// console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You trew: ' + userChoice);
  console.log('The computer trew:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()



