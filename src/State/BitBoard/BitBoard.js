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

	isBitSet(bit){
		if(bit > 31)
			return ((this.high & (1<<((bit-32))))>>>0) > 0;
		else
			return ((this.low & (1<<(bit)))>>>0) > 0;
	}

	getBit(bit){
		if(bit > 31)
			return (1<<(bit-32))>>>0;
		else
			return (1<<(bit)) >>>0;
	}

	shift_left(n){
		n>>>=0;
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
		return new BitBoard(~this.high>>>0, ~this.low>>>0);
	}
}