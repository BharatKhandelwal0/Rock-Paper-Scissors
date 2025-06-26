let compScore = 0;
let userScore = 0;

let choices = document.querySelectorAll(".choice");
const winMsg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let userMoveName = document.querySelector(".userMoveName");
let compMoveName = document.querySelector(".compMoveName");
let winnerSec = document.querySelector(".winnerSec");
let winner = document.querySelector(".winner");
let resetBtn = document.querySelector(".resetBtn");

const resetGame  = () => {
    resetBtn.addEventListener("click", () => {
        userScore = 0;
        userScorePara.innerText = "0";
        compScore = 0;
        compScorePara.innerText = "0";
        userMoveName.innerText = "choice";
        compMoveName.innerText = "choice";
        winMsg.innerText = "play your move";
        winMsg.style.backgroundColor = "#AAAE7F";
        winMsg.style.color = "#1f2203";
        winMsg.style.border = "3px solid #2c2d21";
        winner.innerText = "none";
        winner.style.backgroundColor = "#AAAE7F";
        winner.style.color = "#1f2203";
        winner.style.border = "3px solid #2c2d21";

    })
}

const fnalWinner = () => {
    if(userScore == compScore){
        winner.innerText = "Game is Draw";
        winner.style.backgroundColor = "#E0DDCF";
        winner.style.color = "#322E20";
        winner.style.border = " 3px solid #322E20";
    }
    else if(userScore > compScore){
        winner.innerText = "You are Winner";
        winner.style.backgroundColor = "#80B979";
        winner.style.color = "#172815";
        winner.style.border = "3px solid #172815";
    }
    else{
        winner.innerText = "computer is winner";
        winner.style.backgroundColor = "#E38678";
        winner.style.color = "#33100A";
        winner.style.border = "3px solid #33100A";
    }
}
    
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("user is winner");
        winMsg.innerText = "You Win";
        winMsg.style.backgroundColor = "#0CC0D4";
        winMsg.style.color = "#03343A";
        winMsg.style.border = "3px solid #03343A";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("computer is winner");
        winMsg.innerText = "You Lose";
        winMsg.style.backgroundColor = "#E24240";
        winMsg.style.color = "#350908";
        winMsg.style.border = "3px solid #350908";
    }
    fnalWinner();
}

const genCompChoice = () => {
    const option = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    console.log("game has been draw");
    winMsg.innerText = "draw";
    winMsg.style.backgroundColor = "#AEA4BF";
    winMsg.style.color = "#312A3C";
    winMsg.style.border = "3px solid #312A3C";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
    compMoveName.innerText = compChoice;
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            if(compChoice === "Scissors"){
                userWin = true;
            }
            else{
                userWin = false;
            }
        }
        else if(userChoice === "Paper"){
            if(compChoice === "Scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else{
            if(compChoice === "Rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("user choice = ", userChoice);
        userMoveName.innerText = userChoice;
        playGame(userChoice);
    })
})
resetGame();
