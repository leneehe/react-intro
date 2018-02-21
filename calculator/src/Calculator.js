import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor (props) {
    super()
    this.state={
      sum: "Addition results go here!!"
    }
    this.addNumbers = this.addNumbers.bind(this)
  }

  addNumbers (e) {
    var num1 = parseInt(e.target.closest('div').querySelector('input#num1').value),
        num2 = parseInt(e.target.closest('div').querySelector('input#num2').value);
    var sum = num1 + num2
    
    this.setState({
      sum: sum
    })

  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input id="num1" type="text" placeholder="1" onChange={(e) => this.addNumbers(e)} />
          <span>+</span>
          <input id="num2" type="text" placeholder="2" onChange={(e) => this.addNumbers(e)} />
          <span>=</span>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
