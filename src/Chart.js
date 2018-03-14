import React, { Component } from 'react';

import Graph from './Graph';

import './index.css';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.arrayX = [44.5, 84.5, 124.5, 164.5, 204.5, 244.5, 284.5, 324.5, 364.5, 404.5, 444.5, 484.5, 524.5, 564.5, 604.5, 644.5, 684.5, 724.5, 764.5]
		this.arrayY = [5, 30, -5, -10, 15, -15, 20, 5, 8, -12, -20, 2, 3, -5, 8, -2, 22, -30, -22]
	}

	componentWillMount() {
		this.generatePolylineArray()
	}

	generatePolylineArray() {
		let polyline = '';
		this.arrayX.map((coordX, i) => {
			return polyline += `${coordX}, ${this.arrayY[i]} `;
		})
		this.polyline = polyline;
	}

	render() {
		return (
			<div className="chart-body">
				<Graph
					arrayX={this.arrayX}
					arrayY={this.arrayY}
					polyline={this.polyline}
				/>
			</div>
		)
	}
}

export default Chart;
