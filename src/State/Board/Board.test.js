import Board from './Board.js'
import BitBoard from '../BitBoard/BitBoard.js'
var board = new Board();
it("Gets a bitboard containing every piece", ()=>{
	//4294901760 = 11111111111111110000000000000000
	//65535      = 00000000000000001111111111111111
	expect(board.getAllPieces()).toEqual(new BitBoard(4294901760,65535))
})

it("Gets a BitBoard containing all white pieces", ()=>{
	expect(board.getWhitePieces()).toEqual(new BitBoard(0,65535))
})

it("Gets a BitBoard containing all black pieces", ()=>{
	expect(board.getBlackPieces()).toEqual(new BitBoard(4294901760, 0))
})

it("Gets the A File", ()=>{
	expect(board.getAFile().print()).toEqual("10000000\n10000000\n10000000\n10000000\n10000000\n10000000\n10000000\n10000000")
})

it("Gets the H File", ()=>{
	expect(board.getHFile().print()).toEqual("00000001\n00000001\n00000001\n00000001\n00000001\n00000001\n00000001\n00000001")
})

it("Gets Rank 1", ()=>{
	expect(board.getRankOne().print()).toEqual("00000000\n00000000\n00000000\n00000000\n00000000\n00000000\n00000000\n11111111")
})

it("Gets Rank 8", ()=>{
	expect(board.getRankEight().print()).toEqual("11111111\n00000000\n00000000\n00000000\n00000000\n00000000\n00000000\n00000000")
})

it("Gets the specific piece at an index in lower bitfield", ()=>{
	expect(board.getPiece(1)).toEqual(8);
	expect(board.getPiece(27)).toEqual(-1);
})

it("Gets the specific piece at an index in upper bitfield", ()=>{
	expect(board.getPiece(63)).toEqual(1);
	expect(board.getPiece(40)).toEqual(-1);
})

//generate pawn moves
//testing non-capture moves
it("Generates possible moves for a pawn in its starting position", ()=>{
	let pawn = new BitBoard(0,256);
	expect(board.generatePawnMoves(pawn, new BitBoard(0,0), pawn, 8)).toEqual(new BitBoard(0,16842752));
})

it("Generates possible moves for a pawn that is not in its original spot", ()=>{
	let pawn = new BitBoard(0,65536);
	expect(board.generatePawnMoves(pawn, new BitBoard(0,0), pawn,16)).toEqual(new BitBoard(0,16777216));
})

it("Generates possible moves for a pawn that is behind a friendly piece", ()=>{
	let pawn = new BitBoard(0,256);
	expect(board.generatePawnMoves(new BitBoard(0,65536), new BitBoard(0,0), pawn, 8)).toEqual(new BitBoard(0,0));
})

//testing captures
it("Generates possible move for a pawn in starting position able to capture", ()=>{
	let pawn = new BitBoard(0,256);
	expect(board.generatePawnMoves(new BitBoard(0,256), new BitBoard(0,131072), pawn, 8).print()).toEqual(new BitBoard(0,16973824).print());
})
//generate knight moves
it("Generates possible moves for a knight its starting position", ()=>{
	let knight = new BitBoard(0,2);
	expect(board.generateKnightMoves(knight, new BitBoard(0,0), knight, 1).print()).toEqual(new BitBoard(0,329728).print())
})