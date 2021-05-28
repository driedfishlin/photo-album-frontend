// @flow
import { createStore, combineReducers } from 'redux';

// const SWITCH_NAV_BAR = 'SWITCH_NAV_BAR';
const CHANGE_PATH = 'CHANGE_PATH';

// export const createSwitchNavBarAction = (identify: string): {} => ({
// 	type: SWITCH_NAV_BAR,
// 	identify,
// });

export const createChangePathAction = (pathname: string): {} => ({
	type: CHANGE_PATH,
	path: pathname,
});

const initWebState: {} = {
	path: '',
};

const webStateReducer = (prevState = initWebState, action) => {
	const newState = JSON.parse(JSON.stringify(prevState));
	switch (action.type) {
		case 'CHANGE_PATH':
			newState.path = action.path;
			console.log(newState);
			return newState;
		default:
			return prevState;
	}
};

// const initUIState: {} = {
// 	nav: {
// 		state: 'home',
// 		show: true,
// 	},
// };

// const UIStateReducer = (prevState = initUIState, action) => {
// 	switch (action.type) {
// 		case 'SWITCH_NAV_BAR':
// 			return prevState;

// 		default:
// 			return prevState;
// 	}
// };

const reducers = combineReducers({
	// UIState: UIStateReducer,
	webState: webStateReducer,
});

const store: {} = createStore(reducers);
export default store;
