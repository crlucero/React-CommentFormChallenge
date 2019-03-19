import React, { Component } from 'react';
import firebase from '../firebase';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      comments: []
    };
    // bind context to methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // This handles input fields changes which update the state
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // This will handle the form submission
  handleSubmit(event) {
    event.preventDefault();
    // tells firebase where to store items
    const commentsRef = firebase.database().ref('comments');
    // grabs info from input
    const comment = {
      name: this.state.name,
      message: this.state.message
    };
    commentsRef.push(comment);
    this.setState({
      name: '',
      message: ''
    });
  }

  componentDidMount() {
    const commentsRef = firebase.database().ref('comments');
    commentsRef.on('value', snapshot => {
      let comments = snapshot.val();
      // initiate new array and populate it with results from input values
      let newState = [];
      for (let comment in comments) {
        newState.push({
          name: comments[comment].name,
          message: comments[comment].message
        });
      }
      this.setState({
        comments: newState
      });
    });
  }

  // Return user input if input does not equal an empty field on submission
  // isFormValid() {
  //   return this.state.comment.name !== '' && this.state.comment.message !== '';
  // }

  // componentWillMount() {
  //   this.fetchComments();
  // }

  // fetchComments() {
  //   commentsRef.on('value', message => {
  //     const comments = message.val();
  //     this.setState({
  //       comments
  //     });
  //   });
  // }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              value={this.state.name}
              className="form-control"
              placeholder="Your Name"
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleChange}
              value={this.state.message}
              className="form-control"
              placeholder="Your Comment"
              name="message"
              rows="5"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Post Comment</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
