"use client"
import Challenge from '@/Components/challenge/Challenge'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense>
        <Challenge/>
    </Suspense>
  )
}

export default page
