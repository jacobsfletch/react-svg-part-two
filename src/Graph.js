import React from 'react';

const Graph = (props) => {
	return (
		<svg x="0px" y="0px" viewBox="0 0 1000 2">
			<polyline points={props.polyline} />
			{props.arrayX.map((coordX, i) => {
				return (
					<circle
						key={i}
						cx={coordX}
						cy={props.arrayY[i]}
						r={4}
					/>
				)
			})}
		</svg>
	)
}

export default Graph;
