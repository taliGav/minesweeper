'use strict'

const FLAG = '🚩';
const BOMB = '💣';
const EXPLOSION = '💥';

function createMines(num = 0) {
	gMinesPos = [];
	gMines = [];
	var minesLength = gLevels[num].MINES;
	for (var i = 0; i < minesLength; i++) {

		var randI = getRandomInt(0, gBoard.length - 1);
		var randJ = getRandomInt(0, gBoard.length - 1);
		var newMine = gBoard[randI][randJ];
		newMine.isMine = true;

		gMinesPos.push({ i: randI, j: randJ });
		gMines.push(newMine);
		// renderCell({i: randI, j: randJ}, BOMB);

		console.log('mine', gBoard[randI][randJ], 'i', randI, 'j', randJ);
	}
	console.log('gBoard.length', gBoard.length);
	console.log('minesLength', minesLength);
	console.log('gMinesPos', gMinesPos);	
	console.log('gMines', gMines);
	console.log('gBoard', gBoard);
}
