import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Welcome() {
    const challengeRouter = useRouter()
  return (
    <div className=' w-screen'>
        <div className=' block lg:hidden fixed top-0 w-screen z-10'>
            <svg style={{transform:`rotate(180deg)`}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#C77DFF" fillOpacity="1" d="M0,32L40,64C80,96,160,160,240,192C320,224,400,224,480,213.3C560,203,640,181,720,197.3C800,213,880,267,960,256C1040,245,1120,171,1200,154.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
        <div className=' block lg:hidden fixed top-3 sm:top-10 w-screen z-0'>
            <svg style={{transform:`rotate(180deg)`}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7B2CBF"  fillOpacity="1" d="M0,32L40,64C80,96,160,160,240,192C320,224,400,224,480,213.3C560,203,640,181,720,197.3C800,213,880,267,960,256C1040,245,1120,171,1200,154.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
        <div className=' flex justify-center w-full mt-10 lg:mt-40'>
            <Image src={'https://tsa-challenges.s3.ap-south-1.amazonaws.com/ChatGPT%20Image%20May%2017,%202025,%2010_24_45%20PM.png'} width={100} height={100} alt='logo of TSA challenges'/>
        </div>
        <p className=' text-center' style={{color:'rgba(123, 44, 191, 1)', fontWeight:'bold', fontSize:29}}>Welcome to Javascript Quizzes</p>
        <div className=' flex justify-center mt-20'>
            <Image src={'https://tsa-challenges.s3.ap-south-1.amazonaws.com/undraw_questions_g2px.svg'} width={400} height={400} alt='logo of TSA challenges'/>
        </div>
        <div className=' flex justify-center mt-18'>
            <button onClick={()=> challengeRouter.push('/challenge')} style={{backgroundColor:'rgba(199, 125, 255, 1)', fontSize:17, cursor:'pointer'}} className=' text-white px-5 py-2 rounded-lg'>Let&#39;s Begin</button>
        </div>
        <div className=' block lg:hidden fixed bottom-0 w-screen z-20'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7B2CBF" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,202.7C640,203,800,149,960,117.3C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
        <div className=' block lg:hidden fixed bottom-8 w-screen z-0 '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#C77DFF" fillOpacity="1" d="M0,96L60,128C120,160,240,224,360,229.3C480,235,600,181,720,165.3C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    </div>
  )
}

export default Welcome
