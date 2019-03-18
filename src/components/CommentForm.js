import React, { Component } from 'react';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',

      comment: {
        name: '',
        message: ''
      }
    };

    // bind context to methods
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // This handles input fields changes which update the state
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  // This will handle the form submission
  onSubmit(event) {
    // prevent default form submission
    event.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: 'All fields are required to submit' });
      return;
    }
    // clears error if form is valid
    this.setState({ error: '' });

    // TODO: add comments to database with api call
  }

  // Return user input if input does not equal an empty field on submission
  isFormValid() {
    return this.state.comment.name !== '' && this.state.comment.message !== '';
  }

  // This populates an error alert if all fields do not take input
  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              value={this.state.comment.name}
              className="form-control"
              placeholder="Your Name"
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="Your Comment"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button className="btn btn-primary">Post Comment</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
