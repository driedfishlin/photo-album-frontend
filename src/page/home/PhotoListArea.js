// @flow

// >> 首頁，展示多張照片縮圖，滾動到底層會觸發 ajax，每次載入照片的數量依照螢幕寬度而不同
import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import { getPhotoList } from '../../utility/ajax';
import { firstRequest } from '../../utility/photoRequestQuantity';
import errorHandle from '../../utility/errorHandle';

import PhotoListItem from './component/PhotoListItem';
import PhotoPage from '../photo/PhotoPage';
import ErrorMessage from '../../component/ErrorMessage';
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
	responseError: boolean,
};

class PhotoListArea extends React.Component<PropsType, StateType> {
	state: StateType = {
		requestOrder: 0,
		photoList: [],
		finishFirstResponse: false,
		responseError: false,
	};
	componentDidMount() {
		// send ajax request
		getPhotoList(
			this.state.requestOrder,
			firstRequest(), // get number of photos required
			updatePhotoList.bind(this),
			errorHandle.bind(this)
		);
	}

	render(): React.Node {
		return (
			<main className={`home_photos_area`}>
				<Route path="/photo/:photo_id" exact>
					<PhotoPage />
				</Route>
				<div
					className={
						this.state.responseError
							? 'width-full-important'
							: 'home_page_photos_container'
					}>
					{this.state.responseError ? (
						<ErrorMessage
							message={`伺服器錯誤 - 無法取得資料`}
							style={{ height: '50vh' }}
						/>
					) : !this.state.finishFirstResponse ? (
						// response 未回傳前，提供佔位用途的 div
						Array.from(
							{ length: firstRequest() },
							() => null
						).map((_, index) => <PhotoListItem key={index} />)
					) : (
						this.state.photoList.map(item => {
							return (
								<PhotoListItem
									key={item.originalPhotoData}
									src={item.compressPhoto}
									id={item.originalPhotoData}
								/>
							);
						})
					)}
					{this.state.responseError ||
						(this.state.finishFirstResponse ? (
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
						))}
				</div>
			</main>
		);
	}
}

export default PhotoListArea;
