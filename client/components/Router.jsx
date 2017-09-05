import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Greetings from './Greetings';
import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import NewEventPage from './events/NewEventPage';
import requireAuth from '../utils/requireAuth';

const MRouter = () => <Router>
	<App>
		<Route exact path="/" component={Greetings} />
		<Route path="/signup" component={SignupPage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/new-event" component={requireAuth(NewEventPage)} />
	</App>
</Router>;

export default MRouter;
