import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: '',
      weather: ''
   }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ zipcode: e.target.value })
  }

  handleSubmit(e) {
    let base = this;
    let zip = base.state.zipcode,
        weatherapi = `http://samples.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
    alert('Zipcode is submitted: ' + zip)
    console.log(weatherapi)
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + weatherapi).then((response) => {
      return response.json()
    }).then((json) => {
      console.log('got json', json)
      base.setState({
        weather: `${json.name}: currently ${json.weather[0].description} at ${json.main.temp} degrees. High of ${json.main.temp_max} degrees and low of ${json.main.temp_min} degrees.`
      })
    }).catch((ex) => {
      console.log('Oops something went wrong while retriving data!', ex)
    })

    e.preventDefault()
  }

  render () {
    return (
      <div className="App">
      <h1 className="App-title">About Me</h1>
      <p className="App-intro">
      This web page is made by Lena He as a lesson on ReactJS.
      </p>
      <h2>Weather Forecast</h2>
      <p>{this.state.weather}</p>
      <form onSubmit={this.handleSubmit}>
        <label>Enter Zip code for weather: </label>
        <input type="text" name="zipcode" placeholder="L5R2X7" value={this.state.zipcode} onChange={this.handleChange} />
        <input type="submit" value="Get my forecast"/>
      </form>
      </div>
    )
  }
}

export default About;
