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
    [...document.querySelectorAll('.arr0')],
    [...document.querySelectorAll('.arr1')],
    [...document.querySelectorAll('.arr2')],
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
      [0, 0, 0], // Array 0
      [0, 0, 0], // Array 1
      [0, 0, 0]  // Array 2
  ];
  //okay maybe it has to be array of arrays so 3, 4, 5 doesn't = winner 
  turn = -1;
  winner = null;
  render();
}

function handleClick(event) {
  const arrIdx = parseInt(event.target.className.slice(3));
  const Idx = parseInt(event.target.id.slice(3)); 
  console.log(event.target);
  console.log(arrIdx + Idx);
 if (board[arrIdx][Idx] === 0){
    board[arrIdx][Idx] += turn;
    event.target.innerText = playerLookup[turn];
    turn *= -1;
}
// getWinner(arrIdx, Idx);
// console.log(board);
};

function getWinner(arrIdx, Idx) {
//   for (let i = 0; i <= board.length; i++) {
checkUp(Idx);
checkAcross(arrIdx);
checkDiag(arrIdx, Idx);
  }  


function checkAcross(arrIdx) {
    let sum = 0;
    board[arrIdx].forEach(function(Idx){
        sum += Idx;
    })
    // console.log(sum);
    if (Math.abs(sum) === 3) {
        alert('winner');
      } else {
        return null;
      }
}

function checkUp(Idx) {
    let sum = 0;
    if (Math.abs(board[0][Idx] + board[1][Idx] + board[2][Idx]) === 3) {
        alert('winnerUp');
    } else {
      return null;
    }
}

function checkDiag(arrIdx, Idx) {
    let x = 0; 
    if (arrIdx === Idx){
        board.forEach(function(arrIdx, Idx){
        x += arrIdx[Idx];  
        })
        if (Math.abs(x) === 3){
            alert('winnerDiag');
        }
    } 
    if (arrIdx + Idx === 2){
       for (let i = 0; i < board.length; i++) {
       console.log(board[arrIdx + i][2 - arrIdx]);
       }
  }
 }


render();



function render(){
    console.log('rendered');
    msgEl.innerHTML = `<span style="color: ${playerLookup[turn]}">${playerLookup[turn].toUpperCase()}'s</span> Turn`;
};
