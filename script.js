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

    if(typeof choice === 'number') {
        return prompt('Try again, choice is missing.');
    }

    return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
}

