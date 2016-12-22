export default class BitBoard{
	constructor(high, low){
		this.low = low;
		this.high = high;
	}

	static bin2Str(n){
		let str = (n >>> 0).toString(2);
		let emptyField = "00000000000000000000000000000000";
		return emptyField.substr(0,32-str.length) + str;
	}

	static str2Bin(str){
		return parseInt(str, 2);
	}

	print(){
		return BitBoard.bin2Str(this.high).match(/.{1,8}/g).join("\n")
				+"\n"+
				BitBoard.bin2Str(this.low).match(/.{1,8}/g).join("\n")
	}

	isZero(){
		return (this.high===0 && this.low===0);
	}

	isBitSet(bit){
		if(bit > 31)
			return ((this.high & (1 << (bit-32))) >>> 0) > 0;
		else
			return ((this.low & (1 << (bit))) >>> 0) > 0;
	}

	setBit(bit){
		if(bit < 0 || bit > 63) return new BitBoard(this.high, this.low);
		
		if(bit > 31)
			return new BitBoard((this.high >>> 0|((1 << (bit-32)) >>> 0)), this.low)
		else
			return new BitBoard(this.high, (this.low >>> 0 | ((1 << (bit-32)) >>> 0)))
	}

	getBit(bit){
		if(bit > 31)
			return (1 << (bit-32)) >>> 0;
		else
			return (1 << (bit)) >>> 0;
	}

	shift_left(n){
		n >>>= 0;
		if(n===0)
			return new BitBoard(this.high, this.low);

		if(n > 31)
			return new BitBoard((this.low << (n-32)) >>> 0, 0);

		else
			return new BitBoard(((this.high << n) | (this.low >>> (32-n))) >>> 0, (this.low << n) >>> 0);
	}

	shift_right(n){
		n >>>= 0;

		if(n > 31)
			return new BitBoard(0, this.high >>> (n - 32));
		else if (n > 0)
			return new BitBoard(this.high >>> n,((this.low >>> n) | (this.high << (32-n))) >>> 0);

		return new BitBoard(this.high, this.low);

	}

	getSetBits(){
		let bits = [];
		for(var i = 0; i < 64; ++i)
			if(this.isBitSet(i))
				bits.push(i);

		return bits;
	}

	getBitCount(){
		return this.getSetBits().length;
	}

	plus(bitBoard){
		let low = ((this.low >>> 0) + (bitBoard.low >>> 0));
		let carry = low > 0xffffffff ? 1 : 0;
		let high = (this.high + bitBoard.high + carry);

		return new BitBoard(high, low >>> 0);
	}

	subtract(bitBoard){
		let low = (this.low >>> 0) - (bitBoard.low >>> 0);
		let high = (this.high >>> 0) - (bitBoard.high >>> 0) - (low < 0 ? 1 : 0);
		low += low < 0 ? 0xffffffff : 0;

		return new BitBoard(high, low);
	}

	mult(bitBoard){
		let product = new BitBoard(0,0);
		let setBits = this.getSetBits();
		for(var i = 0; i < setBits.length; ++i){
			let shifted = bitBoard.shift_left(setBits[i]);
			product = product.plus(shifted);
		}
		return product;
	}

	//return 1 if bitBoard is greater
	//return 0 if they are the same
	//return -1 if bitBoard is less
	compare(bitBoard){
		if(bitBoard.high < this.high)
			return -1;
		else if(bitBoard.high > this.high)
			return 1;
		else
			if(bitBoard.low < this.low)
				return -1;
			else if(bitBoard.high > this.high)
				return 1;
			else
				return 0;
	}

	or(bitBoard){
		return new BitBoard((this.high | bitBoard.high) >>> 0, (this.low | bitBoard.low) >>> 0);
	}

	xor(bitBoard){
		return new BitBoard((this.high ^ bitBoard.high) >>> 0, (this.low ^ bitBoard.low) >>> 0);
	}

	and(bitBoard){
		return new BitBoard((this.high & bitBoard.high) >>> 0, (this.low & bitBoard.low) >>> 0);
	}

	not(){
		return new BitBoard(~this.high >>> 0, ~this.low >>> 0);
	}
}