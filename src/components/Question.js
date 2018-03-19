import React, { Component } from 'react';
import uuid from 'uuid'

class Question extends Component {

  constructor(props){
    super(props)
    this.id = uuid()
    const {question} = this.props
    let randomIndex = Math.floor((Math.random() * 3));
    let answers = question.incorrect_answers
    answers.splice(randomIndex, 0, question.correct_answer)
    this.answers = answers
  }

  state = {
    value: '',
    answered: false,
    correct: null
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      answered: true,
      correct: (this.state.value === this.props.question.correct_answer)
    }, () => this.props.submitAnswer(this.state.correct))

  }

  handleInputChange = (event) => {
    this.setState({value: event.target.value})
  }

  render() {
    let answersList = this.answers.map((a) => (
      <div>
        <input className="ui checkbox" onChange={this.handleInputChange} value={a} name={this.id} type="radio" />
        <label>   {a}</label>

      </div>
      )
    )
    return (
      <div className="ui hover fluid card">
        <div className="content">
          <div className="header">
            {this.props.question.question}
          </div>
        </div>
        <div className="content" style={{display: this.state.answered ? "none" : "block" }}>
          <form onSubmit={this.handleSubmit}>
            {answersList}
            <br></br>
            <button className="ui button">Answer!</button>
          </form>
        </div>
        <div style={{display: this.state.answered ? "block" : "none" }} className="content">
          <h2 className="marker-font">{this.state.correct ? "Correct!" : "Incorrect :("} </h2>
        </div>
      </div>
    );
  }
}

export default Question;
