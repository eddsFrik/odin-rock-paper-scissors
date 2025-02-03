let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    let randomValue = Math.floor(Math.random() * 3) + 1;

    if(randomValue === 3) {
        return 'Scissors';
    }

    if(randomValue === 2) {
        return 'Paper';
    }

    if(randomValue === 1) {
        return 'Rock';
    }

}


function getHumanChoice() {

    let choice = prompt('Make your choice...');
    let capitalizeChoice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    return capitalizeChoice;
}


function playRound(humanChoice, computerChoice) {
    
    if(humanChoice === computerChoice) {
        alert(`It's a tie: You choose: ${humanChoice} | COM choose: ${computerChoice}`);
    }

    if(
        (humanChoice == 'Rock' && computerChoice == 'Scissors') ||
        (humanChoice == 'Scissors' && computerChoice == 'Paper') ||
        (humanChoice == 'Paper' && computerChoice == 'Rock')
    ) {
        humanScore += 1;
        alert(`You win: ${humanChoice} beats ${computerChoice}`)
        alert(`Score: You: ${ humanScore} | COM: ${ computerScore}`);
    }

    if(
        (computerChoice == 'Rock' && humanChoice == 'Scissors') ||
        (computerChoice == 'Scissors' && humanChoice == 'Paper') ||
        (computerChoice == 'Paper' && humanChoice == 'Rock')
    ) {
        computerScore += 1;
        alert(`COM wins: ${computerChoice} beats ${humanChoice}`);
        alert(`Score: COM: ${ computerScore} | You: ${ humanScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);