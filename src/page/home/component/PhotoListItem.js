// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
	src?: string,
	id?: string,
};

class PhotoListItem extends React.Component<PropsType> {
	render(): React.Node {
		if (!this.props.src || !this.props.id)
			return (
				<div
					className={`home_photo_item`}
					style={{ background: 'black', display: 'inline-block' }}
				/>
			);
		return (
			<Link to={`/photo/${this.props.id}`}>
				<div className={`home_photo_item`}>
					<img src={this.props.src} />
				</div>
			</Link>
		);
	}
}

export default PhotoListItem;
