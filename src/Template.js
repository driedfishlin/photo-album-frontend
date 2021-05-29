// @flow
import * as React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

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
		const path = this.props.location.pathname;
		return (
			<div className={`web_wrap`}>
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
								<Route path="/">
									<PhotoListArea />
								</Route>
								<Route path="/profile" exact>
									<Profile />
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
