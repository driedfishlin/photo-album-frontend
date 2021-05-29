// @flow
import * as React from 'react';

import TitleComponent from '../../component/TitleComponent';

class PhotoPage extends React.Component<{}> {
	render(): React.Node {
		return (
			<article className={`photo_page_layer`}>
				<div className={`web_wrap`}>
					<div className={`layout_warp`}>
						<div className={`photo_page_header`}>
							<TitleComponent
								h2={'PHOTO'}
								h3={'TAKEN BY LIN'}
								h4={'２０１９－１２－０１'}
							/>
						</div>
					</div>
				</div>
			</article>
		);
	}
}

export default PhotoPage;
