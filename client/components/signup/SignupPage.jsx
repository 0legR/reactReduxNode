import React, {Component} from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';
import PropTypes from 'prop-types';
import {addFlashMessages} from '../../actions/flashMessages';

class SignupPage extends Component {
	render() {
		const {userSignupRequest, addFlashMessages} = this.props;

		return (
			<div className="row">
				<div className="col-sm-4 col-sm-offset-4">
					<SignupForm
						userSignupRequest={userSignupRequest}
						addFlashMessages={addFlashMessages}
					/>
				</div>
			</div>
		)
	}
}

SignupPage.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	addFlashMessages: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlashMessages})(SignupPage);
