// @flow
import * as React from 'react';
import { getPhotoList } from '../../../utility/ajax';
import { notFirstRequest } from '../../../utility/photoRequestQuantity';

//SECTION> FUNCTION

// 會觸發多次請求，需實作暫時關閉
const switchOnObserver = function(noMoreData) {
	if (noMoreData) return this.setState({ noMoreData: true });
	if (this.observerRef.current?.nodeType === 1) {
		const setting = { rootMargin: '-40px' };
		const observer = new IntersectionObserver(
			triggerObserver.bind(this),
			setting
		);
		observer.observe(this.observerRef.current);
	}
};

const triggerObserver = function(entries, observer) {
	if (entries[0].isIntersecting && !!this.observerRef.current) {
		entries[0].target.classList.remove('hidden-child');
		// 解除 observer 避免執行非同步任務期間重複觸發
		observer.unobserve(this.observerRef.current);
		getPhotoList(
			this.props.order,
			notFirstRequest(), // number of photos required
			(quantity, responsePhotos, noMoreData) => {
				this.props.setPhotoListState(quantity, responsePhotos);
				switchOnObserver.bind(this)(noMoreData);
			}
		);
	} else {
		entries[0].target.classList.add('hidden-child');
	}
};

//SECTION> TYPE

type PropsType = {
	setPhotoListState: (order: number, responsePhotos: Object) => void,
	order: number,
};

type StateType = {
	noMoreData: boolean,
};

//SECTION> COMPONENT

class Observer extends React.Component<PropsType, StateType> {
	observerRef: { current: null | React.ElementRef<'div'> };
	constructor(props: PropsType) {
		super(props);
		this.observerRef = React.createRef();
	}
	state: StateType = {
		noMoreData: false,
	};
	componentDidMount() {
		switchOnObserver.bind(this)();
	}
	render(): React.Node {
		return (
			<div ref={this.observerRef} className={`home_request_observer`}>
				{this.state.noMoreData || <div />}
			</div>
		);
	}
}

export default Observer;
