// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import type { Location as LocationType } from 'react-router-dom';
import { getPhotoData } from '../../utility/ajax';

import TitleComponent from '../../component/TitleComponent';

//SECTION> FUNCTION
const showPhotoFromResponse = function(callback, data) {
	const photoData = {
		originalPhoto: data.originalPhoto,
		title: data.title,
		filmingDate: data.filmingDate,
		description: data.description,
	};
	this.setState({
		photoData: {
			originalPhoto: 'data:image/jpeg;base64,' + data.originalPhoto,
			title: data.title,
			filmingDate: data.filmingDate,
			description: data.description,
		},
	});
	if (callback) window.setTimeout(callback, 100);
};

//SECTION> TYPE
type PropsType = {
	location: LocationType,
	match: Object,
	history: Object,
};

type StatesType = {
	photoData: {
		originalPhoto: string,
		title: string,
		filmingDate: string,
		description: string,
	},
};

//SECTION> COMPONENT
class PhotoPage extends React.Component<PropsType, StatesType> {
	pageRef: { current: null | React.ElementRef<'div'> };
	imgRef: { current: null | React.ElementRef<'div'> };
	textContentRef: { current: null | React.ElementRef<'div'> };
	imgExtended: boolean;
	photoExpand: (event: SyntheticEvent<HTMLDivElement>) => void;

	constructor(props) {
		super(props);
		this.pageRef = React.createRef();
		this.imgRef = React.createRef();
		this.textContentRef = React.createRef();
		this.imgExtended = false;
		this.state = {
			photoData: {
				originalPhoto: '',
				title: '',
				filmingDate: '',
				description: '',
			},
		};

		// use to extend the Image height
		this.photoExpand = () => {
			if (!this.imgRef?.current) return;
			this.imgRef.current.classList.add('extend_photo');
			if (!this.textContentRef?.current) return;
			this.textContentRef.current.classList.remove(
				'hide_photo_page_text_content'
			);
			this.imgExtended = true;
		};
	}

	//PART> METHOD
	componentDidMount() {
		getPhotoData(
			this.props.location.pathname,
			showPhotoFromResponse.bind(this, this.photoExpand)
		);
	}

	render(): React.Node {
		return (
			<div className={`photo_page_layer`} ref={this.pageRef}>
				<div className={`web_wrap`}>
					<div className={`photo_page_layout_warp`}>
						<div className={`photo_page_header`}>
							<TitleComponent
								h2={'PHOTO'}
								h3={'TAKEN BY LIN'}
								h4={this.state.photoData.filmingDate}
							/>
						</div>
						<div className={`photo_page_layout_main `}>
							<div className={`left_side_area`}></div>
							<div className={`photo_page_main`}>
								<Link
									to="/"
									className={`photo_page_close_btn_above_the_img`}>
									← CLOSE
								</Link>
								<div
									className={`photo_page_photo`}
									ref={this.imgRef}>
									<img
										src={this.state.photoData.originalPhoto}
									/>
									<div
										className={
											this.state.photoData.originalPhoto
												? 'opacity-0'
												: 'opacity-1'
										}>
										<div
											className={
												this.state.photoData
													.originalPhoto
													? 'hidden'
													: ''
											}
										/>
									</div>
								</div>
								<div
									ref={this.textContentRef}
									className={`photo_page_text_area hide_photo_page_text_content`}>
									<h6>{this.state.photoData.title || ''}</h6>
									<p>
										{this.state.photoData.filmingDate || ''}
									</p>
									<p>
										{this.state.photoData.description || ''}
									</p>
								</div>
								<div
									className={`photo_page_close_btn_below_the_img`}>
									<Link
										to="/"
										className={`photo_page_close_btn`}>
										← CLOSE
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const connectedComponent: React.ComponentType<{}> = withRouter(PhotoPage);
export default connectedComponent;
