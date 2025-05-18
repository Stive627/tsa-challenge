import React from 'react'

function QuestionCard({question, answer, userAnswer}) {
 const alphabet = ['A)', 'B)', 'C)', 'D)', 'E)', 'F)']
  return (
    <div className=' flex justify-center mt-10'>
        <div className=' w-11/12 lg:w-1/3'>
            <p style={{backgroundColor:'rgba(157, 78, 221, 1)', fontSize:16}} className=' text-white p-2 rounded-md mb-5'>{question.question}</p>
            <div className=' flex flex-col gap-3 my-4'>
            {question.suggestions.map((elt, indx) => <button key={indx} style={{borderColor: indx === answer ? 'rgba(25, 175, 93, 1)':(((userAnswer !== answer) && indx === userAnswer)? 'rgba(235, 63, 66, 1)':'rgba(157, 78, 221, 1)'), color:indx === answer ? ' rgba(25, 175, 93, 1)':(((userAnswer !== answer) && indx === userAnswer)? 'rgba(235, 63, 66, 1)':'rgba(157, 78, 221, 1)')}} className=' py-1 border rounded-xl'><p>{alphabet[0]} {elt}</p></button>)}
            </div>
        </div>
    </div>
  )
}

export default QuestionCard
