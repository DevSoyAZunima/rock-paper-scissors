//Variables

let playerPoints = 0, computerPoints = 0;

//Generate Random Numbers Between 0 And 2
    function getRandomNumbers (randomNumbers){
        randomNumbers = Math.floor(Math.random() * 3);
        return randomNumbers;
    }

    //Get computer choice and transform it to a var
    function getComputerChoice (){
        if(getRandomNumbers() === 0){
            return 'rock';
        }else if(getRandomNumbers() === 1){
            return 'paper';
        }else{
            return 'scissors';
        }
    }

    //Play the rounds
    function playRound(playerSelection, computerSelection) {
    //Get user and computer choice
    computerSelection = getComputerChoice();
    playerSelection = prompt('Select between rock, paper, scissors:').toLowerCase();
    
    // Validate user input
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            console.log('Write rock, paper, or scissors');
            return;
        }
        //Determine the winner of the round
        if (
            (playerSelection === 'rock' && computerSelection === 'rock') ||
            (playerSelection === 'paper' && computerSelection === 'paper') ||
            (playerSelection === 'scissors' && computerSelection === 'scissors')
        ) {
            console.log('Oh, what a tie.');
            console.log('Your selection:' + playerSelection)
            console.log('Computer selection:' + computerSelection)
            console.log('Your points:' + playerPoints)
            console.log('Computer points:' + computerPoints)
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            playerPoints++
            console.log('You Win 1 point!');
            console.log('Your selection:' + playerSelection)
            console.log('Computer selection:' + computerSelection)
            console.log('Your points:' + playerPoints)
            console.log('Computer points:' + computerPoints)
        } else {
            computerPoints++
            console.log('Computer wins 1 point!');
            console.log('Your selection:' + playerSelection)
            console.log('Computer selection:' + computerSelection)
            console.log('Your points:' + playerPoints)
            console.log('Computer points:' + computerPoints)
        } 
    } 

    function playGame() {
        for (playerPoints, computerPoints; playerPoints < 5 && computerPoints < 5; playRound()) {}
        if(playerPoints = 5){
            alert('You WIN! Congratulation! Open the console to see the results')
            console.log('Reload this page to play again!')
            console.log('Score:')
            console.log('Your points:' + playerPoints)
            console.log('Computer points:' + playerPoints)
        }else{
            alert('You lose :(. Open the console to see the results')
            console.log('Reload this page to play again!')
            console.log('Score:')
            console.log('Your points:' + playerPoints)
            console.log('Computer points:' + playerPoints)
        }
    }

    playGame();