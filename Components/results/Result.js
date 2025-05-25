import { useData } from '@/context/DataContext'
import React, { useEffect, useState } from 'react'
import Wave from '../Wave'
import Image from 'next/image'
import useScreen from '@/hooks/useScreen'
import { useRouter } from 'next/navigation'
import Detail from './Detail'
import { useTheme } from '@/context/ThemeContext'

function Result() {
  const {data} = useData()
  const large = useScreen()
  const [details, setDetails] = useState(false)
  const chRouter = useRouter()
  const number = data.score
  const [percentage, setPercentage] = useState(0)
  const {theme} = useTheme()
  function getMessage(){
    if(number === 0){
      return 'Better luck next time!'
    }
    if(number >0 &&  number < 50){
      return 'Not bad, better luck next time'
    }
    if(number <100){
      return 'Well done!'
    }
    return 'Bravo!, Perfect score'
  }
  useEffect(()=>{
    if(percentage <number){
      const timeId = setTimeout(() => setPercentage(percentage + 1), 50);
      return () => clearTimeout(timeId)
    }
  },[percentage])
  if(data.score===undefined) return <p className=' text-center'>Answer the questions first</p>
  if(details) return <Detail goBack={()=>setDetails(false)} userans={data.userAnswer}/>
  return (
    <>
      <Wave/>
      <div style={{backgroundColor:theme === 'dark' ? 'rgba(13, 13, 13, 0.85)':'white'}} className='w-full pt-15 h-screen'>
        <p style={{color:'rgba(181, 23, 158, 1)', fontSize:34}} className='text-center font-bold'>JAVASCRIPT QUIZ</p>
        <p style={{color:'rgba(123, 44, 191, 1)', fontSize:28}} className='text-center font-bold py-9'>Your Score</p>
        <div className=' flex justify-center text-white font-bold '><button style={{backgroundColor:'rgba(123, 44, 191, 1)', width:'100px'}} className='py-0.5 rounded-md'>{percentage} %</button></div>
        <div className=' flex justify-center mt-10'>
          <Image width={large?400:300} height={300} src={'https://tsa-challenges.s3.ap-south-1.amazonaws.com/undraw_workspace_s6wf.svg'} alt='the picture for results'/>
        </div>
        <p className=' text-center my-4' style={{color:'rgba(123, 44, 191, 1)'}}>{getMessage()}</p>
        <div className=' flex justify-center'>
            <div className=' flex justify-between text-white gap-3'>
              <button onClick={()=> setDetails(true)} style={{backgroundColor:'rgba(157, 78, 221, 1)', width:'150px'}} className=' py-1 rounded-md cursor-pointer font-semibold'>Show Details</button>
              <button onClick={() => chRouter.push('/questions')} style={{backgroundColor:'rgba(157, 78, 221, 1)', width:'150px'}} className=' py-1 rounded-md cursor-pointer font-semibold'>Retake</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Result
