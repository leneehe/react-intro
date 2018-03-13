import React, { Component } from 'react';

const Movie = props => (
  <div className="App">
    <h1 className="App-title">My Favourite Movie</h1>
    <p className="App-intro">
      <ul>
        {props.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </p>
  </div>
)

export default Movie;
