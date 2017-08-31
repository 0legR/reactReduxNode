import React, {Component} from 'react';
import timezone from '../../data/timezone';
import PropTypes from 'prop-types';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

export default class SignupForm extends Component {
	constructor(props) {
  		super(props);
  		this.state = {
      			username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
						errors: {},
						isLoading: false
      }
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnChange(e) {
  		this.setState({
  			[e.target.name]: e.target.value
  		});
  }
	isValid() {
		const {errors, isValid} = validateInput(this.state);

		if (!isValid) {
			this.setState({errors});
		}
		return isValid;
	}
  handleOnSubmit(e) {
  	e.preventDefault();
		if (this.isValid()) {
			this.setState({errors: {}, isLoading: true});
			this.props.userSignupRequest(this.state)
					.then(() => {
						this.props.addFlashMessages({
							type: 'success',
							text: 'You have signed up successfully! Welcome!'
						});
						this.context.router.history.push('/');
					})
					.catch(
						(error) => this.setState({errors: error.response.data, isLoading: false})
					);
		}
  }

  render() {
    const options = timezone.map((val, key) =>
     			<option key={val.text} value={val.text}>{val.value}</option>
    );
		const {errors} = this.state;

    return (
    			<form onSubmit={this.handleOnSubmit}>
            <h1>Please Register</h1>
            <TextFieldGroup
							error={errors.username}
							label="Username"
							onChange={this.handleOnChange}
							value={this.state.username}
							field="username"
						/>
						<TextFieldGroup
							error={errors.email}
							label="E-mail"
							onChange={this.handleOnChange}
							value={this.state.email}
							field="email"
							type="email"
						/>
						<TextFieldGroup
							error={errors.password}
							label="Password"
							onChange={this.handleOnChange}
							value={this.state.password}
							field="password"
							type="password"
						/>
						<TextFieldGroup
							error={errors.passwordConfirmation}
							label="Password Confirmation"
							onChange={this.handleOnChange}
							value={this.state.passwordConfirmation}
							field="passwordConfirmation"
							type="password"
						/>
            <div
							className={errors.timezone ? "form-group has-error" : "form-group"}
						>
              <label className="control-label">Timezone</label>
              <select
                    value={this.state.timezone}
                    onChange={this.handleOnChange}
                    name="timezone"
                    className="form-control">
                      <option value="" disabled>Chooze your Timezone</option>
                        {options}
              </select>
							{errors.timezone && <span className="help-block">{errors.timezone}</span>}
            </div>
            <div className="form-group">
              <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign up!</button>
            </div>
        </form>
    );
  }
}

SignupForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	addFlashMessages: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
	router: PropTypes.object.isRequired
}
