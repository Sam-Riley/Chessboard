import BitBoard from '../BitBoard/BitBoard.js';

export default class Board {
	constructor(){
		this.whitePawn = new BitBoard(0,65280);
		this.whiteRook = new BitBoard(0,129);
		this.whiteKnight = new BitBoard(0,66);
		this.whiteBishop = new BitBoard(0,36);
		this.whiteQueen = new BitBoard(0,16);
		this.whiteKing = new BitBoard(0,8);

		this.blackPawn = new BitBoard(16711680, 0);
		this.blackRook = new BitBoard(2164260864,0);
		this.blackKnight = new BitBoard(1107296256,0);
		this.blackBishop = new BitBoard(603979776,0);
		this.blackQueen = new BitBoard(268435456,0);
		this.blackKing = new BitBoard(134217728,0);

		this.whiteBitBoards = [
			this.whitePawn,
			this.whiteRook,
			this.whiteKnight,
			this.whiteBishop,
			this.whiteQueen,
			this.whiteKing
		]

		this.blackBitBoards = [
			this.blackPawn,
			this.blackRook, 
			this.blackKnight, 
			this.blackBishop, 
			this.blackQueen, 
			this.blackKing
		]

	}

	getAllPieces(){
		let boards = [...this.whiteBitBoards, ...this.blackBitBoards];
		let accumulator = new BitBoard(0,0);
		for(let i = 0; i < boards.length; ++i){
			accumulator = accumulator.or(boards[i]);
		}

		return accumulator;
	}

	getWhitePieces(){
		let accumulator = new BitBoard(0,0);
		for(let i = 0; i < this.whiteBitBoards.length; ++i)
			accumulator = accumulator.or(this.whiteBitBoards[i])

		return accumulator;
	}

	getBlackPieces(){
		let accumulator = new BitBoard(0,0);
		for(let i = 0; i < this.blackBitBoards.length; ++i)
			accumulator = accumulator.or(this.blackBitBoards[i])

		return accumulator;
	}

	getAFile(){
		return new BitBoard(2155905152, 2155905152);
	}

	getHFile(){
		return new BitBoard(16843009,16843009);
	}

	getRankOne(){
		return new BitBoard(0,255);
	}

	getRankEight(){
		return new BitBoard(4278190080,0);
	}

	getPiece(index){
		let boards = [...this.whiteBitBoards, ...this.blackBitBoards];
		for(let i = 0; i < boards.length; ++i)
			if(boards[i].isBitSet(index))
				return i;

		return -1;
	}
}
