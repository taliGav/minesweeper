'use strict'


const FLAG = '🚩';
const BOMB = '&#x1F4A3';


function createMine(gLevel) {
    
    for (var i = 0 ; i < gLevel.MINES ; i++ ){
    
       var randI = getRandomInt(0,  gBoard.length-1);
       var randJ = getRandomInt(0,  gBoard.length-1);

    } 
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
	return res;
}