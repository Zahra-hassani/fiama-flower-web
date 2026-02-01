import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import { ShoppingCart, UserCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Theme from './toggle'
import Menu from './menu'

function Header() {
  return (
    <div className='border-b wrapper'>
      <div className='flex-between'>
        <div className='flex-start gap-1'>
            <Link href="/">
            <Image src="/images/logol.png" className='block dark:hidden' alt={`${APP_NAME} logo`} priority={true} height={90} width={90} />
            <Image src="/images/logo-dark.png" className='hidden dark:block' alt={`${APP_NAME} logo`} priority={true} height={90} width={90} />
            {/* <span className='font-bold text-xl hidden lg:block'>{APP_NAME}</span> */}
            </Link>
        </div>
        {/* responsive menu */}
        <div className='space-x-2'>
            <Menu />
        </div>
      </div>
    </div>
  )
}

export default Header
