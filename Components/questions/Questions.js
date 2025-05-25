import React, { useEffect, useRef, useState } from 'react'
import { data } from './data'
import Question from './Question'
import './challenge.css'
import { useRouter } from 'next/navigation'
import { useData } from '@/context/DataContext'
import {successRate} from '../../functions/successRate'
import Theme from '../Themes/Theme'
import { useTheme } from '@/context/ThemeContext'

function Questions() {
  const {handleData} = useData()
  const [userAnswer, setUserAnswer] = useState([])
  const questions = [...data]
  const percentage = (1/questions.length)*100
  const [currQuestion, setCurrQuestion] = useState({index:0, percent:percentage})  
  const correctAnswers = questions.map(elt => elt.answer)
  const lastQuestion = currQuestion.index === questions.length -1
  const chRouter = useRouter()
  const {theme} = useTheme()

  function handleClick(value){
    if(lastQuestion){
      const finalUserValue = [...userAnswer, value]
      const score = successRate(finalUserValue, correctAnswers)
      handleData(score, finalUserValue)
      chRouter.push('/results')
    }
    else{
      setCurrQuestion({...currQuestion, index:currQuestion.index + 1, percent:currQuestion.percent + percentage})
      setUserAnswer([...userAnswer, value])
    }
  }
  const width = `${currQuestion.percent}%`
  const progressRef = useRef()
  useEffect(()=>{
    if(progressRef.current){
        let timeId = setTimeout(() => {
            progressRef.current.style.width = width
        }, 1);
            return ()=> clearTimeout(timeId)

    }
  },[width])
  return (
    <div style={{backgroundColor:theme === 'dark' ? 'rgba(13, 13, 13, 0.85)':'white'}} className='h-screen border'>
        <>
            <div className=' flex justify-center mt-8 lg:mt-10 mb-20'>
                <div style={{width:'600px'}}>
                      <div className=' flex justify-between mb-4'>
                        <p className=' text-center font-semibold' style={{fontSize:24, color:'rgba(181, 23, 158, 1)'}}>JAVASCRIPT QUIZ</p>
                        <Theme/>
                      </div>
                      <div className=' relative h-7 '>
                          <div style={{backgroundColor:'rgba(217, 217, 217, 1)'}} className=' absolute w-full h-full rounded-2xl z-0'></div>
                          <div ref={progressRef} style={{backgroundColor:'rgba(123, 44, 191, 1)'}} className=' absolute h-full rounded-2xl z-10 progress'></div>
                      </div>
                  </div>
              </div>
        </>
        {<Question key={data.indexOf(data[currQuestion.index])} question={data[currQuestion.index]} handleClick={handleClick} lastQuestion={lastQuestion}/>}
    </div>
  )
}

export default Questions
