// @flow
// >> 改變傳進 this 的 class component 之 state，用於顯示錯誤訊息
export default function(): void {
	this.setState({
		responseError: true,
	});
}
