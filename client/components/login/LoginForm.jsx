import React, {Component} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import {connect} from 'react-redux';
import {login} from '../../actions/login';
import PropTypes from 'prop-types';
import {addFlashMessages} from '../../actions/flashMessages';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({[e.target.name]: e.target.value});
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
			this.props.login(this.state)
					.then((res) => {
						this.context.router.history.push('/');
					})
					.catch(
						(error) => this.setState({errors: error.response.data.errors, isLoading: false})
					);
		}
  }

  render() {
    const {identifier, password, errors, isLoading} = this.state;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h1>Please Login</h1>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <TextFieldGroup
          error={errors.identifier}
          label="Username / E-mail"
          onChange={this.handleOnChange}
          value={identifier}
          field="identifier"
        />
        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.handleOnChange}
          value={password}
          field="password"
          type="password"
        />
        <div className="form-group">
          <button
            disabled={isLoading}
            className="btn btn-primary btn-lg">Login</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  addFlashMessages: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, {login, addFlashMessages})(LoginForm);
