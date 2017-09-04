import React, {Component} from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest, isUserExists} from '../../actions/signupActions';
import PropTypes from 'prop-types';
import {addFlashMessages} from '../../actions/flashMessages';

class SignupPage extends Component {
	render() {
		const {userSignupRequest, addFlashMessages, isUserExists} = this.props;

		return (
			<div className="row">
				<div className="col-sm-4 col-sm-offset-4">
					<SignupForm
						userSignupRequest={userSignupRequest}
						addFlashMessages={addFlashMessages}
						isUserExists={isUserExists}
					/>
				</div>
			</div>
		)
	}
}

SignupPage.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	addFlashMessages: PropTypes.func.isRequired,
	isUserExists: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlashMessages, isUserExists})(SignupPage);
