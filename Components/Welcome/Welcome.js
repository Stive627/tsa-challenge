import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import Wave from '../Wave'

function Welcome() {
    const challengeRouter = useRouter()
  return (
    <div className=' w-screen'>
        <Wave/>
        <div className=' flex justify-center w-full mt-10 lg:mt-10'>
            <Image src={'https://tsa-challenges.s3.ap-south-1.amazonaws.com/ChatGPT%20Image%20May%2017,%202025,%2010_24_45%20PM.png'} width={100} height={100} alt='logo of TSA challenges'/>
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
