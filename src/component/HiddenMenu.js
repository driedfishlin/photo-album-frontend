// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type PropsType = { shouldOpen: boolean, setHiddenMenuState: boolean => void };

class HiddenMenu extends React.Component<PropsType> {
	render(): React.Node {
		return (
			<div
				className={`small_screen_hidden_menu ${
					this.props.shouldOpen ? '' : 'hidden_menu_opacity_0'
				}`}
			>
				<ul>
					<li>
						<Link
							title="home"
							to={`/`}
							onClick={() => this.props.setHiddenMenuState(false)}
						>
							home
						</Link>
					</li>
					<li>
						<Link
							title="profile"
							to={`/profile`}
							onClick={() => this.props.setHiddenMenuState(false)}
						>
							profile
						</Link>
					</li>
					<li>
						<a
							title="facebook"
							onClick={() => this.props.setHiddenMenuState(false)}
							target="_blank"
							rel="noopener noreferrer nofollow"
							href={`https://www.facebook.com/OBwithoboe/`}
						>
							facebook
						</a>
					</li>
					<li>
						<a
							title="instagram"
							onClick={() => this.props.setHiddenMenuState(false)}
							target="_blank"
							rel="noopener noreferrer nofollow"
							href={`https://www.instagram.com/obwithoboe/`}
						>
							instagram
						</a>
					</li>
					<li>
						<a
							title="medium"
							onClick={() => this.props.setHiddenMenuState(false)}
							target="_blank"
							rel="noopener noreferrer nofollow"
							href={`https://driedfishlin.medium.com/`}
						>
							medium
						</a>
					</li>
					<li>
						<a
							title="github"
							onClick={() => this.props.setHiddenMenuState(false)}
							target="_blank"
							rel="noopener noreferrer nofollow"
							href={`https://github.com/driedfishlin`}
						>
							github
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default HiddenMenu;
