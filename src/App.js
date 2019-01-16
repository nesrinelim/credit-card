import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logo1 from './smart_chip.jpg';
import logo2 from './master_logo.jpg';
import icon from './icon.png'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="title">CREDIT CARD</h1>
          <img src={logo1} className="App-logo" alt="logo"  width="15%" height="17%"/>
          <div className="global">
            <div className="s_global1">
                <label className="back">0000 0000 0000 0000</label>
            <div className="box">
            <div className="cardholder">
              <label>0000 <br/> CARDHOLDER</label>
            </div>
            <div className="info-card">
            <div className="icoo">
            <p className="size">valid <br/> THRU</p>
            </div>
              <div className="bloc">
                <label className="size">MONTH/YEAR <br/> </label>
                <p className="num"><strong>01/30</strong></p>
              </div>
            </div>
            </div>
           </div>
           
           <img src={logo2} className="App-logo2" alt="logo"  width="17%" height="50%" />
           
          </div>
         
        </header>
      </div>
    );
  }
}

export default App;
