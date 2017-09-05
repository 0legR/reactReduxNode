import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/authActions';

class NavigationBar extends Component {
	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(e) {
		e.preventDefault();
		this.props.logout();
	}

	render() {
		const {isAuthenticated} = this.props.auth;
		const userLinks = (
			<ul className="nav navbar-nav navbar-right">
				<li><a href="#" onClick={this.handleLogout}>Logout</a></li>
			</ul>
		);
		const guestLinks = (
			<ul className="nav navbar-nav navbar-right">
				<li><Link to="/signup">Sign up</Link></li>
				<li><Link to="/login">Login</Link></li>
			</ul>
		);
		return (
			<nav className="navbar navbar-default">
				<div className="continer-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">Main</Link>
					</div>

					<div className="collapse navbar-collapse">
						{isAuthenticated ? userLinks : guestLinks}
					</div>
				</div>
			</nav>
		);
	}
};

NavigationBar.propTypes = {
	auth: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {auth: state.auth};
};

export default connect(mapStateToProps, {logout})(NavigationBar);
