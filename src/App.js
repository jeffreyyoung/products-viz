import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataManager from './DataManager'

import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';
import img6 from './images/6.jpeg';
import img7 from './images/7.jpeg';
import img8 from './images/8.jpeg';
import img9 from './images/9.jpeg';
import img10 from './images/10.jpeg';

const imgs = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
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
      this.setState({data: data.slice(1)})
    });
  }
  
  getImage(id) {
    if (id < imgs.length) {
      return imgs[id]
    } else {
      return 'http://lorempixel.com/100/100/sports'
    }
  }
  
  render() {
    return (
      <div className='wrapper'>
        {this.state.data.map( (d,i) => (
          <div>
            <div key={i} className='product'>
              <span className='large-text'>{i+1}</span>
              <img src={this.getImage(i)} />
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
