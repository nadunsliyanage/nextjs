'use client'
import React from 'react'
import Button from '@/components/ui/button/button'

const Export = () => {
   const handleExport = () => {
    console.log('Export triggered from client-side!')
    // Or trigger fetch/post/download logic here
  }
  return (
    <Button label='Export' click={handleExport}/>
  )
}

export default Export