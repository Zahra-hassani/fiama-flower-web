import { auth } from '@/auth'
import SignInWithCredentials from '@/components/credential-sign-in-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

async function Login() {
  const session = await auth();
  if(session){
    return redirect('/');
  }
  return (
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href="/" className='w-full flex justify-center'>
          <Image src="/images/loader.png" alt={APP_NAME} priority={true} height={100} width={100} />
          </Link>
          <CardTitle className='text-center'>Sign In</CardTitle>
          <CardDescription className='text-center'>Sign in with email and password</CardDescription>
        </CardHeader>
        <CardContent>
          {/* input */}
          <SignInWithCredentials />
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
