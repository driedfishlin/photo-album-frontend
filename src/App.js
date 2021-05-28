// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import store from './store/store';

import Template from './Template';

class App extends React.Component<{}> {
	render(): React.Node {
		return (
			<Provider store={store}>
				<BrowserRouter>
					{/* <Switch> */}
					<Template />
					{/* </Switch> */}
				</BrowserRouter>
			</Provider>
		);
	}
}
export default App;
