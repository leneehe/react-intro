import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "Bitmaker is awesome",
  body: "Check out this body property!",
  comments: [
    "First!", "Great post", "Hire this author now!"
  ],
  authors: [
    "Jim McCartney", "Bobby Browne", "Mary Claire"
  ]
}

ReactDOM.render(<Post title={post.title} author={post.author} body={post.body} comments={post.comments} authors={post.authors} />, document.getElementById('root'));
registerServiceWorker();
