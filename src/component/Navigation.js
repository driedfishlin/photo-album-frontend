// @flow
import * as React from 'react';

class Navigation extends React.Component<{}> {
	render(): React.Node {
		return (
			<div className={`navigation`}>
				<a>HOME</a>
				<a>PROFILE</a>
			</div>
		);
	}
}

export default Navigation;
