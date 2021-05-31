// @flow
import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import PhotoListItem from './component/PhotoListItem';
import PhotoPage from '../photo/PhotoPage';

class PhotoListArea extends React.Component<{}> {
	render(): React.Node {
		return (
			<main className={`home_photos_area`}>
				<Route path="/photo/:photo_id" exact>
					<PhotoPage />
				</Route>
				<div className={`home_page_photos_container`}>
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
