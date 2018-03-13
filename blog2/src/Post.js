import React, { Component } from 'react';
import Comment from './Comment'

const Post = props => (
  <div className="App">
    <h1 className="App-title">My Blog</h1>
    <h2>{props.title}</h2>
    Written by: <b>{props.author}</b>
    <p className="App-intro">
      {props.body}
    </p>

    <h3>Comments:</h3>
    <p>
    <ul>
      {props.comments.map((comment, index) => (
        <Comment body={comment} key={index} />
      ))}
    </ul>
    </p>
  </div>
)

export default Post;
