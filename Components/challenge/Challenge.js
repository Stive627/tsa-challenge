import React, { useEffect, useRef, useState } from 'react'
import { data } from './data'
import Question from './Question'
import './challenge.css'

function Challenge() {
  const [userAnswer, setUserAnswer] = useState([])
  const questions = [...data]
  const percentage = (1/questions.length)*100
  const [currQuestion, setCurrQuestion] = useState({index:0, percent:percentage})  
  const correctAnswers = questions.map(elt => elt.answer)
  function moveNext(){
    setCurrQuestion({...currQuestion, index:currQuestion.index + 1, percent:currQuestion.percent + percentage})
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
    <>
        <>
            <div className=' flex justify-center mt-8 lg:mt-10'>
                <div style={{width:'600px'}} className=' relative h-7 '>
                    <div style={{backgroundColor:'rgba(217, 217, 217, 1)'}} className=' absolute w-full h-full rounded-2xl z-0'></div>
                    <div ref={progressRef} style={{backgroundColor:'rgba(123, 44, 191, 1)'}} className=' absolute h-full rounded-2xl z-10 progress'></div>
                </div>
            </div>
            <p className=' mt-20 text-center font-semibold mb-12' style={{fontSize:24, color:'rgba(181, 23, 158, 1)'}}>JAVASCRIPT QUIZ</p>
        </>
        {<Question key={data.indexOf(data[currQuestion.index])} question={data[currQuestion.index]} moveNext={moveNext}/>}
    </>
  )
}

export default Challenge
