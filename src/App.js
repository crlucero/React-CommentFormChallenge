import React, { Component } from 'react';
import './App.css';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import { commentsRef } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    commentsRef.push(comment);
  }

  render() {
    return (
      <div className="App container bg-light shadow">
        <header className="App-header">
          <h1 className="App-title">Comment Board</h1>
        </header>
        <div className="row">
          <div className="col-4 pt-3 border-right">
            <h6>
              <strong>What's on your mind? </strong>
            </h6>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className="col-8 pt-3 border-right">
            <CommentList comments={this.state.comments} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
