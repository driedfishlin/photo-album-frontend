// @flow
import * as React from 'react';
import { getPhotoList } from '../../../utility/ajax';
import { notFirstRequest } from '../../../utility/photoRequestQuantity';

type PropsType = {
	setPhotoListState: (order: number, responsePhotos: Object) => void,
	order: number,
};

const triggerObserver = function(entries, observer) {
	console.log(entries[0].target);
	console.log(entries[0].isIntersecting);
	console.log(this);
	if (entries[0].isIntersecting) {
		entries[0].target.classList.remove('hidden-child');
		getPhotoList(
			this.props.order,
			notFirstRequest(), // number of photos required
			this.props.setPhotoListState
		);
	} else {
		entries[0].target.classList.add('hidden-child');
	}
};

class Observer extends React.Component<PropsType> {
	observerRef: { current: null | React.ElementRef<'div'> };
	constructor(props: PropsType) {
		super(props);
		console.log(props);
		this.observerRef = React.createRef();
	}
	componentDidMount() {
		if (this.observerRef.current?.nodeType === 1) {
			const setting = { rootMargin: '-40px' };
			// const setting = { rootMargin: '0px' };
			const observer = new IntersectionObserver(
				triggerObserver.bind(this),
				setting
			);
			observer.observe(this.observerRef.current);
		}
	}
	render(): React.Node {
		console.log(this.props);
		return (
			<div ref={this.observerRef} className={`home_request_observer`}>
				<div />
			</div>
		);
	}
}

export default Observer;
