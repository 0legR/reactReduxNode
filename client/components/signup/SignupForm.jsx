import React, {Component} from 'react';
import timezone from '../../data/timezone';
import PropTypes from 'prop-types';
// import axios from 'axios';

export default class SignupForm extends Component {
	constructor(props) {
  		super(props);
  		this.state = {
      			username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
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
		// axios.post('api/users/', {user: this.state});
		this.props.userSignupRequest(this.state);
  }

  render() {
    const options = timezone.map((val, key) =>
     			<option key={val.text} value={val.text}>{val.value}</option>
    );

    return (
    			<form onSubmit={this.handleOnSubmit}>
            <h1>Please Register</h1>
            <div className="form-group">
              <label className="control-label">Username</label>
              <input
              			value={this.state.username}
                    onChange={this.handleOnChange}
                    type="text"
                    name="username"
                    className="form-control" />
            </div>
            <div className="form-group">
              <label className="control-label">Email</label>
              <input
                    value={this.state.email}
                    onChange={this.handleOnChange}
                    type="email"
                    name="email"
                    className="form-control" />
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input
                    value={this.state.password}
                    onChange={this.handleOnChange}
                    type="password"
                    name="password"
                    className="form-control" />
            </div>
            <div className="form-group">
              <label className="control-label">Password Confirmation</label>
              <input
                    value={this.state.passwordConfirmation}
                    onChange={this.handleOnChange}
                    type="password"
                    name="passwordConfirmation"
                    className="form-control" />
            </div>
            <div className="form-group">
              <label className="control-label">Timezone</label>
              <select
                    value={this.state.timezone}
                    onChange={this.handleOnChange}
                    name="timezone"
                    className="form-control">
                      <option value="" disabled>Chooze your Timezone</option>
                        {options}
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Sign up!</button>
            </div>
        </form>
    );
  }
}

SignupForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
}
