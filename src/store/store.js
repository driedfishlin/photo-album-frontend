// @flow
import { createStore, combineReducers } from 'redux';
import type { Store, Action } from 'redux';

const CHANGE_PATH = 'CHANGE_PATH';
type ActionsType = { type: 'CHANGE_PATH', path: string };
export const createChangePathAction = (pathname: string): ActionsType => ({
	type: CHANGE_PATH,
	path: pathname,
});

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

type StateTypes = $Exact<{ webState: WebStateType }>;
const reducers: (
	StateTypes | void,
	ActionsType
) => StateTypes = combineReducers({
	webState: webStateReducer,
});

const store: Store<StateTypes, ActionsType> = createStore(reducers);
export default store;
