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
    return computer_choice;pap
}

function getHumanChoice () {
    while (true) {
        let human_choice = window.prompt("Select an Option (rock/paper/scissors)");
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

const human_choice = getHumanChoice();
const computer_choice = getComputerChoice();
