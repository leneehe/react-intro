import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
        </header>
        <p>By: {this.props.author}</p>
        <p>{this.props.body}</p>
        <h4><b>Comments:</b></h4>
        <p className="App-intro">
          {this.props.comments[0]}
        </p>
      </div>
    );
  }
}

export default Post;
