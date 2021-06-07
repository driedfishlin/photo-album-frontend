//@flow
// >> 於無法取得 ajax 資料時作為顯示用
import * as React from 'react';

type PropsType = {
	message: string,
	className?: string,
	style?: Object,
};

class ErrorMessage extends React.Component<PropsType> {
	render(): React.Node {
		return (
			<div
				className={`error-container ${this.props.className || ''}`}
				style={this.props.style || null}>
				<p>{this.props.message}</p>
			</div>
		);
	}
}

export default ErrorMessage;
