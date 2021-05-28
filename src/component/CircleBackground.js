// @flow
import * as React from 'react';

class CircleBackground extends React.Component<{}> {
	render(): React.Node {
		return (
			<div className={`background_circle_container`}>
				<div className={`background_circle_solid`} />
				<div className={`background_circle_dashed`} />
			</div>
		);
	}
}
export default CircleBackground;
