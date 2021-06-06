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
		//考慮之後將資料往外層存放，避免元件重渲染時遺失資料
		return {
			photoList: [...prevState.photoList, ...responsePhotos],
			requestOrder: prevState.requestOrder + quantity,
		};
	});
	if (this.containerRef.current)
		this.containerRef.current.classList.remove('width-full-important');
};

type PropsType = {};
type StateType = {
	requestOrder: number,
	photoList: Array<{
		compressPhoto: string,
		originalPhotoData: string,
	}>,
};

class PhotoListArea extends React.Component<PropsType, StateType> {
	containerRef: { current: null | React.ElementRef<'div'> };
	constructor(props: PropsType) {
		super(props);
		this.containerRef = React.createRef();
	}
	state: StateType = {
		requestOrder: 0,
		photoList: [],
	};
	componentDidMount() {
		// 需考慮避免重複執行
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
				<div
					ref={this.containerRef}
					className={`home_page_photos_container width-full-important`}>
					{this.state.photoList.map(item => {
						return (
							<PhotoListItem
								key={item.originalPhotoData}
								src={item.compressPhoto}
								id={item.originalPhotoData}
							/>
						);
					})}
					<Observer
						setPhotoListState={updatePhotoList.bind(this)}
						order={this.state.requestOrder}
					/>
				</div>
			</main>
		);
	}
}

export default PhotoListArea;
