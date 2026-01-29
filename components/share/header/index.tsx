import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import { ShoppingCart, UserCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Theme from './toggle'

function Header() {
  return (
    <div className='border-b wrapper'>
      <div className='flex-between'>
        <div className='flex-start gap-1'>
            <Link href="/">
            <Image src="/images/logol.png" alt={`${APP_NAME} logo`} priority={true} height={90} width={90} />
            {/* <span className='font-bold text-xl hidden lg:block'>{APP_NAME}</span> */}
            </Link>
        </div>
        {/* buttons and theme changer menu */}
        <div className='space-x-2'>
            <Theme />
            <Button asChild variant="ghost">
                <Link href="/cart">
                <ShoppingCart /> Cart
                </Link>
            </Button>
            <Button asChild >
                <Link href="/login">
                <UserCircle /> Sign in
                </Link>
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
