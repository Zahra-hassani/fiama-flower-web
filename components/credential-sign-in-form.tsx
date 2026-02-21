"use client";
import React, { useActionState } from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { signInDefaultValue } from '@/lib/constants';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import Link from 'next/link';
import { signInWithCredentials } from '@/lib/actions/auth.action';

function SignInButton(){
    const {pending} = useFormStatus();
    return <Button className='w-full' type='submit' disabled={pending?true:false}>{pending?"Signing In...":"Sign In"}</Button>
}

function SignInWithCredentials() {
    const [data, action] = useActionState(signInWithCredentials,{
        success: false,
        message: ""
    });
  return (
    <form action={action}>
      <div className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' name='email' autoComplete='email' defaultValue={signInDefaultValue.email} />
        </div>
        <div className="space-y-2">
            <Label htmlFor='password'>Password</Label>
            <Input type='password' id='password' name='password' autoComplete='password' defaultValue={signInDefaultValue.password} />
        </div>
        {data && data.success && (
            <div className='text-center text-destructive'>{data.message}</div>
        )}
        <div>
            {/* button */}
            <SignInButton />
        </div>
        <div className='text-center'>
            Don't have an account? <Link href="sign-up" className='link'>Sign up</Link>
        </div>
      </div>
    </form>
  )
}

export default SignInWithCredentials
