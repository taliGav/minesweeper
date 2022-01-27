'use strict'

var gBoard;
var gCurrSize;
var gLevel;

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

// 0 left 2 right
// function WhichButton(event) {
//     alert(event.button)
//   }

function initGame(gCurrSize) {
    gBoard = buildBoard(gCurrSize);
    console.log(gBoard);
    renderBoard(gBoard, '.board-container');
    createMines(gLevel);
    renderMines();
    console.log('negs count', setMinesNegsCount(gBoard, 1, 1));
    console.log('negs count', setMinesNegsCount(gBoard, 3, 3));

    setMineCountToCell();

    gGame.isOn = true;
}




function changeLevel(num) {
    gCurrSize = gLevels[num].SIZE;
    gLevel = num;
    initGame(gCurrSize)
    console.log(gBoard);
}


function checkGameOver() {

}




function restartGame() {


}