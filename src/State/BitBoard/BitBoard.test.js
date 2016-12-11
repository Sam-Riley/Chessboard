import BitBoard from './BitBoard.js';


it("gets bits set", ()=>{
	let bb = new BitBoard(0b10000000000000000000000000000001, 0b00000101010101010101010101010101)
	expect(bb.getBitsSet()).toEqual([0,2,4,6,8,10,12,14,16,18,20,22,24,26, 32, 63]);
})


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

//set bits
it("Set's a bit in the lower bitfield of an empty board", ()=>{
	let board = new BitBoard(0,0);

	expect(board.setBit(4)).toEqual(new BitBoard(0,16))
})

it("Set's a bit in the high bitfield of an empty board", ()=>{
	let board = new BitBoard(0,0);

	expect(board.setBit(32)).toEqual(new BitBoard(1,0))
})

it("Set's a bit in both high and low bitfield of an empty board", ()=>{
	let board = new BitBoard(0,0);

	expect(board.setBit(4).setBit(32)).toEqual(new BitBoard(1,16));
})

it("Set's a bit in lower when a bit is already set in lower bitfield", ()=>{
	let board = new BitBoard(1,0);

	expect(board.setBit(4)).toEqual(new BitBoard(1,16));
})

it("Set's a bit in upper bitfield with a bit set in the lower bitfield", ()=>{
	let board = new BitBoard(0,1);

	expect(board.setBit(32)).toEqual(new BitBoard(1,1));
})

it("Set's a bit in both upper and lower when neither bitfield is empty", ()=>{
	let board = new BitBoard(1,1);

	expect(board.setBit(33).setBit(1)).toEqual(new BitBoard(3,3));
})


//adds two boards together
it("Adds two bitboards with no carry only lower bitfields set", ()=>{
	let b1 = new BitBoard(0,1);
	let b2 = new BitBoard(0,1);
	let expected = new BitBoard(0,2);

	expect(b1.plus(b2)).toEqual(expected);
	expect(b2.plus(b1)).toEqual(expected);
})

it("Adds two bitboards, no carry, only high bitfields set", ()=>{
	let b1 = new BitBoard(1,0);
	let b2 = new BitBoard(1,0);
	let expected = new BitBoard(2,0);

	expect(b1.plus(b2)).toEqual(expected);
	expect(b2.plus(b1)).toEqual(expected);
})

it("Adds two bitboards, carry, only low bitfields set", ()=>{
	let b1 = new BitBoard(0,4294967295);
	let b2 = new BitBoard(0,1);
	let expected = new BitBoard(1,0);

	expect(b1.plus(b2)).toEqual(expected);
	expect(b2.plus(b1)).toEqual(expected);
})

it("Adds two randomly chosen 64bit numbers", ()=>{
	let b1 = new BitBoard(33284,742457857);      			//142954433937921
	let b2 = new BitBoard(543164424,2172716545); 		//+	//2332873439603394049
	let expected = new BitBoard(543197708,2915174402);		//2333016394037331970

	expect(b1.plus(b2)).toEqual(expected);
})


it("Subtracts two bitboards with low bitfields", ()=>{
	let b1 = new BitBoard(0,1);
	let b2 = new BitBoard(0,1);
	let expected = new BitBoard(0,0);

	expect(b1.subtract(b2)).toEqual(expected);
})

it("Subtracts two bitboards with high bitfields", ()=>{
	let b1 = new BitBoard(1,0);
	let b2 = new BitBoard(1,0);
	let expected = new BitBoard(0,0);

	expect(b1.subtract(b2)).toEqual(expected);
})

it("Subtracts two bitboards", ()=>{
	let b1 = new BitBoard(2,1);
	let b2 = new BitBoard(1,2);
	let expected = new BitBoard(0,0xfffffffe);

	expect(b1.subtract(b2)).toEqual(expected);
})

it("Multiplies two bitboards", ()=>{
	let bb = new BitBoard(1,9); //4294967305 
	let bb2 = new BitBoard(0,3); // 3
	expect(bb2.mult(bb)).toEqual(new BitBoard(3,27));
})

it("Multiplies two bitboards", ()=>{
	let bb = new BitBoard(0,2);                  
	let bb2 = new BitBoard(0,2147483648);   
	expect(bb.mult(bb2)).toEqual(new BitBoard(1,0));
})

it("Multiplies two bitboards", ()=>{
	let bb = new BitBoard(1,9); //4294967305 
	let bb2 = new BitBoard(2,3); // 8589934595
	expect(bb2.mult(bb)).toEqual(new BitBoard(21,27));
})