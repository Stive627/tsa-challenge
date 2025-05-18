import React, { useState } from 'react'

function Question({question, handleClick, lastQuestion}) {
  const [currSuggestion, setCurrSuggestion] = useState(undefined)
  function select(indx){
    if(indx === currSuggestion){
      setCurrSuggestion(undefined)
    }
    else{
      setCurrSuggestion(indx)
    }
  }

  const alphabet = ['A)', 'B)', 'C)', 'D)', 'E)', 'F)']
  return (
    <div  className='w-full flex justify-center mt-4'>
      <div className=' w-11/12 lg:w-1/4'>
        <p style={{backgroundColor:'rgba(157, 78, 221, 1)', fontSize:16}} className=' text-white p-2 rounded-md mb-5'>{question?.question}</p>
        <div className=' flex flex-col gap-3 my-4'>
          {question?.suggestions.map((elt, indx) => <button key={indx} onClick={()=>select(indx)} style={{borderColor:'rgba(157, 78, 221, 1)', color:indx === currSuggestion ? ' white':'rgba(157, 78, 221, 1)', backgroundColor:indx === currSuggestion?'rgba(157, 78, 221, 1)':'white'}} className=' py-1 border rounded-xl'><p>{alphabet[indx]} {elt}</p></button>)}
        </div>
        <button disabled={currSuggestion === undefined} onClick={() =>handleClick(currSuggestion)} className=' float-right cursor-pointer' style={{color:'rgba(181, 23, 158, 1)', fontSize:17}}>{lastQuestion?'Finish':'Next'}</button>
      </div>
    </div>
  )
}

export default Question
