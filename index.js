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

rockBtn.addEventListener("click", rockChoice)
scissorsBtn.addEventListener("click", scissorsChoice)
paperBtn.addEventListener("click", paperChoice)

function rockChoice () {
    let human_choice = "rock";
    startGame(human_choice);
}
function paperChoice () {
    let human_choice = "paper";
    startGame(human_choice);
}
function scissorsChoice () {
    let human_choice = "scissors";
    startGame(human_choice);
}

function startGame(playerChoice) {
    let computer_choice = getComputerChoice();
    playRound(playerChoice, computer_choice);
}

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
       checkEnd(roundPlayed);
}

function checkEnd(rounds) {
    if (rounds == 5) results();
}

function results() {
    human_score > computer_score ? computerText.innerHTML = computerText.textContent + "<br>You Won The Game!":
    human_score === computer_score ? computerText.innerHTML = computerText.textContent + "<br>You Lost The Game!":
    computerText.innerHTML = computerText.textContent + "<br>The Game Ends With a Draw!";
    endGame()
}

function endGame() {
    rockBtn.removeEventListener("click", rockChoice);
    paperBtn.removeEventListener("click", paperChoice);
    scissorsBtn.removeEventListener("click", scissorsChoice);
}