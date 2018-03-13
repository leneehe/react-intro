import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const post = {
  title: "Bitmaker is awesome",
  author: "Lena",
  body: "Check out this first blog!",
  comments: [
    "First!", "Great post", "Hire this author now!"
  ]
}

const movies = [
    "Shawshank Redemption", "Gone Girl", "The Shape of Water", "Call me by Your Name", "Blue is the Warmest Colour"
  ]
const foodie = ["French Cuisine", "Seafood", "Chocolate chip icecream", "Mango banana milkshake"]

ReactDOM.render(<App post={post} movies={movies} foods={foodie}/>, document.getElementById('root'));
registerServiceWorker();
