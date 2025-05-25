import React from 'react'
import { data } from '../questions/data'
import QuestionCard from './QuestionCard'
import Wave from '../Wave'
import { ArrowBackIos } from '@mui/icons-material'
import { useTheme } from '@/context/ThemeContext'

function Detail({userans, goBack}) {
    const questions = [...data]
    const answers = questions.map(elt => elt.answer)
    const userAnswer = [...userans]
    const {theme} = useTheme()

  return (
    <div style={{backgroundColor:theme === 'dark' ? 'rgba(13, 13, 13, 0.85)':'white'}} className='pt-10 lg:h-screen'>
        <div className=' flex justify-center'>
          <div className=' w-11/12 lg:w-1/3 flex items-center justify-between '>
            <button onClick={goBack}> <ArrowBackIos sx={{fontSize:30, color:theme === 'dark' ? 'white':'darkgray'}}/> </button>
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
