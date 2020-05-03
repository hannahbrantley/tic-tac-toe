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
    .addEventListener('click', reset);

/*----- functions -----*/
init();

function init() {
  board = [
      [0, 0, 0], // Array 0
      [0, 0, 0], // Array 1
      [0, 0, 0]  // Array 2
  ];
  turn = -1;
  winner = null;
  render();
}

function handleClick(event) {
  const arrIdx = parseInt(event.target.className.slice(3));
  const Idx = parseInt(event.target.id.slice(3)); 
  // console.log(event.target);
  // console.log(arrIdx + Idx);
 if (board[arrIdx][Idx] === 0){
    board[arrIdx][Idx] += turn;
    event.target.innerText = playerLookup[turn];
    turn *= -1;
}
getWinner(arrIdx, Idx);
render();
};

function getWinner(arrIdx, Idx) {
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
        showWinner();
      } else {
        return null;
      }
}

function checkUp(Idx) {
    let sum = 0;
    if (Math.abs(board[0][Idx] + board[1][Idx] + board[2][Idx]) === 3) {
        showWinner();
    } else {
      return null;
    }
}

function checkDiag(a, i) {
    const arrIdx = parseInt(a);
    const Idx = parseInt(i);
    if (arrIdx === Idx){
        let x = 0; 
        board.forEach(function(arrIdx, Idx){
        x += arrIdx[Idx];  
        })
        if (Math.abs(x) === 3){
            showWinner();
        }
    } 
    if (arrIdx + Idx === 2){ 
        //console.log(board[arrIdx][Idx]);
        let z = 0;
        for (let i = 0; i < board.length; i++) {
            z += board[i][2 - i];
            }
        if (Math.abs(z) === 3){
            showWinner();
            }
    }
 }

 function reset(){
    init();
    divEls.forEach(function(i){
        i.forEach(function(div){
            div.innerText = '';
        })
    })
}


function showWinner() {
    alert(`${playerLookup[turn *= -1].toUpperCase()} WINS!`);
    reset();
}

function render(){
    console.log('rendered');
    msgEl.innerHTML = `${playerLookup[turn].toUpperCase()}'s Turn`;
};

