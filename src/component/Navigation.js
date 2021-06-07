// @flow
// >> 僅顯示於大尺寸設備上的導覽列
import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component<{}> {
	render(): React.Node {
		return (
			<div className={`navigation`}>
				<NavLink to={`/`} activeClassName={`navigation_active`} exact>
					HOME
				</NavLink>
				<NavLink
					to={`/profile`}
					activeClassName={`navigation_active`}
					exact>
					PROFILE
				</NavLink>
			</div>
		);
	}
}

export default Navigation;
