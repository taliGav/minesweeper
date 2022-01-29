'use strict'

var gBoard;
var gCurrSize;
var gCurrLevel;

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

var gMinesPos = [];
var gMines = [];

function initGame(gCurrSize) {
    gGame = {
        isOn: true,
        shownCount: 0,
        markedCount: 0,
        secsPassed: 0
    }
    gBoard = buildBoard(gCurrSize);
    console.log(gBoard);
    renderBoard(gBoard, '.board-container');
    createMines(gCurrLevel);
    setMineCountToCell();
}

function firstClick(i, j) {
    var cell = gBoard[i][j];
    if (cell.isMine) {
        for (var n = 0; n < gMinesPos.length; n++) {
            if (gMinesPos[n].i === i && gMinesPos[n].j === j) {
                cell.isMine = false;
                cell.isShown = true;
                var empties = getNoneMinesLocs();
                var emptyLoc = empties[getRandomInt(0, empties.length - 1)];
                var newBomb = gBoard[emptyLoc.i][emptyLoc.j]
                newBomb.isMine = true;
                gMinesPos.splice(n, 1,{i:emptyLoc.i,j:emptyLoc.j});
                setMineCountToCell();
            }
        }
        console.log('new gMinesPos', gMinesPos);
    }
}

function changeLevel(num) {
    gCurrSize = gLevels[num].SIZE;
    gCurrLevel = num;
    initGame(gCurrSize)
    console.log(gBoard);
}


function checkGameOver() {
var markedMines = 0
    for (var n = 0 ; n < gMines.length ; n++ ){
        if (gMines[n].isMarked) markedMines++;
    }
    console.log('markedMines',markedMines);
    if (gMines.length === markedMines) console.log('GAME OVER');
}




function restartGame() {


}