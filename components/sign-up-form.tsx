"use client";
import React, { useActionState } from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { signUpDefaultValue } from '@/lib/constants';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import Link from 'next/link';
import { signUpUser } from '@/lib/actions/auth.action';

function SignUpButton(){
    const {pending} = useFormStatus();
    return <Button className='w-full' type='submit' disabled={pending?true:false}>{pending?"Submitting...":"Sign Up"}</Button>
}

function SignUpForm() {
    const [data, action] = useActionState(signUpUser,{
        success: false,
        message: ""
    });
  return (
    <form action={action}>
      <div className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor='name'>Name</Label>
            <Input type='text' id='name' name='name' autoComplete='name' defaultValue={signUpDefaultValue.name} />
        </div>
        <div className="space-y-2">
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' name='email' autoComplete='email' defaultValue={signUpDefaultValue.email} />
        </div>
        <div className="space-y-2">
            <Label htmlFor='password'>Password</Label>
            <Input type='password' id='password' name='password' autoComplete='password' defaultValue={signUpDefaultValue.password} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input type='password' id='confirmPassword' name='confirmPassword' autoComplete='confirmPassword' defaultValue={signUpDefaultValue.confirmPassword} />
        </div>
        {data && data.success && (
            <div className='text-center text-destructive'>{data.message}</div>
        )}
        <div>
            {/* button */}
            <SignUpButton />
        </div>
        <div className='text-center'>
            Already have an account? <Link href="sign-in" className='link'>Sign In</Link>
        </div>
      </div>
    </form>
  )
}

export default SignUpForm
