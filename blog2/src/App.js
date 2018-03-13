import React, { Component } from 'react';
import Post from './Post'
import Movie from './Movie'
import Food from './Food'
import About from './About'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

const Home = props => (
  <div className="App">
    <h1 className="App-title">My Blog Home</h1>
    <p className="App-intro">
      Welcome to the Home page of My Blog</p>
    <p>
      Click on the links above to nagivate!
    </p>
  </div>
)

const App = props => (
  <Router>
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">My Blog</Link>
          <Link to="/movie">Favourite Movies</Link>
          <Link to="/food">Favourite Food</Link>
          <Link to="/about">About Me</Link>
        </nav>
        <h1 className="App-title">Welcome to My Home Page</h1>
      </header>
      <Route exact path="/" component={Home}/>
      <Route path="/blog" component={
        () => (<Post title={props.post.title}
                    author={props.post.author}
                    body={props.post.body}
                    comments={props.post.comments}
        />
      )}/>

      <Route path="/movie" component={() => (
        <Movie movies={props.movies} />
      )}/>
      <Route path="/food" component={() => (
        <Food foods={props.foods}/>
      )} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export default App;
