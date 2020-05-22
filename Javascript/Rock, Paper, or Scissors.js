const getUserChoice = userInput => { userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error');
  }
};

//test
console.log(getUserChoice('scissors'))

//spacing...
console.log("")

function getComputerChoice() {
const randomizer = Math.floor(Math.random() * 3);
switch (randomizer) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissor';
  }
}

console.log(getComputerChoice());

//spacing...
console.log("")

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie!';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissor') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissor') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'bomb') {
    return 'You won!'
  }
}

console.log(determineWinner('paper', 'scissor')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

//spacing...
console.log("")

function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
