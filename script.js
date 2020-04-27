let userScore = 0;
let compScore = 0;
const roundResult = document.querySelector("#roundResult");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.getElementById("computerChoice");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const finalResult = document.querySelector("#finalResult");
const wrapper = document.querySelector("#wrapper");
const container = document.getElementById("container");
const result = document.querySelector(".result");

container.addEventListener('click', game);

//runs the game
function game(event) {
        let playerSelection = event.target.id;
        let computerSelection = compPlay();

        playerChoice.src = "img/" + playerSelection + "-user.png";
        computerChoice.src = "img/" + computerSelection + "-comp.png";

        playRound(playerSelection, computerSelection);

        playerScore.textContent = "Your Score: " + userScore;
        computerScore.textContent = "Computer\'s Score: " + compScore;
    
        if (userScore === 5 || compScore === 5) { checkResult(userScore, compScore) }
}
function checkResult(userScore, compScore) {
    if(userScore > compScore){
        finalResult.textContent = "Congratulations! You Won!";
    } else if(userScore === compScore) {
        finalResult.textContent = "It\'s a tie!";
    } else if( userScore < compScore) {
        finalResult.textContent = "Unfortunately, you lost.";
    }

    container.classList.add("display");

    let reset = document.createElement("button");
    reset.innerText ="Try Again";
    result.appendChild(reset);
    result.addEventListener("click", (e) => {location.reload();}) 
}
function compPlay() {
    let compMoves = ["rock", "paper", "scissors"];
    let compChoice = Math.floor(Math.random() * compMoves.length);
    return compMoves[compChoice].toLowerCase();
}
//gets the user and computer inputs and returns win or loss result
function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        roundResult.textContent = "You both chose " + playerSelection + ". It\'s a tie!";
    } else {
        switch (playerSelection+computerSelection) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
            userWin(playerSelection, computerSelection);
            break;
    
            case "scissorsrock":
            case "rockpaper":
            case "paperscissors":
            compWin(playerSelection,computerSelection);
            break;
        }
    }
}
function userWin(playerSelection, computerSelection) {
    userScore++;
    roundResult.textContent = playerSelection + " beats " + computerSelection + ". You Win!";
}
function compWin(playerSelection, computerSelection) {
    compScore++;
    roundResult.textContent = playerSelection + " loses to " + computerSelection + ". You Lose!";
}