import React, { Component } from 'react';
import './App.css';
import CommentList from './components/CommentList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  render() {
    return (
      <div className="App container bg-light shadow">
        <header className="App-header">
          <h1 className="App-title">Comment Board</h1>
        </header>
        <div className="row">
          <div className="col-4 pt-3 border-right">
            {/* Comment Form will go here */}
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
