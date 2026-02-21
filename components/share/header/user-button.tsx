import { auth } from '@/auth'
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { signOutUser } from '@/lib/actions/auth.action';
import { UserCircle, UserCircle2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

async function UserButton() {
    const session = await auth();
    if(!session){
        return (
            <Button asChild className='bg-brand dark:text-white text-black font-bold hover:bg-slate-200/60 hover:text-brand' >
                <Link href="/sign-in">
                <UserCircle /> Sign in
                </Link>
            </Button>
        )
    }
    const firstLetterOfName = session.user?.name?.charAt(0).toUpperCase() ||(<UserCircle2 />)
  return (
    <div className='flex gap-2 items-center'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className='flex justify-center items-center'>
                <Button variant='ghost' className='bg-gray-200 text-brand rounded-full w-8 h-8 relative ml-2 flex justify-center items-center'>{firstLetterOfName}</Button>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
            <DropdownMenuLabel className='font-normal'>
                <div className="space-y-1 flex flex-col">
                    <div className="text-sm leading-none font-medium">{session.user?.name}</div>
                    <div className="text-sm leading-none text-muted-foreground">{session.user?.email}</div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuItem className='p-0 mb-1'>
                <div>
                    <form action={signOutUser} className='w-full'>
                        <Button variant="ghost" type='submit'>Sign Out</Button>
                    </form>
                </div>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserButton
