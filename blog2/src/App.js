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
      <Route exact path="/" component={Post}/>
      <Route path="/blog" component={Post}/>
      <Route path="/movie" component={Movie}/>
      <Route path="/food" component={Food} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export default App;
