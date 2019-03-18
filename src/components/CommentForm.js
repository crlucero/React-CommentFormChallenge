import React, { Component } from 'react';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',

      comment: {
        name: '',
        userMessage: ''
      }
    };

    // bind context to methods
    // handleChange
    //onSubmit
  }
  render() {
    return (
        <React.Fragment>
          <form method="post" onSubmit={}>
            <div className="form-group">
              <input type="text"
              className='form-control'
              placeholder='Your Name'
              name='name'
              value={this.state.comment.name}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input type="text"
              className='form-control'
              placeholder='Comments here'
              name='message'
              value={this.state.comment.userMessage}
              onChange={this.handleChange}
              rows="4"
              />
            </div>
          </form>
        </React.Fragment>
    );
  }
}
