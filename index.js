const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScore = document.querySelector("#playerscr");
const computerScore = document.querySelector("#computerscr");
const computerText = document.querySelector("#computerText");

let human_score = 0;
let computer_score = 0;
let roundPlayed = 0;

playerScore.textContent = `Player Score: ${human_score}`;
computerScore.textContent = `Computer Score: ${computer_score}`;
computerText.textContent = "the computer choice will be shown here."


rockBtn.addEventListener("click", function(){
    let human_choice = "rock";
    let computer_choice = getComputerChoice();
    playRound(human_choice, computer_choice);
})
scissorsBtn.addEventListener("click", function(){
    let human_choice = "scissors";
    let computer_choice = getComputerChoice();
    playRound(human_choice, computer_choice);
})
paperBtn.addEventListener("click", function(){
    let human_choice = "paper";
    let computer_choice = getComputerChoice();
    playRound(human_choice, computer_choice);
})



function getComputerChoice() {
    let random_computer = Math.floor((Math.random() * 3) + 1);
    let computer_choice;
    switch (random_computer) {
        case 1:
            computer_choice = "rock";
            break;
        case 2:
            computer_choice = "paper";
            break;
        case 3:
            computer_choice = "scissors";
            break;
    }
    return computer_choice;
}

function playRound (human, computer) {
    if (human == "rock") {
        switch (computer) {
            case "rock":
                computerText.textContent = `The computer choose ${computer}, therefore it's a tie!`;
                break;
            case "paper":
                computerText.textContent = `The computer choose ${computer}, therefore you lose!`;
                computer_score += 1;
                break;
            case "scissors":
                computerText.textContent = `The computer choose ${computer}, therefore you win!`;
                human_score += 1;
                break;
        }
    } else if (human == "paper") {
        switch (computer) {
            case "rock":
                computerText.textContent = `The computer choose ${computer}, therefore you win!`;
                human_score += 1;
                break;
            case "paper":
                computerText.textContent = `The computer choose ${computer}, therefore it's a tie!`;
                break;
            case "scissors":
                computerText.textContent = `The computer choose ${computer}, therefore you lose!`;
                computer_score += 1;
                break;
        }
    } else {
        switch (computer) {
            case "rock":
                computerText.textContent = `The computer choose ${computer}, therefore you lose!`;
                computer_score += 1;
                break;
            case "paper":
                computerText.textContent = `The computer choose ${computer}, therefore you win!`;
                human_score += 1;
                break;
            case "scissors":
                computerText.textContent = `The computer choose ${computer}, therefore it's a tie!`;
                break;
        }   
    }  playerScore.textContent = `Player Score: ${human_score}`;
       computerScore.textContent = `Computer Score: ${computer_score}`;
       roundPlayed+= 1;
       console.log(roundPlayed);
}

function playGame () {
    for (let i = 0; i < 5; i++) {
    }
    human_score > computer_score ? alert(`You Win! Your score is ${human_score}, the computer score is ${computer_score}.`) :
    human_score === computer_score ? alert(`It's a Tie! You and the computer have both a score of ${human_score}`):
    alert(`You Lose! Your score is ${human_score}, the computer score is ${computer_score}.`);
}