import React, { Component } from 'react';
import wPawn from '../../../assets/white_pawn.png'
import wRook from '../../../assets/white_rook.png'
import wKnight from '../../../assets/white_knight.png'
import wBishop from '../../../assets/white_bishop.png'
import wQueen from '../../../assets/white_queen.png'
import wKing from '../../../assets/white_king.png'

import bPawn from '../../../assets/black_pawn.png';
import bRook from '../../../assets/black_rook.png';
import bKnight from '../../../assets/black_knight.png';
import bBishop from '../../../assets/black_bishop.png';
import bQueen from '../../../assets/black_queen.png';
import bKing from '../../../assets/black_king.png';

export default class Square extends Component {

	getPiece(piece){
		let src = null;
		switch(piece){
			case 0:
				src = wPawn;
				break;
			case 1:
				src = wRook;
				break;
			case 2: 
				src = wKnight;
				break;
			case 3:
				src = wBishop;
				break;
			case 4:
				src = wQueen;
				break;
			case 5:
				src = wKing;
				break;
			case 6: 
				src = bPawn;
				break;
			case 7: 
				src = bRook;
				break;
			case 8: 
				src = bKnight;
				break;
			case 9: 
				src = bBishop;
				break;
			case 10:
				src = bQueen;
				break;
			case 11:
				src = bKing;
				break;

			default:
				src = null;
		}

		return src;
	}

	render() {
		const { black } = this.props;
		const potentialColors = ['#CC9900', '#663300'];
		const indexColor = black ? 0 : 1;

		let content = this.props.piece !== -1 ? <img style={{width: "75px"}} role="presentation" src={this.getPiece(this.props.piece)} /> : null;
		return (<div onClick={()=>{console.log(this.props.index)}} style={
					{
						backgroundColor: potentialColors[indexColor],
						color: potentialColors[indexColor^1],
						width: '100%', 
						height: '100%',
						display: 'flex',
						cursor:'pointer',
						border: 'none',
						justifyContent: 'center'
					}
				}>
					{content}
				</div>)
	}
}
