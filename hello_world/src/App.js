// bring in React and Component from React
import React, {Component} from 'react';

// define our Hello Component
class Hello extends Component {
  //constructor - what should happen when the component is first created
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = { moodPoints: 1 }
  }
  increaseMood(e) {
      if (this.state.moodPoints < 10){
        this.setState({
          moodPoints: this.state.moodPoints + 1
        })
      } else {
        this.setState({
          moodPoints: 1
        })
      }

  }

  // what should the component render?
  render() {

    // make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}! </h1>
        <p>You are {this.props.age} years old.</p>
        <p>You love: {this.props.animals[0]}</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>
      </div>
    );
  }
}

export default Hello
