"use client"
import Questions from '@/Components/questions/Questions'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense>
        <Questions/>
    </Suspense>
  )
}

export default page
