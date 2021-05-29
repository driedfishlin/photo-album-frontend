import * as React from 'react';

class TitleComponent extends React.Component<{}> {
	render(): React.Node {
		return (
			<div className={`header_title_component`}>
				<h2>{this.props.h2}</h2>
				<h3>{this.props.h3}</h3>
				<h4>{this.props.h4}</h4>
			</div>
		);
	}
}
export default TitleComponent;
