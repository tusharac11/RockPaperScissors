let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScore = document.querySelector("#user-score");
 const compScore = document.querySelector("#comp-score");
 
const genCompChoice = () => {
  //rock,paper,Scissors
  let option = ["rock", "paper", "scissors"];

  //random function
  // Math.random()
  // we have to generate number in between 0  and 2 as,index
  //this can get by multiplaying by 3

  const randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText ="Game Draw, Play Again. ";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin ,userChoice,compChoicce)=>{
  if(userWin){
    console.log("You Win!");
    user_score++;
    userScore.innerText = user_score;
    msg.innerText= `You Win 🎉. Your ${userChoice} beats ${compChoicce}`;
    msg.style.backgroundColor = "green";
  }else{
    console.log("You Loose!");
    comp_score++;
    compScore.innerText = comp_score;
    msg.innerText = `You Lose 😭.${compChoicce} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  console.log("userchoice = ", userChoice);
  //generate computer choice
  const compChoicce = genCompChoice();
  console.log("Computer Choice = ", compChoicce);

  if (userChoice === compChoicce) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors ,paper
      userWin = compChoicce === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock ,scissors
      userWin = compChoicce === "scissors" ? false : true;
    } else {
      userWin = compChoicce === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoicce);
  }
};

//tracking click
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked");
    playGame(userChoice);
  });
});
