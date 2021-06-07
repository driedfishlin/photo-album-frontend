// @flow

// >> 位於首頁最底下的區塊，並帶有 loading 動畫
// >> 設定了 observer，觸發時會傳送 ajax 請求
import * as React from 'react';
import { getPhotoList } from '../../../utility/ajax';
import { notFirstRequest } from '../../../utility/photoRequestQuantity';
import errorHandle from '../../../utility/errorHandle';

import ErrorMessage from '../../../component/ErrorMessage';

//SECTION> FUNCTION

const switchOnObserver = function(noMoreData) {
	if (noMoreData) return this.setState({ noMoreData: true });
	if (this.observerRef.current?.nodeType === 1) {
		const setting = { rootMargin: '-40px' };
		const observer = new IntersectionObserver(
			triggerObserver.bind(this),
			setting
		);
		observer.observe(this.observerRef.current); // 已實作型別檢查
	}
};

const triggerObserver = function(entries, observer) {
	if (entries[0].isIntersecting && !!this.observerRef.current) {
		entries[0].target.classList.remove('hidden-child');
		// 解除 observer 避免執行非同步任務期間重複觸發
		observer.unobserve(this.observerRef.current); // 已實作型別檢查
		getPhotoList(
			this.props.order,
			notFirstRequest(), // number of photos required
			(quantity, responsePhotos, noMoreData) => {
				// 'updatePhotoList' method
				this.props.setPhotoListState(quantity, responsePhotos);
				switchOnObserver.bind(this)(noMoreData);
			},
			errorHandle.bind(this)
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
	responseError: boolean,
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
		responseError: false,
	};
	componentDidMount() {
		// send ajax
		switchOnObserver.bind(this)();
	}
	render(): React.Node {
		if (this.state.responseError)
			return (
				<ErrorMessage
					message={`無法取得資料 - 請重新整理頁面`}
					className={`home_request_observer`}
				/>
			);
		return (
			<div ref={this.observerRef} className={`home_request_observer`}>
				{this.state.noMoreData || <div className={`loading-icon`} />}
			</div>
		);
	}
}

export default Observer;
