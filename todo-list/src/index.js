import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

var toDos = ["Buy ice cream", "Eat ice cream", "Go to gym"]

ReactDOM.render(<MyList theList={toDos} />, document.getElementById('root'));
