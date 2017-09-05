import React, {Component} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createEvent} from '../../actions/eventActions';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    const {title, errors, isLoading} = this.state;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h1>Add some new event</h1>
        <TextFieldGroup
          name="title"
          label="Event Title"
          field="title"
          value={title}
          onChange={this.handleOnChange}
          error={errors.title}
        />
        <button className="btn btn-primary" type="submit" disabled={isLoading}>Create</button>
      </form>
    );
  }
};

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired
}

export default connect(null, {createEvent})(EventForm);
