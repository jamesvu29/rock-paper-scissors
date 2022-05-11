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


function game() {
    let playerwin=0;
    let computerwin=0;

    for (let i=0; i<5; i++) {
        let computerSelection= computerPlay();
        let playerSelection = prompt("Choose your weapon");
        console.log(playround(playerSelection,computerSelection));

        if(playround(playerSelection,computerSelection).includes("win")==true) {
            playerwin += 1;
        }
        else if (playround(playerSelection,computerSelection).includes("draw")==true) {
            playerwin +=1;
            computerwin +=1;
        }
        else {
            computerwin += 1;
        }

        console.log(playerwin, computerwin);
    }

    if(computerwin>playerwin) {
        return "You lose."
    }
    else if (computerwin===playerwin) {
        return "A draw game."
    }
    else {
        return "You win."
    }
}

console.log(game())