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
	// componentDidMount() {
	// 	console.log(this.props.location.pathname);
	// 	//TODO> 優化生命週期
	// 	// 或許不需要存這筆資料？
	// 	this.props.setPathState(this.props.location.pathname);
	// }
	render(): React.Node {
		return (
			<div className={`web_wrap`}>
				<div className={`layout_warp`}>
					<CircleBackground />
					<Header path={this.props.location.pathname} />

					<div className={`layout_main`}>
						<div className={`left_side_area`}>
							<ExternalLinkSide />
						</div>
						<div>
							<Navigation />
							<Switch>
								<Route path="/" exact>
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
