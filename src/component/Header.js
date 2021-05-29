// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

const switchTextByPath = (tag: string, path: string) => {
	switch (path) {
		case '/':
			if (tag === 'h2') return 'FILMING';
			if (tag === 'h3') return 'AND KEEP GOING';
			if (tag === 'h4') return '細數那些在自己人生路途上留下的影像';
		case '/profile':
			if (tag === 'h2') return 'LIN';
			if (tag === 'h3') return 'PROFILE';
			if (tag === 'h4') return '留下影像是為了記得，並且成就更好的自己';
		default:
			if (tag === 'h2') return 'FILMING';
			if (tag === 'h3') return 'AND KEEP GOING';
			if (tag === 'h4') return '細數那些在自己人生路途上留下的影像';
	}
};

type PropsType = { path: string };

class Header extends React.Component<PropsType> {
	render(): React.Node {
		console.log(this.props.path);
		return (
			<header>
				<h2>{switchTextByPath('h2', this.props.path)}</h2>
				<h3>{switchTextByPath('h3', this.props.path)}</h3>
				<h4>{switchTextByPath('h4', this.props.path)}</h4>
				<Link to={`/`}>
					<h1>THE&nbsp;&nbsp;FRAME&nbsp;&nbsp;STATE</h1>
				</Link>
			</header>
		);
	}
}

export default Header;
