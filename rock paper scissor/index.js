const playerE1 = document.getElementById('player')
const computerE1 = document.getElementById('computer') 
const resultE1 = document.getElementById('result')
const  butnE1 = document.getElementById('rock')
const  butnE2 = document.getElementById('paper')
const  butnE3 = document.getElementById('scissor')
const randombtn =document.getElementById('randombtn')
const randomnum=document.getElementById('randomnum')
const drawE1 = document.getElementById('draw')
const playerWinE1 = document.getElementById('playerWins')
const computerWinE1 = document.getElementById('computerWins')
 
let playerChoice =" " //it is varialble
let computerChoice =" "
let result=" "
let draw=0;
let playerWins=0;
let computerWins=0;
function computerChoose(){
  let randomnum = Math.floor(Math.random()*3)+1;
  switch (randomnum){
      case 1:
        computerChoice = "rock"
        break;
      case 2:
        computerChoice = "paper"
        break;
      case 3:
        computerChoice = "scissor"
        break;
        
  }
  computerE1.textContent = `computer : ${computerChoice}`
}
function checkResult(){
  if(playerChoice === computerChoice){ //=== it is used to indicate value equal and type also equal
    result="draw!"
   
  }
  
  else if(playerChoice==="rock" && computerChoice==="scissor"){
    result="player wins!"
  }
  else if(playerChoice==="rock" && computerChoice==="paper"){
    result="player wins!"
  }
  else if(playerChoice==="paper" && computerChoice==="scissor"){
    result="computer wins!"
  }
  else if(playerChoice==="paper" && computerChoice==="rock"){
    result ="computer wins!"
  }
  else if(playerChoice==="scissor" && computerChoice==="paper"){
    result="player wins!"
  }
  else if(playerChoice==="paper" && computerChoice==="scissor"){
    result="computer wins!"
  }
  else if(playerChoice==="scissor" && computerChoice==="rock"){
    result="computer wins!"
  } 
  else{
    result="error message"
  }
  resultE1.innerText = `result: ${result}`
  if(result==="draw!"){
    draw++;
  }
  else if(result==="player wins!"){
    playerWins++;
  }
  else if(result==="computer wins!"){
    computerWins++;
  }
  else{
    alert('error in counting wins')
  }
  drawE1.innerText = `draw : ${draw}`
  playerWinE1.innerText = `player won : ${playerWins}`
  computerWinE1.innerText = `computer won : ${computerWins}`
}
butnE1.addEventListener('click',()=>{
  playerChoice = "rock";
  playerE1.innerText = `player:${playerChoice}`;
  computerChoose()
  checkResult()
})
butnE2.addEventListener('click',()=>{
 playerChoice = "paper";
 playerE1.innerText = `player:${playerChoice}`;
 computerChoose()
 checkResult()
})
butnE3.addEventListener('click',()=>{
playerChoice = "scissor";
playerE1.innerText = `player:${playerChoice}`;
computerChoose()
checkResult()
})
