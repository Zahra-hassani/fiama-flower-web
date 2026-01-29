import { APP_NAME } from '@/lib/constants';
import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='flex-center p-5 border-t'>
        <span className='text-black/50'>
        <span className='text-xs align-middle'>&copy;</span> {currentYear}  
         {APP_NAME} All rights reserved.
        </span>
    </footer>
  )
}

export default Footer
