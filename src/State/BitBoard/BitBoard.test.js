import BitBoard from './BitBoard.js';

//Conversions
it("Converts a number to a binary string", ()=>{
	expect(BitBoard.bin2Str(16)).toEqual("00000000000000000000000000010000");
})

it("Converts a binary string to a number", ()=>{
	expect(BitBoard.str2Bin("00000000000000000000000000010000")).toEqual(16);
})

//Print

it("Prints a visual-cli representation of a empty bitboard", ()=>{
	let emptyBoard = new BitBoard(0,0);
	expect(emptyBoard.print()).toEqual("00000000\n00000000\n00000000\n00000000\n00000000\n00000000\n00000000\n00000000")
})

it("Prints a visual-cli representation of a corners filled BitBoard", ()=>{
	let cornerBoard = new BitBoard(2164260993, 2164260993);
	expect(cornerBoard.print()).toEqual("10000001\n00000000\n00000000\n10000001\n10000001\n00000000\n00000000\n10000001")
})

//isBitSet
it("Checks to see if a specific bit in the lower bitfield of a BitBoard is set", ()=>{
	let whiteRook = new BitBoard(0,129);
	let whitePawn = new BitBoard(0,65280);

	expect(whiteRook.isBitSet(7)).toEqual(true)
	expect(whiteRook.isBitSet(2)).toEqual(false);

})

it("Checks to see if a specific bin in the upper bitfield of a BitBoardis set", ()=>{
	let blackRook = new BitBoard(2164260864,0);

	expect(blackRook.isBitSet(63)).toEqual(true);
	expect(blackRook.isBitSet(32)).toEqual(false);
})

//board shifting
it("shifts a board once to the left from lower to upper bitfield", ()=>{
	let initialLowerToUpper = new BitBoard(0,2147483648);
	expect(initialLowerToUpper.shift_left(1)).toEqual(new BitBoard(1,0))
})

it("shifts a board once to the left only in lower bitfield", ()=>{
	let initialLowerBoard = new BitBoard(0,1);
	expect(initialLowerBoard.shift_left(1).low).toEqual(2);
})

it("shifts a board once to the left only in upper bitfield", ()=>{
	let initialUpperBoard = new BitBoard(1,0);
	expect(initialUpperBoard.shift_left(1).high).toEqual(2);
})

it("shifts a board zero to the left", ()=>{
	let emptyBoard = new BitBoard(0,0);
	expect(emptyBoard.shift_left(0)).toEqual(new BitBoard(0,0));
})

it("shifts a board once to the right from lower to upper bitfield", ()=>{
	let initialLowerToUpper = new BitBoard(1,0);
	expect(initialLowerToUpper.shift_right(1)).toEqual(new BitBoard(0,2147483648))
})

it("shifts a board once to the right only in lower bitfield", ()=>{
	let initialLowerBoard = new BitBoard(0,4);
	expect(initialLowerBoard.shift_right(1).low).toEqual(2);
})

it("shifts a board once to the right only in upper bitfield", ()=>{
	let initialUpperBoard = new BitBoard(4,0);
	expect(initialUpperBoard.shift_right(1).high).toEqual(2);
})

it("shifts a board zero to the right", ()=>{
	let emptyBoard = new BitBoard(0,0);
	expect(emptyBoard.shift_right(0)).toEqual(new BitBoard(0,0));
})

//OR
it("OR's 2 boards with only high bitfields", ()=>{
	let upperBoard = new BitBoard(1,0);
	expect(upperBoard.or(new BitBoard(2,0))).toEqual(new BitBoard(3,0));
})

it("OR's 2 boards with only low bitfields", ()=>{
	let lowerBoard = new BitBoard(0,1);
	expect(lowerBoard.or(new BitBoard(0,2))).toEqual(new BitBoard(0,3));
})

it("OR's 2 boards with both high and low bitfields", ()=>{
	let board = new BitBoard(1,1);
	expect(board.or(new BitBoard(2,2))).toEqual(new BitBoard(3,3));
})

//XOR
it("XOR's 2 board with only high bitfields", ()=>{
	let board = new BitBoard(1,0);
	expect(board.xor(new BitBoard(2,0))).toEqual(new BitBoard(3,0))
	expect(board.xor(new BitBoard(1,0))).toEqual(new BitBoard(0,0))
	expect(board.xor(new BitBoard(0,0))).toEqual(new BitBoard(1,0))
})

it("XOR's 2 board with only low bitfields", ()=>{
	let board = new BitBoard(0,1);
	expect(board.xor(new BitBoard(0,2))).toEqual(new BitBoard(0,3))
	expect(board.xor(new BitBoard(0,1))).toEqual(new BitBoard(0,0))
	expect(board.xor(new BitBoard(0,0))).toEqual(new BitBoard(0,1))
})

it("XOR's 2 boards with both high and low bitfields", ()=>{
	let board = new BitBoard(1,1);
	expect(board.xor(new BitBoard(2,2))).toEqual(new BitBoard(3,3))
	expect(board.xor(new BitBoard(1,1))).toEqual(new BitBoard(0,0))
	expect(board.xor(new BitBoard(0,0))).toEqual(new BitBoard(1,1))
})

//AND
it("AND's 2 boards with only high bitfields", ()=>{
	let board = new BitBoard(1,0);
	expect(board.and(new BitBoard(1,0))).toEqual(new BitBoard(1,0))
	expect(board.and(new BitBoard(2,0))).toEqual(new BitBoard(0,0))
})

it("AND's 2 boards with only low bitfields", ()=>{
	let board = new BitBoard(0,1);
	expect(board.and(new BitBoard(0,1))).toEqual(new BitBoard(0,1))
	expect(board.and(new BitBoard(0,2))).toEqual(new BitBoard(0,0))
})

it("AND's 2 boards with both high and low bitfields", ()=>{
	let board = new BitBoard(1,1);
	expect(board.and(new BitBoard(1,1))).toEqual(new BitBoard(1,1))
	expect(board.and(new BitBoard(2,2))).toEqual(new BitBoard(0,0))
})

//NOT
it("NOT's a board with only a high bitfield", ()=>{
	let board = new BitBoard(1,0);
	expect(board.not()).toEqual(new BitBoard(4294967294, 4294967295))
})

it("NOT's a board with only a low bitfield", ()=>{
	let board = new BitBoard(0,1);
	expect(board.not()).toEqual(new BitBoard(4294967295, 4294967294));
})

it("NOT's a board with both a high and low bitfield", ()=>{
	let board = new BitBoard(1,1);
	expect(board.not()).toEqual(new BitBoard(4294967294, 4294967294));
})