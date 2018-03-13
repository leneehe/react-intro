import React, { Component } from 'react';

const Food = props => (
  <div className="App">
    <h1 className="App-title">My Favourite Food</h1>
    <p className="App-intro">
      <ul>
        {props.foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </p>
  </div>
)

export default Food;
