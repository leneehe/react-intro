import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js'

class Author extends Component {
  render() {

    return(
      <div>
      Written by: {this.props.body}
      </div>
    );
  }
}

class Post extends Component {
  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]

    // Using .map
    let allAuthors = this.props.authors.map( (author) => (<Author body={author} />))

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
        </header>
        <p>{allAuthors}</p>
        <p>{this.props.body}</p>
        <h4><b>Comments:</b></h4>
        <p className="App-intro">
          {allComments}
        </p>
      </div>
    );
  }
}

export default Post;
