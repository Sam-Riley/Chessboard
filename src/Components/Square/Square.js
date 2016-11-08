import React, { Component } from 'react';

export default class Square extends Component {
	render() {
		const { black } = this.props;
		const potentialColors = ['#CC9900', '#663300'];
		const indexColor = black ? 0 : 1;

		return (<div onClick={()=>{console.log(this.props.index)}} style={
					{
						backgroundColor: potentialColors[indexColor],
						color: potentialColors[indexColor^1],
						width: '100%', 
						height: '100%',
						display: 'flex',
						cursor:'pointer',
						justifyContent: 'center'
					}
				}>
					{this.props.children}
				</div>)
	}
}
