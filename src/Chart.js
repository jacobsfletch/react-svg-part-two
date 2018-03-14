import React, { Component } from 'react';

import Graph from './Graph';

import './index.css';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.arrayX = [44.5, 84.5, 124.5, 164.5, 204.5, 244.5, 284.5, 324.5, 364.5, 404.5, 444.5, 484.5, 524.5, 564.5, 604.5, 644.5, 684.5, 724.5, 764.5]
		this.currentIndex = 1;
		this.state = {
			menu: [
				{
					label: "One",
					active: false,
					array: [5, 30, -5, -10, 15, -15, 20, 5, 8, -12, -20, 2, 3, -5, 8, -2, 22, -30, -22]
				}, {
					label: "Two",
					active: true,
					array: [30, 25, 35, 15, 25, 17, 20, -5, 12, 7, -28, 2, -30, -20, -22, -2, -27, -30, -35]
				}, {
					label: "Three",
					active: false,
					array: [-12, -35, -28, -30, -7, -1, -22, 16, 2, -5, 4, -19, -2, 15, 10, 25, 30, 28, 35]
				}, {
					label: "Four",
					active: false,
					array: [5, 12, -2, 8, 3, -12, 20, 5, 8, -12, -20, -9, 5, 12, -1, -2, 22, -30, 5]
				}
			]
		}
	}

	componentWillMount() {
		this.generatePolylineArray()
	}

	generatePolylineArray() {
		let polyline = '';
		const currentArrayY = this.state.menu[this.currentIndex].array
		this.arrayX.map((coordX, i) => {
			return polyline += `${coordX}, ${currentArrayY[i]} `;
		})
		this.polyline = polyline;
	}

	handleClick(key) {
		this.currentIndex = key
		this.generatePolylineArray()

		const newState = [...this.state.menu]
		for(var i = 0; i < newState.length; i++) {
			if(newState[i].active) {
				this.lastArrayY = newState[i].array
				newState[i].active = false
			}
		}
		newState[key].active = true

		this.setState({newState})
	}

	render() {

		const color = this.currentIndex === 0 ? 'blue'
			: this.currentIndex === 1 ? 'orange'
			: this.currentIndex === 2 ? 'red'
			: this.currentIndex === 3 ? 'green'
			: ''

		return (
			<div className={`chart ${color}`}>
				<ul className="chart-header">
					{this.state.menu.map((item, i) => {
						const active = item.active ? 'menu-item active' : 'menu-item';
						return (
							<li key={i} className={active}>
								<button onClick={() => this.handleClick(i)}>
									{item.label}
								</button>
							</li>
						)
					})}
				</ul>
				<div className="chart-body">
					<Graph
						arrayX={this.arrayX}
						arrayY={this.state.menu[this.currentIndex].array}
						polyline={this.polyline}
					/>
				</div>
			</div>
		)
	}
}

export default Chart;
