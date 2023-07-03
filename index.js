const playerChoice = document.getElementById('playerChs');
const computerChoice = document.getElementById('computerChs');
const resultIss = document.getElementById('resultText');
const choiceButton = document.querySelectorAll('.choiceBtn');

let player;
let computer;
let result;

choiceButton.forEach(choiceButton =>
    choiceButton.addEventListener('click', (e) => {
        player = e.target.id;
        player = choiceButton.innerHTML;
        computerTurn();
        playerChoice.innerHTML = `Player: ${player}`;
        computerChoice.innerHTML = `Computer: ${computer}`;
        resultIss.innerHTML = winnerCheck();
    
    }));

function computerTurn() {
    const randomNumb = Math.floor((Math.random() * choiceButton.length) + 1);
    console.log(randomNumb);
    switch(randomNumb) {
        case 1:
            computer = 'Rock';
            break;
            case 2:
                computer = 'Scissors';
            break;
            case 2:
                computer = 'Paper';
            break;
        
    }
}

function winnerCheck() {
    if (player == computer) {
        return "Draw!";
    }
    else if (computer == 'Rock') {
        return (player == 'Paper') ? "You win!": "You lose";
    }
    else if (computer == 'Paper') {
        return (player == 'Scissors') ? "You win!" : "You lose";
    }
    else if(computer == 'Scissors') {
        return(player== 'Rock') ? "You win!" : "You lose";
    }
}