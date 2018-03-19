import React, { Component } from 'react';
import logo from '../logo.svg';

const Score = (props) => {

  const {correct, incorrect} = props

  return (
    <div className="ui fluid card">
      <div className="ui grid">
        <div className="two column row">
          <div className="column">
            <img className="App-logo" src={logo}></img>
          </div>
          <div className="content column">
            <div className="ui block center aligned header">
              <h1 className="marker-font">Score</h1>
            </div>
            <div className="content">
              <h3 className="marker-font">Correct: {correct} </h3>
              <h3 className="marker-font">Incorrect: {incorrect} </h3>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Score;
