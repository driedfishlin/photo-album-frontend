// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import './css/normalize.css';
import './sass/all.scss';

const root: Element | null = document.querySelector('#root');
ReactDOM.render(<App />, root || window.document.body);
