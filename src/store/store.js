// @flow
// >> Redux 相關設定
import { createStore, combineReducers } from 'redux';
import type { Store, Action } from 'redux';

const CHANGE_PATH = 'CHANGE_PATH';
const TOGGLE_HIDDEN_MENU = 'TOGGLE_HIDDEN_MENU';

type ActionsType =
	| { type: 'CHANGE_PATH', path: string }
	| { type: 'TOGGLE_HIDDEN_MENU', command: boolean };

export const createChangePathAction = (pathname: string): ActionsType => ({
	type: CHANGE_PATH,
	path: pathname,
});
export const createToggleHiddenMenu = (command: boolean): ActionsType => ({
	type: TOGGLE_HIDDEN_MENU,
	command,
});

//SECTION> Reduces

type WebStateType = $Exact<{ path: string }>;
const initWebState: WebStateType = { path: '/' };

const webStateReducer = (prevState: WebStateType = initWebState, action) => {
	const newState = JSON.parse(JSON.stringify(prevState));
	switch (action.type) {
		case 'CHANGE_PATH':
			newState.path = action.path;
			return newState;
		default:
			return prevState;
	}
};

export type UIStateType = $Exact<{ hiddenMenuShow: boolean }>;
const initUIState = { hiddenMenuShow: false };

const UIStateReduce = (prevState: UIStateType = initUIState, action) => {
	const newState = JSON.parse(JSON.stringify(prevState));
	switch (action.type) {
		case 'TOGGLE_HIDDEN_MENU':
			newState.hiddenMenuShow = action.command;
			return newState;
		default:
			return prevState;
	}
};

type StateTypes = $Exact<{ webState: WebStateType, UIState: UIStateType }>;
const reducers: (
	StateTypes | void,
	ActionsType
) => StateTypes = combineReducers({
	webState: webStateReducer,
	UIState: UIStateReduce,
});

const store: Store<StateTypes, ActionsType> = createStore(reducers);
export default store;
