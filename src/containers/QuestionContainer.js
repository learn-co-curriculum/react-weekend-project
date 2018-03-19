import React, { Component } from 'react';
import QuestionList from '../components/QuestionList'

class QuestionContainer extends Component {
  state = {
    questions: []
  }

  componentDidMount(){
    let url = 'https://opentdb.com/api.php?amount=10'
    if (this.props.category){
      url += `&category=${this.props.category}`
      console.log(url)
    }

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({questions: json.results})
      })
  }

  handleSubmitAnswer = (correct) => {
    this.props.updateScore(correct)
  }

  render() {
    return (
      <div>
        <QuestionList submit={this.handleSubmitAnswer} questions={this.state.questions} />
      </div>
    );
  }
}

export default QuestionContainer;
