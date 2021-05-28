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

class Template extends React.Component<{}> {
	// constructor(props) {
	// 	super(props);
	// 	console.log(this.props);
	// }

	render(): React.Node {
		//TODO> 優化生命週期
		// console.log(this.props.location.pathname);
		this.props.setPathState(this.props.location.pathname);
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

// type connectedPropsType = {
// 	location: Object,
// };

//TODO> flow 型別檢查

const connectedPropsCreator = connect(null, mapDispatchToProps);
const connectedComponent: React.AbstractComponent<{}> = connectedPropsCreator(
	(withRouter(Template): React.AbstractComponent<{}>)
);

export default connectedComponent;
