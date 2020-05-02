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
const divEls = [
    [...document.querySelectorAll('.col0')],
    [...document.querySelectorAll('.col1')],
    [...document.querySelectorAll('.col2')],
];
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/
document.getElementById('board')
    .addEventListener('click', handleClick);

document.querySelector('button')
    .addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
  board = [
      [0, 0, 0], // Column 0
      [0, 0, 0], // Column 1
      [0, 0, 0] // Column 2
  ];
  //okay maybe it has to be array of arrays so 3, 4, 5 doesn't = winner 
  turn = -1;
  winner = null;
  render();
}

function handleClick(event) {
  const colIdx = event.target.className.slice(3);
  const rowIdx = event.target.id.slice(3); 
  let clickedSpot = board[colIdx][rowIdx];
//   console.log(event.target);
//   console.log(colIdx);
//   console.log(rowIdx);
//   console.log(clickedSpot);
//   getWinner(colIdx, rowIdx);
 if (clickedSpot === 0){
    board[colIdx][rowIdx] += turn;
    console.log(board);
    console.log(clickedSpot);
    event.target.innerText = playerLookup[turn];
    turn *= -1;
}
console.log(board);
};

// function getWinner(colIdx, rowIdx) {
//   for (let i = 0; i <= board.length; i++) {
//     checkUp();
//     // checkAcross();
//     // checkDiag();
//   }  
// }

// function checkUp(colIdx, rowIdx) {
//     if (Math.abs(board[colIdx][rowIdx] + board[colIdx][rowIdx + 1] + board[colIdx][rowIdx + 2]) === 3) {
//         return 'winner';
//       } else {
//         return null;
//       }
// }

render();



function render(){
    console.log('rendered');
    msgEl.innerHTML = `<span style="color: ${playerLookup[turn]}">${playerLookup[turn].toUpperCase()}'s</span> Turn`;
};
