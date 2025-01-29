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

// console.log(getComputerChoice());

function getHumanChoice() {

    let choice = +prompt('Make your choice').toLowerCase();
    
    while(!choice) {

         +prompt('Try again, choice is missing');

        if(choice === null) {
            break;
        }
    }
}

getHumanChoice();