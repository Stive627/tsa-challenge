import { useTheme } from '@/context/ThemeContext'
import { DarkMode, KeyboardArrowDownRounded, KeyboardArrowUpRounded, LightMode, SettingsSuggest } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

function Theme() {
    const [modal, setModal] = useState(false)
    const [curr, setCurr] = useState('')
    const [x, setX] = useState(0)
    const [system, setSystem] = useState(false)
    const {handleTheme, theme} = useTheme()
    console.log(theme)
    function getMode(){
        const hour = new Intl.DateTimeFormat('en-US', {hour:'2-digit'}).format(new Date())
        if(hour.endsWith('PM') && +hour.split(' ')[0] >=6){
        setCurr('Auto')
        setX(39)
        handleTheme('dark')
        return;
        }
        else{
            handleTheme('light')
            setX(0)
            return;
        }

    }

    function handleClick(value){
        if(value === 'Light'){
            setX(0)
            setModal(false)
            setCurr(value)
            handleTheme('light')
        }
        else{
            setX(39)
            setModal(false)
            setCurr(value)
            handleTheme('dark')
        }
    }

    useEffect(()=>{
        getMode()
    },[system])
  return (
    <>
        <div className=' relative bg-white rounded-xl'>
            <div onClick={()=> setModal(prev => !prev)} className={`${modal ? ' rounded-t-xl':'rounded-xl'} border border-gray-200 flex flex-row gap-4  py-1 px-1 relative`}>
                <button><LightMode sx={{color:'rgba(254, 221, 38, 1)'}}/></button>
                <div className='flex flex-row gap-1'>
                    <button><DarkMode/></button>
                    <button>{modal ? <KeyboardArrowUpRounded sx={{fontSize:19}}/>:<KeyboardArrowDownRounded sx={{fontSize:19}}/>}</button>
                </div>
                <div style={{backgroundColor:'rgba(123, 44, 191, 0.28)', transition:`1s`, transform:`translate(${x}px)`}} className=' absolute w-6 h-6  rounded-full'></div>
            </div>
            {modal && 
                <div className='absolute w-full flex flex-col bg-white pt-1 z-40 gap-1.5 border border-gray-200 rounded-b-lg'>
                    <button style={{backgroundColor: curr === 'Light'? 'rgba(123, 44, 191, 0.28)':'white'}} onClick={()=> handleClick('Light')}><div className='flex flex-row gap-2 items-center py-1 px-1'><p><LightMode/></p><p>Light</p></div></button>
                    <button style={{backgroundColor: curr === 'Dark'? 'rgba(123, 44, 191, 0.28)':'white'}} onClick={()=> handleClick('Dark')}><div className='flex flex-row gap-2 items-center py-1 px-1'><p><DarkMode/></p><p>Dark</p></div></button>
                    <button className=' rounded-b-lg' onClick={()=> {setSystem(prev => !prev); setModal(false)}} style={{backgroundColor: curr === 'Auto'? 'rgba(123, 44, 191, 0.28)':'white'}} ><div className='flex flex-row gap-2 items-center py-1 px-1'><p><SettingsSuggest/></p><p>System</p></div></button>
                </div>}
        </div>
        {modal && <div onClick={()=> setModal(prev => !prev)} style={{backgroundColor:'rgba(217, 217, 217, 0.2)'}} className=' absolute top-0 border-0 left-0 right-0 w-screen h-screen z-10 bg-black'></div>}
    </>
  )
}

export default Theme
