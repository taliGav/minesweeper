'use strict'

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
      }
      board[i][j] = cell;
    }
  }
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
      strHTML += `<td onclick="cellClicked(this, ${i}, ${j})"class="cell ${className}" onmousedown="cellMarked(this,${i}, ${j},event)"> ${cell} </td>`
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}


function renderCell(location, value) {
  var elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
  elCell.innerHTML = value;
}


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