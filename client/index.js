import React from 'react';
import {render} from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import MRouter from './components/Router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';

const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
);

render(
	<Provider store={store}>
		<MRouter />
	</Provider>,
	document.getElementById('app')
);
