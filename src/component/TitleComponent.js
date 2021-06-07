// @flow
// >> 位於 header 的標題元件
import * as React from 'react';

type PropsType = {
	h2?: string,
	h3?: string,
	h4?: string,
};

class TitleComponent extends React.Component<PropsType> {
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
