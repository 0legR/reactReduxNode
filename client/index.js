import React from 'react';
import {render} from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import MRouter from './components/Router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import {setCurrentUser} from './actions/authActions';
import jwt from 'jsonwebtoken';

const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
);

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render(
	<Provider store={store}>
		<MRouter />
	</Provider>,
	document.getElementById('app')
);
