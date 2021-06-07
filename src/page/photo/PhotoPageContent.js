// @flow

// >> 展示單張照片的內容區塊元件
import * as React from 'react';

import ErrorMessage from '../../component/ErrorMessage';

type PropsType = {
	imgRef: { current: null | React.ElementRef<'div'> },
	textContentRef: { current: null | React.ElementRef<'div'> },
	photoData: {
		originalPhoto: string,
		title: string,
		filmingDate: string,
		description: string,
	},
	responseError: boolean,
};

class PhotoPageContent extends React.Component<PropsType> {
	render(): React.Node {
		return (
			<>
				<div className={`photo_page_photo`} ref={this.props.imgRef}>
					<img src={this.props.photoData.originalPhoto} />
					<div
						className={
							this.props.photoData.originalPhoto
								? 'opacity-0'
								: 'opacity-1'
						}>
						{this.props.responseError ? (
							<ErrorMessage
								message={`伺服器錯誤 - 無法取得檔案`}
							/>
						) : (
							<div
								className={`loading-icon ${
									this.props.photoData.originalPhoto
										? 'hidden'
										: ''
								}`}
							/>
						)}
					</div>
				</div>
				<div
					ref={this.props.textContentRef}
					className={`photo_page_text_area hide_photo_page_text_content`}>
					<h6>{this.props.photoData.title || ''}</h6>
					<p>{this.props.photoData.filmingDate || ''}</p>
					<p>{this.props.photoData.description || ''}</p>
				</div>
			</>
		);
	}
}

export default PhotoPageContent;
