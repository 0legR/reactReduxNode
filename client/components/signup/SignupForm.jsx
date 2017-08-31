import React, {Component} from 'react';
import timezone from '../../data/timezone';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
  handleOnSubmit(e) {
  	e.preventDefault();
		this.setState({errors: {}, isLoading: true});
		this.props.userSignupRequest(this.state)
				.then(() => {})
				.catch(
					(error) => this.setState({errors: error.response.data, isLoading: false})
				);
  }

  render() {
    const options = timezone.map((val, key) =>
     			<option key={val.text} value={val.text}>{val.value}</option>
    );
		const {errors} = this.state;

    return (
    			<form onSubmit={this.handleOnSubmit}>
            <h1>Please Register</h1>
            <div
							className={classnames("form-group", {"has-error": errors.username})}
						>
              <label className="control-label">Username</label>
              <input
              			value={this.state.username}
                    onChange={this.handleOnChange}
                    type="text"
                    name="username"
                    className="form-control" />
							{errors.username && <span className="help-block">{errors.username}</span>}
            </div>
						<div
							className={errors.email ? "form-group has-error" : "form-group"}
						>
              <label className="control-label">Email</label>
              <input
                    value={this.state.email}
                    onChange={this.handleOnChange}
                    type="email"
                    name="email"
                    className="form-control" />
							{errors.email && <span className="help-block">{errors.email}</span>}
            </div>
            <div
							className={errors.password ? "form-group has-error" : "form-group"}
						>
              <label className="control-label">Password</label>
              <input
                    value={this.state.password}
                    onChange={this.handleOnChange}
                    type="password"
                    name="password"
                    className="form-control" />
							{errors.password && <span className="help-block">{errors.password}</span>}
            </div>
            <div
							className={errors.passwordConfirmation ? "form-group has-error" : "form-group"}
						>
              <label className="control-label">Password Confirmation</label>
              <input
                    value={this.state.passwordConfirmation}
                    onChange={this.handleOnChange}
                    type="password"
                    name="passwordConfirmation"
                    className="form-control" />
							{errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
            </div>
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
	userSignupRequest: PropTypes.func.isRequired
}
