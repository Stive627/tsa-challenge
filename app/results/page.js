"use client"
import Result from '@/Components/results/Result'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense>
        <Result/>
    </Suspense>
  )
}

export default page
