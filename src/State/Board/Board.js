import BitBoard from '../BitBoard/BitBoard.js';

var magicNumberRook       = [
	new BitBoard(2709520928,2151678512),
	new BitBoard(4198400,1073881088),
	new BitBoard(8390784,536875010),
	new BitBoard(8390658,2156138496),
	new BitBoard(1107297312,273022984),
	new BitBoard(75500032,50593920),
	new BitBoard(67113216,2181304328),
	new BitBoard(8388768,1090521216),
	new BitBoard(269713409,2692792336),
	new BitBoard(32832,136316032),
	new BitBoard(65553,18874560),
	new BitBoard(2228289,672145920),
	new BitBoard(131080,302063628),
	new BitBoard(539623440,1212547076),
	new BitBoard(8454145,4325380),
	new BitBoard(1073774595,2147501312),
	new BitBoard(8320,43008001),
	new BitBoard(9437248,1073897480),
	new BitBoard(34111616,268443649),
	new BitBoard(537002496,544229696),
	new BitBoard(2152202496,135331845),
	new BitBoard(1746960512,67117568),
	new BitBoard(176161792,134361105),
	new BitBoard(11617792,8458308),
	new BitBoard(1107574784,2147520160),
	new BitBoard(2952937473,2149581188),
	new BitBoard(538976256,2148533120),
	new BitBoard(1050624,2148532352),
	new BitBoard(570689536,2155873280),
	new BitBoard(41984,2151022720),
	new BitBoard(33818116,2625713),
	new BitBoard(9183622,16644),
	new BitBoard(2172649536,4202496),
	new BitBoard(1217151008,4198401),
	new BitBoard(1075355648,2155876356),
	new BitBoard(305135649,83890184),
	new BitBoard(2298773512,8389632),
	new BitBoard(4325388,1107310608),
	new BitBoard(8652817,67153938),
	new BitBoard(1575009,2181039105),
	new BitBoard(574621824,549617664),
	new BitBoard(1048864,272678916),
	new BitBoard(167903360,272760864),
	new BitBoard(1048624,151060576),
	new BitBoard(262272,134250516),
	new BitBoard(8389120,67141760),
	new BitBoard(42074624,16810112),
	new BitBoard(1342177665,541720580),
	new BitBoard(16909345,293618176),
	new BitBoard(1073750032,4194752),
	new BitBoard(1647104,1162904064),
	new BitBoard(33566721,6334720),
	new BitBoard(524672,671350912),
	new BitBoard(8922112,33587328),
	new BitBoard(1060888,42140672),
	new BitBoard(3353152,2165572096),
	new BitBoard(8421377,174068289),
	new BitBoard(65664,272629793),
	new BitBoard(264224,16806465),
	new BitBoard(34668688,18875657),
	new BitBoard(2148859920,38017025),
	new BitBoard(134283272,67110403),
	new BitBoard(201916450,2401281),
		new BitBoard(65538,6324803)];
var magicNumberBishop     = [
	new BitBoard(688915778,134234372),
	new BitBoard(34604592,2801926528),
	new BitBoard(1478623776,1107296256),
	new BitBoard(749208737,2097184),
	new BitBoard(33817634,2304),
	new BitBoard(537006608,603979778),
	new BitBoard(2151694596,538968296),
	new BitBoard(2167013890,83953728),
	new BitBoard(2147817489,2215116872),
	new BitBoard(268550658,134283521),
	new BitBoard(268503042,67117312),
	new BitBoard(403703812,2298615808),
	new BitBoard(6423556,536939008),
	new BitBoard(1344799792,70254624),
	new BitBoard(3221752388,39866370),
	new BitBoard(144706049,69337600),
	new BitBoard(155189252,276959762),
	new BitBoard(1574914,1244135952),
	new BitBoard(67896354,134874520),
	new BitBoard(1109918208,2181054544),
	new BitBoard(33587204,14680320),
	new BitBoard(34275346,805441600),
	new BitBoard(592386,26217472),
	new BitBoard(4800530,168427784),
	new BitBoard(2105472,1352933760),
	new BitBoard(1049728,1260913152),
	new BitBoard(541590016,604241936),
	new BitBoard(16957504,67174912),
	new BitBoard(33818656,1275076624),
	new BitBoard(37818624,33587393),
	new BitBoard(271188096,2214863104),
	new BitBoard(155255552,10524742),
	new BitBoard(38014984,4194816),
	new BitBoard(1073778704,268961430),
	new BitBoard(10244,68681760),
	new BitBoard(134218784,136577280),
	new BitBoard(35651716,557088),
	new BitBoard(67240322,591049),
	new BitBoard(2294020,132608),
	new BitBoard(4260864,537985794),
	new BitBoard(68292624,67242008),
	new BitBoard(2149713930,155206152),
	new BitBoard(335618306,1078478848),
	new BitBoard(2237506,134283392),
	new BitBoard(285541377,67109392),
	new BitBoard(541067400,12845185),
	new BitBoard(2172944642,1375732736),
	new BitBoard(1074028800,1090527744),
	new BitBoard(67240356,1145047056),
	new BitBoard(1175519496,33685512),
	new BitBoard(2147486468,17040386),
	new BitBoard(2097224,562563584),
	new BitBoard(2181038112,574882048),
	new BitBoard(607000,16842856),
	new BitBoard(272679432,101744704),
	new BitBoard(134516756,50473536),
	new BitBoard(603988006,34619392),
	new BitBoard(34099714,155451908),
	new BitBoard(67895296,570503200),
	new BitBoard(536875072,4326912),
	new BitBoard(67108866,1611932688),
	new BitBoard(134243124,135267584),
	new BitBoard(9220,134878224),
		new BitBoard(20455425,570435840),];
var rookOccupancyMask     = [
	new BitBoard(65793,16843134),
	new BitBoard(131586,33686140),
	new BitBoard(263172,67372154),
	new BitBoard(526344,134744182),
	new BitBoard(1052688,269488238),
	new BitBoard(2105376,538976350),
	new BitBoard(4210752,1077952574),
	new BitBoard(8421504,2155905150),
	new BitBoard(65793,16875008),
	new BitBoard(131586,33717248),
	new BitBoard(263172,67402240),
	new BitBoard(526344,134772224),
	new BitBoard(1052688,269512192),
	new BitBoard(2105376,538992128),
	new BitBoard(4210752,1077952000),
	new BitBoard(8421504,2155904512),
	new BitBoard(65793,25035008),
	new BitBoard(131586,41681408),
	new BitBoard(263172,75105280),
	new BitBoard(526344,141953024),
	new BitBoard(1052688,275648512),
	new BitBoard(2105376,543039488),
	new BitBoard(4210752,1077821440),
	new BitBoard(8421504,2155773952),
	new BitBoard(65793,2113995008),
	new BitBoard(131586,2080506368),
	new BitBoard(263172,2047083520),
	new BitBoard(526344,1980237824),
	new BitBoard(1052688,1846546432),
	new BitBoard(2105376,1579163648),
	new BitBoard(4210752,1044398080),
	new BitBoard(8421504,2122350592),
	new BitBoard(65918,16843008),
	new BitBoard(131708,33686016),
	new BitBoard(263290,67372032),
	new BitBoard(526454,134744064),
	new BitBoard(1052782,269488128),
	new BitBoard(2105438,538976256),
	new BitBoard(4210750,1077952512),
	new BitBoard(8421502,2155905024),
	new BitBoard(97793,16843008),
	new BitBoard(162818,33686016),
	new BitBoard(293380,67372032),
	new BitBoard(554504,134744064),
	new BitBoard(1076752,269488128),
	new BitBoard(2121248,538976256),
	new BitBoard(4210240,1077952512),
	new BitBoard(8420992,2155905024),
	new BitBoard(8257793,16843008),
	new BitBoard(8126978,33686016),
	new BitBoard(7996420,67372032),
	new BitBoard(7735304,134744064),
	new BitBoard(7213072,269488128),
	new BitBoard(6168608,538976256),
	new BitBoard(4079680,1077952512),
	new BitBoard(8290432,2155905024),
	new BitBoard(2113995009,16843008),
	new BitBoard(2080506370,33686016),
	new BitBoard(2047083524,67372032),
	new BitBoard(1980237832,134744064),
	new BitBoard(1846546448,269488128),
	new BitBoard(1579163680,538976256),
	new BitBoard(1044398144,1077952512),
	new BitBoard(2122350720,2155905024)];
var bishopOccupancyMask   = [
	new BitBoard(4202512,134480384),
	new BitBoard(16416,268960768),
	new BitBoard(64,537922048),
	new BitBoard(0,1075975168),
	new BitBoard(0,38021120),
	new BitBoard(2,67653632),
	new BitBoard(516,135274496),
	new BitBoard(132104,270548992),
	new BitBoard(2101256,67239936),
	new BitBoard(4202512,134479872),
	new BitBoard(16416,269090816),
	new BitBoard(64,571736064),
	new BitBoard(2,1143472128),
	new BitBoard(516,139460608),
	new BitBoard(132104,270532608),
	new BitBoard(264208,541065216),
	new BitBoard(1050628,33554944),
	new BitBoard(2101256,67109888),
	new BitBoard(4202512,167774720),
	new BitBoard(16418,335549440),
	new BitBoard(580,671098880),
	new BitBoard(132104,1342197760),
	new BitBoard(264208,536879104),
	new BitBoard(528416,1073758208),
	new BitBoard(525314,132096),
	new BitBoard(1050628,264192),
	new BitBoard(2101258,659456),
	new BitBoard(4203028,1319424),
	new BitBoard(148520,2638848),
	new BitBoard(264272,5244928),
	new BitBoard(528416,2101248),
	new BitBoard(1056832,4202496),
	new BitBoard(262656,33818624),
	new BitBoard(525312,67637248),
	new BitBoard(1051136,168828928),
	new BitBoard(2233344,337788928),
	new BitBoard(4466688,675545600),
	new BitBoard(544768,1342702592),
	new BitBoard(1056768,537921536),
	new BitBoard(2113536,1075843072),
	new BitBoard(131074,67637248),
	new BitBoard(262148,135274496),
	new BitBoard(655370,270548992),
	new BitBoard(1310740,574619648),
	new BitBoard(2621480,1140981760),
	new BitBoard(5242960,134480384),
	new BitBoard(2097184,268960768),
	new BitBoard(4194368,537921536),
	new BitBoard(516,135274496),
	new BitBoard(1032,270548992),
	new BitBoard(2576,541065216),
	new BitBoard(5154,1073741824),
	new BitBoard(10308,33554432),
	new BitBoard(20488,67239936),
	new BitBoard(8208,134480384),
	new BitBoard(16416,268960768),
	new BitBoard(132104,270548992),
	new BitBoard(264208,541065216),
	new BitBoard(659488,1073741824),
	new BitBoard(1319488,0),
	new BitBoard(2638850,0),
	new BitBoard(5244932,33554432),
	new BitBoard(2101256,67239936),
	new BitBoard(4202512,134480384),];
var rookShift             = [
	52,53,53,53,53,53,53,52,53,54,54,54,54,54,54,53,
    53,54,54,54,54,54,54,53,53,54,54,54,54,54,54,53,
    53,54,54,54,54,54,54,53,53,54,54,54,54,54,54,53,
    53,54,54,54,54,54,54,53,52,53,53,53,53,53,53,52];
var bishopShift           = [
	58,59,59,59,59,59,59,58,59,59,59,59,59,59,59,59,
    59,59,57,57,57,57,59,59,59,59,57,55,55,57,59,59,
    59,59,57,55,55,57,59,59,59,59,57,57,57,57,59,59,
    59,59,59,59,59,59,59,59,58,59,59,59,59,59,59,58];


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

		this.rookMagicMoves = new Array();
		this.rookOccupancyVariations = new Array();	

		this.generateOccupancyVariations();	
	}

	getOccupancy(){
		return this.rookOccupancyVariations;
	}

	getMoves(){
		return this.rookMagicMoves;
	}

	//get rook variations down first
	generateOccupancyVariations(){
		for(let bit=0; bit<=63; ++bit){
			let mask = rookOccupancyMask[bit];
			let setBitsInMask = mask.getSetBits();
			let numOfVariations = (1 << setBitsInMask.length) >>> 0;

			for(let i = 0; i < numOfVariations; i++){
				let variation = new BitBoard(0,0);
				let bitsInIndex = new BitBoard(0,i).getSetBits();
				for(var j=0; j < bitsInIndex.length; ++j)
					variation = variation.setBit(setBitsInMask[bitsInIndex[j]])

				if(!Array.isArray(this.rookOccupancyVariations[bit]))
					this.rookOccupancyVariations.push([]);

				this.rookOccupancyVariations[bit][i] = variation
			}
		}
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
		return this.whiteBitBoards.reduce(function(total, next){
			return total.or(next);
		})
	}

	getBlackPieces(){
		return this.blackBitBoards.reduce(function(total, next){
			return total.or(next);
		})


	}

	getAFile(){return new BitBoard(2155905152, 2155905152);}
	getHFile(){return new BitBoard(16843009,16843009);}
	getRankOne(){return new BitBoard(0,255);}
	getRankEight(){return new BitBoard(4278190080,0);}	
	getRankTwo(){return new BitBoard(0,65280)}
	getRankSeven(){return new BitBoard(16711680, 0)}

	getPiece(index){
		let boards = [...this.whiteBitBoards, ...this.blackBitBoards];
		for(let i = 0; i < boards.length; ++i)
			if(boards[i].isBitSet(63-index))
				return i;

		return -1;
	}

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

	generateKnightMoves(allyPieces, enemyPieces, allyKnights, knightIndex){
		let allPieces = allyPieces.or(enemyPieces);
		let knight = allyKnights.and(new BitBoard(0,0).setBit(knightIndex));

		let topMoves = new BitBoard(0,0).setBit(knightIndex+17).setBit(knightIndex+15)
		let leftMoves = new BitBoard(0,0).setBit(knightIndex+10).setBit(knightIndex-2)
		let rightMoves = new BitBoard(0,0).setBit(knightIndex+10).setBit(knightIndex-6);
		let bottomMoves = new BitBoard(0,0).setBit(knightIndex-17).setBit(knightIndex-15);

		return topMoves.or(leftMoves).or(bottomMoves).or(rightMoves).and(allyPieces.not());
	}

	generateRookMoves(allyPieces, enemyPieces, allyRooks, rookIndex){
		let allPieces = allyPieces.or(enemyPieces);
		let mask = rookOccupancyMask[rookIndex];
		let occupancy = allPieces.and(mask);
		let magicIndex = occupancy.mult(magicNumberRook[rookIndex]).shift_right(rookShift[rookIndex]);
		return this.rookMagicMoves[rookIndex][magicIndex];
	}
}
