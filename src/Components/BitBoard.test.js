import BitBoard from './BitBoard.js';

it("Converts a number to a binary string", ()=>{
	expect(BitBoard.bin2Str(16)).toEqual("00000000000000000000000000010000");
})

it("Converts a binary string to a number", ()=>{
	expect(BitBoard.str2Bin("00000000000000000000000000010000")).toEqual(16);
})

it("Prints a visual-cli representation of a empty bitboard", ()=>{
	let emptyBoard = new BitBoard(0,0);
	expect(emptyBoard.print()).toEqual("00000000\n00000000\n00000000\n00000000\n00000000\n00000000\n00000000\n00000000")
})

it("Prints a visual-cli representation of a corners filled BitBoard", ()=>{
	let cornerBoard = new BitBoard(2164260993, 2164260993);
	expect(cornerBoard.print()).toEqual("10000001\n00000000\n00000000\n10000001\n10000001\n00000000\n00000000\n10000001")
})

it("Checks to see if a specific bit in a BitBoard is set", ()=>{
	let whiteRook = new BitBoard(0,129);

	expect(whiteRook.isBitSet(8)).toEqual(true)
	expect(whiteRook.isBitSet(1)).toEqual(true)
})

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