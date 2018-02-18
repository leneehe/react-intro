import React, { Component } from 'react';
import ListItem from './ListItem'
import './App.css';

class MyList extends Component {
  render() {
    return (
      <div>
      <h1> Things I should stop procrastinating: </h1>
      <ul>
        <ListItem doThis="Buy ice cream" />
      </ul>
      </div>
    )
  }
}

export default MyList;
