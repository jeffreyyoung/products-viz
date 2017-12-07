import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataManager from './DataManager'

const ids = [1,2,3,4,5,6]
class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    new DataManager(data => {
      console.log('DATA', data);
      this.setState({data})
    });
  }
  
  render() {
    return (
      <div className='wrapper'>
        {this.state.data.map( (d,i) => (
          <div>
            <div key={i} className='product'>
              <span className='large-text'>{i+1}</span>
              <img src="http://lorempixel.com/100/100/sports" />
              <div className='small-text'>
                <div><b>{d['']}</b></div>
                {Object.keys(d).filter(k => k).map(k => (
                  <div><span>{k}</span>: <span>{d[k]}</span></div>
                ))}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
