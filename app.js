function computerPlay() {
    let arr = ["rock", "paper", "scissor"];
    return arr[Math.floor(Math.random()*arr.length)]
}

function playround(playerSelection, computerSelection) {
    

    if(playerSelection.toLowerCase()===computerSelection) {
        return "The game is a draw."
    }

    else if(playerSelection.toLowerCase()==="rock"){
        if(computerSelection==="paper"){
            return "You lose! paper beats rock."
        }
        else {
            return "You win! rock beats scissor."
        }
    }
    else if(playerSelection.toLowerCase()==="paper") {
        if(computerSelection==="scissor") {
            return "You lose! scissor beats paper."
        }
        else {
            return "You win! paper beats rock."
        }
    }
    else if(playerSelection.toLowerCase()==="scissor") {
        if(computerSelection==="rock") {
            return "You lose! rock beats scissor."
        }
        else {
            return "You win! scissor beats paper."
        }
    }

}

const playerSelection = "Rock";
const computerSelection= computerPlay()
console.log(playround(playerSelection,computerSelection))