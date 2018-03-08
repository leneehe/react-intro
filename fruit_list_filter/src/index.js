import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';

const fruitList = [
  'Acai',
  'Aceola',
  'Apple',
  'Apricots',
  'Avocado',
  'Banana',
  'Blackberry',
  'Blueberries',
  'Camu Camu berry',
  'Cherries',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Currents',
  'Dates',
  'Durian',
  'Fig',
  'Goji berries',
  'Gooseberry',
  'Grapefruit',
  'Grapes',
  'Jackfruit',
  'Kiwi',
  'Kumquat',
  'Lemon',
  'Lime',
  'Lucuma',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Melon',
  'Mulberry',
  'Nectarine',
  'Orange',
  'Papaya',
  'Passion Fruit',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Pomegranate',
  'Pomelo',
  'Prickly Pear',
  'Prunes',
  'Raspberries',
  'Strawberries',
  'Tangerine/Clementine',
  'Watermelon'
]

ReactDOM.render(<Container fruits={fruitList}/>, document.getElementById('root'));
registerServiceWorker();
