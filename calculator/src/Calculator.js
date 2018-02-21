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
    var num1 = parseInt(this.refs.num1.value) || 0,
        num2 = parseInt(this.refs.num2.value) || 0;
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
          <input ref="num1" type="text" placeholder="1" onChange={(e) => this.addNumbers(e)} />
          <span>+</span>
          <input ref="num2" type="text" placeholder="2" onKeyUp={(e) => this.addNumbers(e)} />
          <span>=</span>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
