import React from 'react'
import { data } from '../questions/data'
import QuestionCard from './QuestionCard'
import Wave from '../Wave'
import { ArrowBackIos } from '@mui/icons-material'

function Detail({userans, goBack}) {
    const questions = [...data]
    const answers = questions.map(elt => elt.answer)
    const userAnswer = [...userans]

  return (
    <div className=' mt-10'>
        <div className=' flex justify-center'>
          <div className=' w-11/12 lg:w-1/3 flex items-center justify-between'>
            <button onClick={goBack}> <ArrowBackIos sx={{fontSize:30}}/> </button>
            <p style={{color:'rgba(181, 23, 158, 1)'}} className='text-center text-2xl font-bold'>JAVASCRIPT QUIZ</p>
            <p></p>
          </div>
        </div>
        <div>
            {questions.map((elt, indx) => <QuestionCard answer={answers[indx]} userAnswer={userAnswer[indx]} question={elt} key={indx}/>)}
        </div>
    </div>
  )
}

export default Detail
