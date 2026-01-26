"use client";
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes'
import React from 'react'

function Theme() {
    const {theme, setTheme} = useTheme();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost">
                {theme==="light"?(<Sun />):theme==='dark'?(<Moon />):(<SunMoon />)}
            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default Theme
