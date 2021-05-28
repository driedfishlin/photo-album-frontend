// @flow
import * as React from 'react';

import Header from './component/Header';
import Navigation from './component/Navigation';
import ExternalLinkSide from './component/ExternalLinkSide';
import PhotoListArea from './page/PhotoListArea';
import CircleBackground from './component/CircleBackground';

class Template extends React.Component<{}> {
	render(): React.Node {
		return (
			<div className={`web_wrap`}>
				<div className={`layout_warp`}>
					<CircleBackground />
					<Header />
					<div className={`layout_main`}>
						<div className={`left_side_area`}>
							<ExternalLinkSide />
						</div>
						<div>
							<Navigation />

							<PhotoListArea />
						</div>
						<div className={`right_side_area`}>
							<p>
								By shooting,
								<br />I trying to capture the elapsed time.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Template;
