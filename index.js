const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScore = document.querySelector("#playerscr");
const computerScore = document.querySelector("#computerscr");
const computerText = document.querySelector("#computerText");

const restartBtn = document.createElement("button");
restartBtn.id = "restartbtn";
restartBtn.textContent = "Play Again?";
restartBtn.setAttribute("style", "margin-top: 20px; font-size: 38px; font-weight: 700; background-color: #f97e71; width: 250px; height: 50px");

let human_score = 0;
let computer_score = 0;
let roundStart = 0;
let roundToFinish = askRounds();

rockBtn.addEventListener("click", rockChoice);
scissorsBtn.addEventListener("click", scissorsChoice);
paperBtn.addEventListener("click", paperChoice);
playerScore.innerText = `Player Score: ${human_score}`;
computerScore.innerText = `Computer Score: ${computer_score}`;
computerText.textContent = "the computer choice will be shown here.";

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
    }  playerScore.innerText = `Player Score: ${human_score}`;
       computerScore.innerText = `Computer Score: ${computer_score}`;
       roundStart += 1;
       checkEnd(roundStart);
}

function checkEnd(rounds) {
    if (rounds == roundToFinish) results();
}

function results() {
    human_score > computer_score ? computerText.innerHTML = computerText.textContent + "<br>You Won The Game!":
    human_score === computer_score ? computerText.innerHTML = computerText.textContent + "<br>The Game Ends With a Draw!":
    computerText.innerHTML = computerText.textContent + "<br>You Lost The Game!";
    endGame()
}

function endGame() {
    rockBtn.removeEventListener("click", rockChoice);
    paperBtn.removeEventListener("click", paperChoice);
    scissorsBtn.removeEventListener("click", scissorsChoice);
    document.querySelector(".text").appendChild(restartBtn);
    restartBtn.addEventListener("click", restartGame);
}

function restartGame() {
    human_score = 0;
    computer_score = 0;
    roundStart = 0
    rockBtn.addEventListener("click", rockChoice);
    scissorsBtn.addEventListener("click", scissorsChoice);
    paperBtn.addEventListener("click", paperChoice);
    playerScore.innerText = `Player Score: ${human_score}`;
    computerScore.innerText = `Computer Score: ${computer_score}`;
    computerText.textContent = "the computer choice will be shown here.";
    restartBtn.removeEventListener("click", restartGame);
    document.querySelector(".text").removeChild(restartBtn);
    roundToFinish = askRounds();
}

function askRounds() {
    let roundToPlay = Number((window.prompt("How many rounds would you like to play? (0 for infinite mode)")));
    return roundToPlay;
}