'use strict'

function cellClicked(elCell, i, j) {
    var cell = gBoard[i][j];

    if (gGame.shownCount === 0) firstClick(i, j)

    if (cell.isMine) {
        elCell.classList.add('bomb');
        elCell.innerHTML = BOMB
    } else {
        elCell.innerHTML = cell.minesAroundCount;
    }

    cell.isShown = true;
    gGame.shownCount++;
    console.log('gGame.shownCount', gGame.shownCount);
    elCell.classList.add('shown');

    checkGameOver();
}

function cellMarked(elCell, i, j, event) {
    var cell = gBoard[i][j];

    if (event.button === 2 && !cell.isMarked) {
        cell.isMarked = true
        elCell.innerHTML = FLAG;
    } else if (event.button === 2 && cell.isMarked) {
        cell.isMarked = false
        elCell.innerHTML = '';
    }

    checkGameOver();

    console.log('cell',cell);
    console.log('gMines',gMines);
}

// function expandShown(board, elCell, i, j) {

// }

function setMineCountToCell() {
    var noneMinesLocs = getNoneMinesLocs();
    console.log('noneMinesCells',noneMinesLocs);
    for (var i = 0; i < noneMinesLocs.length; i++) {
        var cellLoc = noneMinesLocs[i]
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


function getNoneMinesLocs() {
    var res = [];
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var loc = { i: i, j: j }
            var currCell = gBoard[i][j];
            // console.log('currCell',currCell);
            if (!currCell.isMine) res.push(loc);
        }
    }
    // console.log('none mines locs', res);
    return res;
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