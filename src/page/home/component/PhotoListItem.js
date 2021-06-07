// @flow

// >> 首頁每張縮圖的元件，並提供在 response 未回傳前的佔位元素
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
				<div className={`home_photo_item home_photo_item_placeholder`}>
					<div>
						<div />
					</div>
				</div>
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
