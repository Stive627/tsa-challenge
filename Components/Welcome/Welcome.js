import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Wave from '../Wave'

function Welcome() {
    const challengeRouter = useRouter()
    const [theme, setTheme] = useState('')
    useEffect(() => {
    const hour = new Intl.DateTimeFormat('en-US',{hour:'2-digit'}).format(new Date())
    if(hour.endsWith('PM') && +hour.split(' ')[0] >=6){
        setTheme('dark')
    }
    else{
        setTheme('light')
    }
    },[])
  return (
    <div style={{backgroundColor:theme === 'dark' ? 'rgba(13, 13, 13, 0.92':'white'}} className='w-screen h-screen'>
        <Wave/>
        <div className=' flex justify-center w-full pt-10 lg:pt-10'>
            <Image src={'https://tsa-challenges.s3.ap-south-1.amazonaws.com/ChatGPT_Image_May_17__2025__10_24_45_PM-removebg-preview.png'} width={100} height={100} alt='logo of TSA challenges'/>
        </div>
        <p className=' text-center' style={{color:'rgba(123, 44, 191, 1)', fontWeight:'bold', fontSize:29}}>Welcome to Javascript Quizzes</p>
        <div className=' flex justify-center mt-20'>
            <Image src={'https://tsa-challenges.s3.ap-south-1.amazonaws.com/undraw_questions_g2px.svg'} width={400} height={400} alt='logo of TSA challenges'/>
        </div>
        <div className=' flex justify-center mt-18'>
            <button onClick={()=> challengeRouter.push('/questions')} style={{backgroundColor:'rgba(199, 125, 255, 1)', fontSize:17, cursor:'pointer'}} className=' text-white px-5 py-2 rounded-lg'>Let&#39;s Begin</button>
        </div>

    </div>
  )
}

export default Welcome
