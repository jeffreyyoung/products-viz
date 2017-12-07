import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const ids = [1,2,3,4,5,6]
class App extends Component {
  render() {
    return ids.map( (d,i) => (
      <div key={i} className='product'>
        <span>{i+1}</span>
        <img src="http://lorempixel.com/100/100/sports" />
      </div>
    ));
  }
}

export default App;
