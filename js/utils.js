'use strict'
var bomb1 = '&#x1F4A3';


function buildBoard(size = 4) {
  var board = [];
  for (var i = 0; i < size; i++) {
    board.push([]);
    for (var j = 0; j < size; j++) {
      var cell = {
        minesAroundCount: ' ',
        isShown: false,
        isMine: false,
        isMarked: false,
        gameElement: ' '
      }
      board[i][j] = cell;
    }
  }

  // board[0][0].isShown = true
  // board[0][0].isMine = true
  // board[0][0].gameElement = BOMB2

  // board[2][2].isShown = true
  // board[2][2].isMine = true
  // board[2][2].gameElement = BOMB2

  console.table(board);

  return board;
}



function renderBoard(board, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < board[0].length; j++) {
      var cell = '';
      var className = 'cell cell-' + i + '-' + j;
      strHTML += '<td onmousedown="WhichButton(event)" class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}


// location such as: {i: 2, j: 7}
function renderCell(location) {
  // Select the elCell and set the value
  var gameElement = gBoard[location.i][location.j].gameElement;
  var elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
  elCell.innerHTML = gameElement;
}



// function countNegsAround(mat, rowIdx, colIdx) {
//   var count = 0
//   for (var i = rowIdx - 1; i <= rowIdx + 1; i++) { // 0 //1
//     if (i < 0 || i > mat.length - 1) continue
//     for (var j = colIdx - 1; j <= colIdx + 1; j++) { // 0 //1
//       if (j < 0 || j > mat[0].length - 1) continue  
//       if (i === rowIdx && j === colIdx) continue 
//       var currCell = mat[i][j]  //mat 1 1
//       if (currCell.isMine === true) count++
//     }
//   }
//   return count
// }



function getEmptyCells() {
  var res = [];
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[0].length; j++) {
      var loc = { i: i, j: j };
      var currCell = gBoard[i][j];
      if (currCell === EMPTY) res.push(loc);
    }
  }
  return res;
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}



// oncontextmenu = "cellMarked(this, ${i}, ${j})";

// function cellMarked(elCell, i, j){
//   window.event.preventDefault()
//   console.log('right',i, j);

//   elCell.classList.toggle('cell-marked');
// }