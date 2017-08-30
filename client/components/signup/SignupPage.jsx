import React, {Component} from 'react';
import SignupForm from './SignupForm';

export default class SignupPage extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-sm-4 col-sm-offset-4">
					<SignupForm />
				</div>
			</div>
		)
	}
}