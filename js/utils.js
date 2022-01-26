'use strict'




function renderBoard(board, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < board[0].length; j++) {
      board[i][j] = '';
      var cell = board[i][j];
      var className = 'cell cell-' + i + '-' + j;
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}


// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
  elCell.innerHTML = value;
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



function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

// function shuffle(items) {
//   console.log('items:', items);
//   var randIdx, keep, i;
//   for (i = items.length - 1; i > 0; i--) {
//     randIdx = getRandomInt(0, items.length - 1);

//     keep = items[i];
//     items[i] = items[randIdx];
//     items[randIdx] = keep;
//   }
//   return items;
// }


// oncontextmenu = "cellMarked(this, ${i}, ${j})";

// function cellMarked(elCell, i, j){
//   window.event.preventDefault()
//   console.log('right',i, j);

//   elCell.classList.toggle('cell-marked');
// }