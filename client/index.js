import React from 'react';
import {render} from 'react-dom';
import MRouter from './components/Router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(
		(state = {}) => state,
		applyMiddleware(thunk)
);

render(
	<Provider store={store}>
		<MRouter />
	</Provider>,
	document.getElementById('app')
);
