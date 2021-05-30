// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	withRouter,
} from 'react-router-dom';

import { createChangePathAction } from './store/store';

import Header from './component/Header';
import Navigation from './component/Navigation';
import ExternalLinkSide from './component/ExternalLinkSide';
import PhotoListArea from './page/home/PhotoListArea';
import CircleBackground from './component/CircleBackground';
import Profile from './page/profile/Profile';
import PhotoPage from './page/photo/PhotoPage';

const mapDispatchToProps = dispatch => ({
	setPathState: path => dispatch(createChangePathAction(path)),
});

type PropsType = {
	setPathState: Function,
	location: {
		pathname: string,
		search: string,
		hash: string,
		state?: any,
		key?: string,
	},
};

class Template extends React.Component<PropsType> {
	render(): React.Node {
		// get PATHNAME & determine SCROLLBAR is visible
		const path: string = this.props.location.pathname;
		const photoPageIsOpen: boolean = path.split('/')[1] === 'photo';
		const body: ?HTMLElement = document.body;
		const scrollbarWidth: number = body?.clientWidth
			? window.innerWidth - body.clientWidth
			: 0;
		if (body?.style)
			body.style.overflowY = photoPageIsOpen ? 'hidden' : 'scroll';

		return (
			<div
				className={`web_wrap`}
				style={{ paddingRight: photoPageIsOpen ? '15px' : '0px' }}
			>
				<div className={`layout_warp`}>
					<CircleBackground />
					<Header path={path} />
					<div className={`layout_main`}>
						<div className={`left_side_area`}>
							<ExternalLinkSide />
						</div>
						<div>
							<Navigation />
							<Switch>
								<Route path="/profile" exact>
									<Profile />
								</Route>
								<Route path="/">
									<PhotoListArea />
								</Route>
								<Redirect to="/" />
							</Switch>
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

const wrappedWithRouterComponent = withRouter(Template);
const wrapWithConnect = connect(null, mapDispatchToProps);
const connectedComponent: React.AbstractComponent<{}> = wrapWithConnect(
	wrappedWithRouterComponent
);

export default connectedComponent;
