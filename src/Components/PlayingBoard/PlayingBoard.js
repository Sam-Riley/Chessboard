import React, { Component } from 'react';
import Board from '../../State/Board/Board.js'
import Square from '../Square/Square.js';

export default class PlayingBoard extends Component {

	constructor(){
		super()
		this.board = new Board();
	}

	renderSquare(index){
		const black = ((index % 8) + Math.floor(index/8)) % 2 === 0;

		return (
			<div key={index} style={{ width: (600 / 8), height: (600 / 8)}}>
				<Square piece={this.board.getPiece(index)} index={index} black={black}>
					{this.board.getPiece(index) >= 0 ? this.board.getPiece(index) : null}
				</Square>
			</div>
			);		
	}

	render() {
		let squares = [];
		for(let i = 0; i < 64; ++i)
			squares.push(this.renderSquare(i));

		return (
			<div style={{width: "100%", display: "flex", justifyContent:"center"}}>
				<div style={{width: "600px", display: "flex", flexWrap: "wrap", border:"1px solid black"}}>
					{squares}
				</div>
			</div>
		);
	}
}
