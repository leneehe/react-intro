import React, { Component } from 'react';
import Post from './Post'
import Movie from './Movie'
import Food from './Food'
import About from './About'
import './App.css';

const App = props => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to My Home Page</h1>
    </header>
    <Post />
    <Movie />
    <Food />
    <About />
  </div>
)

export default App;
