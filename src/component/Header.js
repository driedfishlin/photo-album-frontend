// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import TitleComponent from './TitleComponent';
import HiddenMenu from './HiddenMenu';

const switchTextByPath = (tag: string, path: string) => {
	switch (path) {
		case '/profile':
			if (tag === 'h2') return 'LIN';
			if (tag === 'h3') return 'PROFILE';
			if (tag === 'h4')
				return '留下影像是為了記得，然後努力成就更好的自己';
		case '/':
			if (tag === 'h2') return 'FILMING';
			if (tag === 'h3') return 'AND KEEP GOING';
			if (tag === 'h4') return '細數那些在自己人生路途上留下的影像';
		default:
			return '';
	}
};

type PropsType = {
	path: string,
	setHiddenMenuState: boolean => void,
	isHiddenMenuShow: boolean,
};

class Header extends React.Component<PropsType> {
	render(): React.Node {
		return (
			<header>
				<button
					onClick={() =>
						this.props.setHiddenMenuState(
							this.props.isHiddenMenuShow ? false : true
						)
					}
					className={`small_screen_hamburger_btn ${
						this.props.isHiddenMenuShow
							? 'transform_to_close_btn'
							: ''
					}`}
				>
					<div />
					<div />
					<div />
				</button>
				<HiddenMenu
					shouldOpen={this.props.isHiddenMenuShow}
					setHiddenMenuState={this.props.setHiddenMenuState}
				/>

				<TitleComponent
					h2={switchTextByPath('h2', this.props.path)}
					h3={switchTextByPath('h3', this.props.path)}
					h4={switchTextByPath('h4', this.props.path)}
				/>
				<Link
					to={`/`}
					className={`h1_link`}
					onClick={() =>
						window.scrollTo({ top: 0, behavior: 'smooth' })
					}
				>
					<h1>THE&nbsp;&nbsp;FRAME&nbsp;&nbsp;STATE</h1>
				</Link>
			</header>
		);
	}
}

export default Header;
