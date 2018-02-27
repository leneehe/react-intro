import React, { Component } from 'react';
import './App.css';

// class ListItem extends Component {
//   render() {
//     return (
//       <li>{this.props.doThis}</li>
//     )
//   }
// }

//rewrite class component to a functional component
const ListItem = props => (
  <li>{props.doThis}</li>
)

export default ListItem;
