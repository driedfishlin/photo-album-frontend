// @flow
// >> 存放外部連結 LOGO 之元件
import * as React from 'react';

class ExternalLinkSide extends React.Component<{}> {
	render(): React.Node {
		return (
			<ul>
				<li>
					<a
						href="https://www.facebook.com/OBwithoboe/"
						target="_blank"
						rel="noreferrer noopener">
						FACEBOOK
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/obwithoboe/"
						target="_blank"
						rel="noreferrer noopener">
						INSTAGRAM
					</a>
				</li>
				<li>
					<a
						href="https://driedfishlin.medium.com/"
						target="_blank"
						rel="noreferrer noopener">
						MEDIUM
					</a>
				</li>
				<li>
					<a
						href="https://github.com/driedfishlin"
						target="_blank"
						rel="noreferrer noopener">
						GITHUB
					</a>
				</li>
			</ul>
		);
	}
}

export default ExternalLinkSide;
