import React from 'react'
import { data } from '../questions/data'
import QuestionCard from './QuestionCard'

function Detail({userans}) {
    const questions = [...data]
    const answers = questions.map(elt => elt.answer)
    const userAnswer = [...userans]

  return (
    <div>
        <p style={{color:'rgba(181, 23, 158, 1)', fontSize:34}} className='text-center font-bold mt-5'>JAVASCRIPT QUIZ</p>
        <div>
            {questions.map((elt, indx) => <QuestionCard answer={answers[indx]} userAnswer={userAnswer[indx]} question={elt} key={indx}/>)}
        </div>
    </div>
  )
}

export default Detail
