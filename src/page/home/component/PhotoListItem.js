// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
class PhotoListItem extends React.Component<{}> {
	render(): React.Node {
		return (
			<Link to={`/photo/asd`}>
				<div className={`home_photo_item`}>
					<img src={`../../../../public/image/S__27025421.jpg`} />
				</div>
			</Link>
		);
	}
}

export default PhotoListItem;
