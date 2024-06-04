let human_score = 0;
let computer_score = 0;

playGame();

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

function getHumanChoice () {
    while (true) {
        let human_choice = (window.prompt("Select an Option (rock/paper/scissors)")).toLowerCase();
        if (human_choice == "rock") {
            return human_choice;
        } else if (human_choice == "paper") {
            return human_choice;
        } else if (human_choice == "scissors") {
            return human_choice;
        } else {
            alert("Please select a valid option!");
        }
    }
}

function playRound (human, computer) {
    if (human == "rock") {
        switch (computer) {
            case "rock":
                alert(`The computer choose ${computer}, therefore it's a tie!`);
                break;
            case "paper":
                alert(`The computer choose ${computer}, therefore you lose!`);
                computer_score += 1;
                break;
            case "scissors":
                alert(`The computer choose ${computer}, therefore you win!`);
                human_score += 1;
                break;
        }
    } else if (human == "paper") {
        switch (computer) {
            case "rock":
                alert(`The computer choose ${computer}, therefore you win!`);
                human_score += 1;
                break;
            case "paper":
                alert(`The computer choose ${computer}, therefore it's a tie!`);
                break;
            case "scissors":
                alert(`The computer choose ${computer}, therefore you lose!`);
                computer_score += 1;
                break;
        }
    } else {
        switch (computer) {
            case "rock":
                alert(`The computer choose ${computer}, therefore you lose!`);
                computer_score += 1;
                break;
            case "paper":
                alert(`The computer choose ${computer}, therefore you win!`);
                human_score += 1;
                break;
            case "scissors":
                alert(`The computer choose ${computer}, therefore it's a tie!`);
                break;
        }
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        const human_choice = getHumanChoice();
        const computer_choice = getComputerChoice();
        playRound(human_choice, computer_choice);
    }
    human_score > computer_score ? alert(`You Win! Your score is ${human_score}, the computer score is ${computer_score}.`) :
    human_score === computer_score ? alert(`It's a Tie! You and the computer have both a score of ${human_score}`):
    alert(`You Lose! Your score is ${human_score}, the computer score is ${computer_score}.`);
}