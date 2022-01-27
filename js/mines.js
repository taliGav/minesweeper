'use strict'


const FLAG = '🚩';
bomb1 = '&#x1F4A3';
const BOMB2 = '💣';
const EXPLOSION = '💥';


function renderMines() {
for (var n = 0; n < gMinesPos.length; n++) {
    var currLoc = gMinesPos[n]
	console.log('currLoc',currLoc);
    renderCell(currLoc);
  }
}


function createMines(num=0) {
	gMinesPos = [];
	var minesLength = gLevels[num].MINES;
	for (var i = 0; i < minesLength; i++) {

		var randI = getRandomInt(0, gBoard.length - 1);
		var randJ = getRandomInt(0, gBoard.length - 1);

		
		gBoard[randI][randJ].isMine = true;
		gBoard[randI][randJ].gameElement = bomb1;

		gMinesPos.push({ i: randI, j: randJ });
		renderCell({i: randI, j: randJ}, bomb1);

		console.log('mine' , gBoard[randI][randJ], 'i', randI,'j',randJ);
	}

	console.log('gBoard.length',gBoard.length);
	console.log('minesLength', minesLength);
	console.log('gMinesPos', gMinesPos);
}