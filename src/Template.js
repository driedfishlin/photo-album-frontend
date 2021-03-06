// @flow

// >> 所有網頁內容的入口模板，操作第一層路由
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
import { createToggleHiddenMenu } from './store/store';

import type { UIStateType } from './store/store';

import Header from './component/Header';
import Navigation from './component/Navigation';
import ExternalLinkSide from './component/ExternalLinkSide';
import PhotoListArea from './page/home/PhotoListArea';
import CircleBackground from './component/CircleBackground';
import Profile from './page/profile/Profile';
import PhotoPage from './page/photo/PhotoPage';

const mapStateFromProps = state => ({
	UIState: state.UIState,
});

const mapDispatchToProps = dispatch => ({
	setPathState: path => dispatch(createChangePathAction(path)),
	setHiddenMenuState: command => dispatch(createToggleHiddenMenu(command)),
});

type PropsType = {
	UIState: UIStateType,
	setPathState: Function,
	setHiddenMenuState: Function,
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
			body.style.overflow =
				photoPageIsOpen || this.props.UIState.hiddenMenuShow
					? 'hidden'
					: 'auto';

		return (
			<div
				className={`web_wrap`}
				// 在桌面版瀏覽器減去因為 overflow 隱藏滾動條而損失的寬度
				style={{
					paddingRight:
						photoPageIsOpen &&
						(document.documentElement?.clientWidth || 0) > 768
							? '15px'
							: '0px',
				}}>
				<div className={`layout_warp`}>
					<CircleBackground />
					<Header
						path={path}
						setHiddenMenuState={this.props.setHiddenMenuState}
						isHiddenMenuShow={this.props.UIState.hiddenMenuShow}
					/>
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
								By filming,
								<br />I am trying to capture the elapsed time.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const wrappedWithRouterComponent = withRouter(Template);
const wrapWithConnect = connect(mapStateFromProps, mapDispatchToProps);
const connectedComponent: React.AbstractComponent<{}> = wrapWithConnect(
	wrappedWithRouterComponent
);

export default connectedComponent;
