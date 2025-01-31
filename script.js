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
    //Working on :D
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));