'use strict'

var gBoard = buildBoard();

var gLevels = [{
    SIZE: 4,
    MINES: 2
}, {
    SIZE: 8,
    MINES: 12
}, {
    SIZE: 12,
    MINES: 30
}];

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var cell = {
    minesAroundCount: null,
    isShown: true,
    isMine: false,
    isMarked: false
}

function initGame() {
    renderBoard(gBoard, '.board-container');
}





function cellClicked(elCell, i, j) {

}

function cellMarked(elCell) {

}

function checkGameOver() {

}

function expandShown(board, elCell, i, j) {

}


function buildBoard(size=4) {
    var board = [];
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            var cell = {
                minesAroundCount: null,
                isShown: true,
                isMine: false,
                isMarked: true
            }

            board[i][j] = cell;

            // cell.minesAroundCount = setMinesNegsCount(board, i, j)
        }
    }

    console.table(board);
    return board;
}

// cell.minesAroundCount = (!cell.isMine) ? setMinesNegsCount(gBoard, i, j) : '';


function setMinesNegsCount(board, rowIdx, colIdx) {
    var count = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > gLevel.SIZE - 1) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > gLevel.SIZE - 1) continue
            if (i === rowIdx && j === colIdx) continue
            var currCell = board[i][j]
            if (currCell.isMine === true) count++
        }
    }
    return count
}

function changeLevel(num) {
    var size=gLevels[num].SIZE;
    gBoard=buildBoard(size);
    initGame();
}