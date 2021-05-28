// @flow
import * as React from 'react';

import PhotoListItem from './component/PhotoListItem';

class PhotoListArea extends React.Component<{}> {
	render(): React.Node {
		return (
			<main className={`home_photos_area`}>
				<div>
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
					<PhotoListItem />
				</div>
			</main>
		);
	}
}

export default PhotoListArea;
