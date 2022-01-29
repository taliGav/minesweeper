'use strict'

// var gBoard = null;

// gBoard – A Matrix
// containing cell objects:
// Each
// cell: {
//     minesAroundCount: 4,
//         isShown: true,
//             isMine: false,
//                 isMarked: true

// }


// gLevel = {
//     SIZE: 4,
//     MINES: 2
// };


// gGame = {
//     isOn: false,
//     shownCount: 0,
//     markedCount: 0,
//     secsPassed: 0
// }




// function initGame() {
//     gBoard = buildBoard();
//     createMines(gBoard);
//     printMat(gBoard, '.board-container');
//     gGame.isOn = true;
// }


// function setMinesOnBoard(elCell, row, col) {

//     var SIZE = gLevel.SIZE;
//     var countMine = gLevel.MINES;
//     for (var i = 0; i < SIZE; i++) {
//         for (var j = 0; j < SIZE; j++) {
//             if (row == i && col == j) continue;
//             var x = getRandomInt(10);
//             if (x < 3 && countMine > 0) {
//                 gBoard[i][j].isMine = true;
//                 countMine--;
//             }
//         }
//     }
// }


// var gGame = {
//     isOn: false, shownCount: 0, markedCount: 0, secsPassed: 0,
//     userChoseLevel: false
// }


// function userChoseLevel(level) {
//     gGame.isOn = true;
//     gGame.userChoseLevel = true;
//     switch (level) {
//         case 'Easy':
//             gLevel.SIZE = 4;
//             gLevel.MINES = 2;
//             gGame.livesLeft = 2;
//             break;

//         case 'Medium':
//             gLevel.SIZE = 8;
//             gLevel.MINES = 12;
//             break;
//         case 'Hard':
//             gLevel.SIZE = 12;
//             gLevel.MINES = 30;
//             break;
//     }
//      initGame();
// }



// initGame() // done

// buildBoard()   // done

// setMinesNegsCount(board)  // done

// renderBoard(board)  // done 

// cellClicked(elCell, i, j)  //  done

// cellMarked(elCell) // done

// checkGameOver() 

// expandShown(board, elCell, i, j)    