// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import TitleComponent from '../../component/TitleComponent';

class PhotoPage extends React.Component<{}> {
	pageRef: { current: null | React.ElementRef<'div'> };
	imgRef: { current: null | React.ElementRef<'div'> };
	textContentRef: { current: null | React.ElementRef<'div'> };
	imgExtended: boolean;
	onPageScroll: (event: SyntheticEvent<HTMLDivElement>) => void;

	constructor(props: {}) {
		super(props);
		this.pageRef = React.createRef();
		this.imgRef = React.createRef();
		this.textContentRef = React.createRef();
		this.imgExtended = false;

		// use to extend the Image height
		this.onPageScroll = () => {
			if (!this.imgRef?.current) return;
			this.imgRef.current.classList.add('extend_photo');
			if (!this.textContentRef?.current) return;
			this.textContentRef.current.classList.remove(
				'hide_photo_page_text_content'
			);
			this.imgExtended = true;
		};
	}

	render(): React.Node {
		return (
			<div
				onScroll={this.imgExtended ? null : this.onPageScroll}
				className={`photo_page_layer`}
				ref={this.pageRef}
			>
				<div className={`web_wrap`}>
					<div className={`layout_warp`}>
						<div className={`photo_page_header`}>
							<TitleComponent
								h2={'PHOTO'}
								h3={'TAKEN BY LIN'}
								h4={'２０１９－１２－０１'}
							/>
						</div>
						<div className={`layout_main`}>
							<div className={`left_side_area`}></div>
							<div className={`photo_page_main`}>
								<Link
									to="/"
									className={`photo_page_close_btn_above_the_img`}
								>
									← CLOSE
								</Link>
								<div
									className={`photo_page_photo`}
									ref={this.imgRef}
								>
									<img src="../../../public/image/S__27025421.jpg" />
								</div>
								<div
									ref={this.textContentRef}
									className={`photo_page_text_area hide_photo_page_text_content`}
								>
									<h6>閒暇時光</h6>
									<p>2020-04-03</p>
									<p>
										在家人都出門的午後，嘗試做了造型餅乾。
									</p>
								</div>
								<div
									className={`photo_page_close_btn_below_the_img`}
								>
									<Link
										to="/"
										className={`photo_page_close_btn`}
									>
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

export default PhotoPage;
