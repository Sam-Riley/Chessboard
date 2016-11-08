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