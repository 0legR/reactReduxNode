import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addFlashMessages} from '../actions/flashMessages';

export default function (ComposedComponents) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessages({
          type: 'error',
          text: 'You need to login to access this page'
        });
        this.context.router.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.history.push('/');
      }
    }
    
    render() {
      return (
        <ComposedComponents {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessages: PropTypes.func.isRequired
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return connect(mapStateToProps, {addFlashMessages})(Authenticate);
};
