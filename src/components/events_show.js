import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

<<<<<<< HEAD
  componentDidMount() {
    const { id } = this.props.match.params;
    if(id) this.props.getEvent(id);
  }

=======
>>>>>>> 85360722ddb035fd8f70f1b2be3aff2037e9c9ca
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field;
    
    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    );
  }

  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push('/');
  }

  async onSubmit(values) {
<<<<<<< HEAD
    await this.props.putEvent(values);
=======
    // await this.props.postEvent(values);
>>>>>>> 85360722ddb035fd8f70f1b2be3aff2037e9c9ca
    this.props.history.push('/');
  }

  render(){
<<<<<<< HEAD
    const { handleSubmit, pristine, submitting, invalid } = this.props;
=======
    const { handleSubmit, pristine, submitting } = this.props;
>>>>>>> 85360722ddb035fd8f70f1b2be3aff2037e9c9ca

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
<<<<<<< HEAD
          <input type="submit" value="Submit" disabled={ pristine || submitting || invalid } />
=======
          <input type="submit" value="Submit" disabled={pristine || submitting} />
>>>>>>> 85360722ddb035fd8f70f1b2be3aff2037e9c9ca
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if(!values.title) errors.title = "Enter a title, please.";
  if(!values.body) errors.body = "Enter a body, please.";

  return errors;
}

<<<<<<< HEAD
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
}

const mapDipatchToProps = ({ deleteEvent, getEvent, putEvent })

export default connect(mapStateToProps, mapDipatchToProps)(
  reduxForm({ validate, form:'eventShowForm', enableReinitialize: true })(EventsShow)
=======
const mapDipatchToProps = ({ deleteEvent })

export default connect(null, mapDipatchToProps)(
  reduxForm({ validate, form:'eventShowForm' })(EventsShow)
>>>>>>> 85360722ddb035fd8f70f1b2be3aff2037e9c9ca
);
