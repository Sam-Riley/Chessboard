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
		// 	"00000000",
		// 	"00000000",
		// 	"00000000",
		// 	"00000000",
		// 	].join("")));

		// console.log(BitBoard.str2Bin([
		// 	"00000000",
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

	//check each bitboard to see which pieces are attacking this square.
	getAttackingPieces(square){}

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
		@param allyPieces  : a bitboard of all places occupied by a particular pawns side
		@param enemyPieces : a bitboard of all places occupied by a particular pawns enemy side
		@param allyPawns   : a bitboard of all places occupied by friendly pawns

		@returns : a bitboard containing all places that the pawn can move to
	*/
	generatePawnMoves(allyPieces, enemyPieces, allyPawns, pawnIndex){
		let allPieces = allyPieces.or(enemyPieces);
		let pawn = allyPawns.and(new BitBoard(0,0).setBit(pawnIndex));
		let singlePush = pawn.shift_left(8).and(allPieces.not());
		let pawnInRankTwo = pawn.and(this.getRankTwo());
		let noBlockingPiece = pawn.shift_left(8).and(allPieces.not()).shift_left(8).and(allPieces.not());
		let doublePush = pawnInRankTwo.shift_left(16).and(noBlockingPiece);
		let leftTarget = pawn.shift_left(9).and(this.getAFile().not());
		let rightTarget = pawn.shift_left(7).and(this.getHFile().not());
		let validTargets = leftTarget.or(rightTarget).and(enemyPieces);

		return singlePush.or(doublePush).or(validTargets);
	}

	/*
		@param allyPieces  : a bitboard of all places occupied by a particular pawns side
		@param enemyPieces : a bitboard of all places occupied by a particular pawns enemy side
		@param allyPawns   : a bitboard of all places occupied by friendly pawns

		@returns : a bitboard containing all places that the knight can move to
	*/
	generateKnightMoves(allyPieces, enemyPieces, allyKnights, knightIndex){
		let allPieces = allyPieces.or(enemyPieces);
		let knight = allyKnights.and(new BitBoard(0,0).setBit(knightIndex));

		let topMoves = new BitBoard(0,0).setBit(knightIndex+17).setBit(knightIndex+15)
		let leftMoves = new BitBoard(0,0).setBit(knightIndex+10).setBit(knightIndex-2)
		let rightMoves = new BitBoard(0,0).setBit(knightIndex+10).setBit(knightIndex-6);
		let bottomMoves = new BitBoard(0,0).setBit(knightIndex-17).setBit(knightIndex-15);

		return topMoves.or(leftMoves).or(bottomMoves).or(rightMoves).and(allyPieces.not());
	}

	/*
		@param allyPieces  : a bitboard of all places occupied by a particular pawns side
		@param enemyPieces : a bitboard of all places occupied by a particular pawns enemy side
		@param allyPawns   : a bitboard of all places occupied by friendly pawns

		@returns : a bitboard containing all places that the king can move to
	*/

	//the biggest issue here will be making sure that there are no attackers in the movement square
	generateKingMoves(allyPieces, enemyPieces, allyKnights, knightIndex){}
}
