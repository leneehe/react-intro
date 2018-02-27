import React, { Component } from 'react';
import ToDoList from './ToDoList'
//import ListItem from './ListItem'
import './App.css';

class MyList extends Component {
  constructor (props) {
    super()
    this.state={
      toDoItemArray: props.theList,
      newItem: ""
    }
  }

  clearList (e) {
    console.log("Clearing List!")
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    console.log("Added Item")
    e.preventDefault()
    let todoItems = this.state.toDoItemArray
    todoItems.push(this.state.newItem);
    this.setState({
      newItem: ""
    })
    this.setState({
      toDoItemArray: todoItems
    })
  }

  render() {

    //let todoItems = this.state.toDoItemArray.map((item, index) => (<ListItem doThis={item} key={index} />))

    return (
      <div>
        <h1> Things I should stop procrastinating: </h1>
        <ToDoList toDoItemArray={this.state.toDoItemArray} />
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
        <form>
          <input type="text" placeholder="Type an item here" onChange={(e) => this.newItemChange(e)} value={this.state.newItem} />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    )
  }
}

export default MyList;
