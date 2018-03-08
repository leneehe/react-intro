import React, { Component } from 'react';
import FruitList from './FruitList.js'
import FruitFilter from './FruitFilter.js'
import './App.css';

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //initialize the fruit list to the full list passed in props
      fruitsToDisplay: props.fruits,
      fruitsNotMatch: [],
      //initialize the filter vlaue to an empty string
      filterValue: ''
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(event) {
    event.preventDefault()
    const filterValue = event.target.value
    this.setState((prevState, props) => {
      //remove fruits that don't contain the filter value
      const filteredFruitList = props.fruits.filter(fruit => fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))

      const fruitsFilteredOut = props.fruits.filter(fruit => !fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))

      //return new state with the filtered fruit list and the new value of the filter
      console.log(filteredFruitList)

      return {
        fruitsToDisplay: filteredFruitList,
        fruitsNotMatch: fruitsFilteredOut,
        filterValue
      }

    })
  }

  render() {
    return (
      <div>
        <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange}/>
        <b>Matching:</b>
        <FruitList fruits={this.state.fruitsToDisplay} />
        <b>Not Matching:</b>
        <FruitList fruits={this.state.fruitsNotMatch} />
      </div>
    );
  }
}

export default Container;
