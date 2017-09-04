import React from 'react';
import {Link} from 'react-router-dom';

export default () => <nav className="navbar navbar-default">
						<div className="continer-fluid">
							<div className="navbar-header">
								<Link className="navbar-brand" to="/">Main</Link>
							</div>

							<div className="collapse navbar-collapse">
								<ul className="nav navbar-nav navbar-right">
									<li><Link to="/signup">Sign up</Link></li>
									<li><Link to="/login">Login</Link></li>
								</ul>
							</div>
						</div>
					</nav>;
