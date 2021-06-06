// @flow
import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import { getPhotoList } from '../../utility/ajax';
import { firstRequest } from '../../utility/photoRequestQuantity';

import PhotoListItem from './component/PhotoListItem';
import PhotoPage from '../photo/PhotoPage';
import Observer from './component/Observer';

const updatePhotoList = function(quantity, responsePhotos) {
	this.setState(prevState => {
		return {
			photoList: [...prevState.photoList, ...responsePhotos],
			requestOrder: prevState.requestOrder + quantity,
			finishFirstResponse: true,
		};
	});
};

type PropsType = {};
type StateType = {
	requestOrder: number,
	photoList: Array<{
		compressPhoto: string,
		originalPhotoData: string,
	}>,
	finishFirstResponse: boolean,
};

class PhotoListArea extends React.Component<PropsType, StateType> {
	state: StateType = {
		requestOrder: 0,
		photoList: [],
		finishFirstResponse: false,
	};
	componentDidMount() {
		getPhotoList(
			this.state.requestOrder,
			firstRequest(), // number of photos required
			updatePhotoList.bind(this)
		);
	}

	render(): React.Node {
		return (
			<main className={`home_photos_area`}>
				<Route path="/photo/:photo_id" exact>
					<PhotoPage />
				</Route>
				<div className={`home_page_photos_container`}>
					{!this.state.finishFirstResponse
						? // response 未回傳前的佔位 div
						  Array.from(
								{ length: firstRequest() },
								() => null
						  ).map((_, index) => <PhotoListItem key={index} />)
						: this.state.photoList.map(item => {
								return (
									<PhotoListItem
										key={item.originalPhotoData}
										src={item.compressPhoto}
										id={item.originalPhotoData}
									/>
								);
						  })}
					{this.state.finishFirstResponse ? (
						<Observer
							setPhotoListState={updatePhotoList.bind(this)}
							order={this.state.requestOrder}
						/>
					) : (
						<div
							className={`home_request_observer`}
							style={{ paddingTop: '5rem' }}>
							<div />
						</div>
					)}
				</div>
			</main>
		);
	}
}

export default PhotoListArea;
