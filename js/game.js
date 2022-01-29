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

var gMinesPos = [];

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}


function initGame(gCurrSize) {
    gBoard = buildBoard(gCurrSize);
    console.log(gBoard);
    renderBoard(gBoard, '.board-container');
    createMines(gCurrLevel);
    setMineCountToCell();


    gGame.isOn = true;
}




function changeLevel(num) {
    gCurrSize = gLevels[num].SIZE;
    gCurrLevel = num;
    initGame(gCurrSize)
    console.log(gBoard);
}


function checkGameOver() {

}




function restartGame() {


}