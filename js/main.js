/*----- constants -----*/
const playerLookup = {
    '1': 'X',
    '-1': 'O',
    '0': 'transparent'
}
/*----- app's state (variables) -----*/
let board;    // Array of column arrays with 1, -1, or null
let turn;     // 1 or -1 (player)
let winner;   // 1 = Player 1; -1 = Player 2; 'T' = tie; null = no winner/tie

/*----- cached element references -----*/
const divEls = [...document.querySelectorAll('#board > div')];
console.log(divEls);
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/
document.getElementById('board')
    .addEventListener('click', handleClick);

document.querySelector('button')
    .addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  //okay maybe it has to be array of arrays so 3, 4, 5 doesn't = winner 
  turn = -1;
  winner = null;
  render();
}

function handleClick(event) {
  const clickedSpot = divEls.indexOf(event.target); 
  getWinner();
  if (board[clickedSpot] === 0){
  board[clickedSpot] = turn;
  console.log(board);
  console.log(clickedSpot);
  event.target.innerText = playerLookup[turn];
   turn *= -1;
} 

function getWinner() {
  for (let i = clickedSpot; i <= board.length; i++) {
    if (Math.abs(board[i] + board[i + 1] + board[i + 2]) === 3) {
        console.log('winner');
    }
  }  
}


}

function render(){
    console.log('rendered');
    msgEl.innerHTML = `<span style="color: ${playerLookup[turn]}">${playerLookup[turn].toUpperCase()}'s</span> Turn`;
}


