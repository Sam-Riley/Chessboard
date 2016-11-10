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

		// console.log(BitBoard.str2Bin([
		// 	"00000001",
		// 	"00000000",
		// 	"00000000",
		// 	"00000000",
		// 	].join("")));

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

	getRankTwo(){return new BitBoard(0,65280)}
	getRankSeven(){return new BitBoard(16711680, 0)}

	getPiece(index){
		let boards = [...this.whiteBitBoards, ...this.blackBitBoards];
		for(let i = 0; i < boards.length; ++i)
			if(boards[i].isBitSet(63-index))
				return i;

		return -1;
	}

	/*
		Note, im going to leave a lot of comments along the way as I figure things out, or learn things
		I'll clean them up in the final commit

		Attempt #1: it worked but i realized that it was very hard to test as it relied on internal state
		as such I was unable to provide easy test cases. While fixable with hacks

		such as calling the move generating function at a position occupied by another piece. The biggest
		pitfall here is readability would likely be hindered
	*/
	// generateWhitePawnMoves(index){
	// 	let pawn = new BitBoard();
	// 	//single push
	// 	let singlePush = pawn.setBit(index+8).and(this.getBlackPieces().not()).and(this.getWhitePieces().not());
	// 	//double push
	// 	let doublePush = pawn.setBit(index).and(this.getRankTwo()).shift_left(16).and(this.getWhitePieces().not()).and(this.getBlackPieces().not());

	// 	return singlePush.or(doublePush);
	// }

	/*
		Attempt #2: allons y!

		first things first, this function is making a few assumptions. 

		1. that bitBoards contain the following items:
			1. a BitBoard containing all of the places occupied by white
			2. a BitBoard containing all of the places occupied by black
			3. a BitBoard comtaining all of the places occupied by white pawns

		2. that pawnIndex is a number n such that 64 > n > 0

	*/
	generateWhitePawnMoves(bitBoards, pawnIndex){
		let allPieces = bitBoards[0].or(bitBoards[1]);
		
		//checking if pawn is valid
		let pawn = bitBoards[2].and(new BitBoard(0,0).setBit(pawnIndex));

		//single push
		let singlePush = pawn.shift_left(8).and(allPieces.not());
		

		//double push Steps:
		// 	1. Make sure pawn is in starting position
			let pawnInRankTwo = pawn.and(this.getRankTwo());
		//	2. Make sure there is no piece in front of the pawn
			let noBlockingPiece = pawn.shift_left(8).and(allPieces.not()).shift_left(8).and(allPieces.not());
		
		let doublePush = pawnInRankTwo.shift_left(16).and(noBlockingPiece)
		

		return singlePush.or(doublePush);
	}
}
