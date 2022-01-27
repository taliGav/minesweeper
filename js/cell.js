'use strict'


function cellClicked(elCell, i, j) {

}

function cellMarked(elCell) {

}

function expandShown(board, elCell, i, j) {

}



function setMineCountToCell() {
    var noneMinesCells = getNoneMines();

    for (var i = 0; i < noneMinesCells.length; i++) {
        var cellLoc = noneMinesCells[i]
        var countMinesAroud = setMinesNegsCount(gBoard, cellLoc.i, cellLoc.j)
        
        console.log('countMinesAroud',countMinesAroud , 'cellLoc.i',cellLoc.i,'cellLoc.j',cellLoc.j);

        gBoard[cellLoc.i][cellLoc.j].minesAroundCount = countMinesAroud;

        console.log(gBoard);
    }
}

function setMinesNegsCount(gBoard, rowIdx, colIdx) {
    var count = 0;
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > gCurrSize - 1) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > gCurrSize - 1) continue
            if (i === rowIdx && j === colIdx) continue
            // var currCell = gBoard[i][j]
            if (gBoard[i][j].isMine) count++
        }
    }
    return count
}


function getNoneMines() {
    var res = [];
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var loc = { i: i, j: j }
            var currCell = gBoard[i][j];
            if (currCell.isMine === false) res.push(loc);
        }
    }
    console.log('none mines locs', res);
    return res;
}