import React, { Component } from 'react';
import Question from './Question'
import uuid from "uuid"

const QuestionList = (props) => {

  const questions = props.questions.map((q, i) => {
    return (
      < Question key={i} question={q} submitAnswer={props.submit} />
    )
  })

  return (
    <div className="ui cards centered">
      {questions}
    </div>
  );
}

export default QuestionList;
