let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const p = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let CompScorePara = document.querySelector("#comp-score");



const genCompChoice =  () => {
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drawGame = () => {
    
   p.innerText = "Game was draw. Play Again!";
   p.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        p.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        p.style.backgroundColor ="green";
        
    }
    else {
        compScore++;
        CompScorePara.innerText =compScore;
        p.innerText = `You lose!  ${compChoice} beats Your ${userChoice}`;
        p.style.backgroundColor = "red";
    }
}



const playGame = (userChoice) => {
    
    // generate computer choice
    const compChoice = genCompChoice();


    if(userChoice === compChoice) {
         // match draw
         drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;   
        } else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});