import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import QuestionContainer from './containers/QuestionContainer'
import Score from './components/Score'

class App extends Component {

  state = {
    correct: 0,
    incorrect: 0,
    percent: 0
  }

  updateScore = (correct) => {
    if (correct){
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }
  }
  render() {

    const link = {
      color: 'blue',
      width: '100px',
      margin: '0 6px 6px',
      padding: '10px',
      background: 'white'
    }
    return (
      <div className="ui page grid">
        <div className="one column row">
          <div style={{padding: '10px'}} className="column center aligned"> <h1 className="marker-font">React Trivia</h1> </div>
        </div>
        <div className="one column row">
          <div className="column center aligned">
            <div className="ui four item menu">
              <NavLink to='/sports' className="item marker-font" activeClassName="active item marker-font">Sports Trivia</NavLink>
              <NavLink to='/science' className="item marker-font" activeClassName="active item marker-font">Science and Nature</NavLink>
              <NavLink to='/celebrities' className="item marker-font" activeClassName="active item marker-font">Celebrities</NavLink>
              <NavLink to='/random' className="item marker-font" activeClassName="active item marker-font">Random</NavLink>
            </div>
          </div>
        </div>
        <div className="two column row">
          <div className="column">
            < Score correct={this.state.correct} incorrect={this.state.incorrect}/>
          </div>
          <div className="column">
            <Route exact path='/sports' render={() => < QuestionContainer updateScore={this.updateScore} category={'21'}/>} />
            <Route exact path='/science' render={() => < QuestionContainer updateScore={this.updateScore} category={'17'}/>} />
            <Route exact path='/celebrities' render={() => < QuestionContainer updateScore={this.updateScore} category={'26'}/>} />
            <Route exact path='/random' render={() => < QuestionContainer updateScore={this.updateScore} />} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
