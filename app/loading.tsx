import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='border border-stone-800 rounded-full p-6 flex justify-center items-center'>
        <Image src="/images/loader.png" alt={`loading...`} height={60} width={60} /> 
      </div>
    </div>
  )
}

export default loading
