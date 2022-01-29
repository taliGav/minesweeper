'use strict'


function cellClicked(elCell, i, j) {
    // 0 left 2 right
    // function cellClicked(event) {
    //     alert(event.button)
    //   }

    var cell = gBoard[i][j];
    if (cell.isMine) {
        elCell.innerHTML = BOMB
    } else {
        elCell.innerHTML = cell.minesAroundCount;
    }

    cell.isShown = true;
    gGame.shownCount++;

    elCell.classList.add('shown');
}

function cellMarked(elCell) {

}

function expandShown(board, elCell, i, j) {

}

// function renderCells() {
//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard.length; j++) {

//             var cell = gBoard[i][j]
//             var currLoc = { i: i, j: j }

//             if (cell.isMine) renderCell(currLoc, BOMB)

//             if ((cell.minesAroundCount !== '') && (!cell.isMine)) {
//                 renderCell(currLoc, cell.minesAroundCount)
//             }
//         }
//     }
// }


function setMineCountToCell() {
    var noneMinesCells = getNoneMines();
    for (var i = 0; i < noneMinesCells.length; i++) {
        var cellLoc = noneMinesCells[i]
        // console.log ('cellLoc', cellLoc);
        var countMinesAroud = setMinesNegsCount(gBoard, cellLoc.i, cellLoc.j)
        var cell = gBoard[cellLoc.i][cellLoc.j]
        // console.log('countMinesAroud',countMinesAroud , 'cellLoc.i',cellLoc.i,'cellLoc.j',cellLoc.j);
        if (countMinesAroud === 0) countMinesAroud = '';
        cell.minesAroundCount = countMinesAroud;

        // renderCell(cellLoc, cell.minesAroundCount);
    }
    console.log('gBoard', gBoard);
}

function setMinesNegsCount(gBoard, rowIdx, colIdx) {
    var count = 0;
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > gBoard.length - 1) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > gBoard.length - 1) continue
            if (i === rowIdx && j === colIdx) continue
            // var currCell = gBoard[i][j]
            if (gBoard[i][j].isMine) count++;
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
            if (!currCell.isMine) res.push(loc);
        }
    }
    console.log('none mines locs', res);
    return res;
}