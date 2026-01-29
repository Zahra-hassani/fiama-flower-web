"use client";
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react';
import { useTheme } from 'next-themes'
import React from 'react'

function Theme() {
    const {theme, setTheme} = useTheme();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost">
                {theme==="light"?(<SunIcon />):theme==='dark'?(<MoonIcon />):(<SunMoonIcon />)}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>
                Mode
            </DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={theme==="light"} onClick={()=> setTheme("light")}>
                Light
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme==="darkx   "} onClick={()=> setTheme("dark")}>
                Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme==="system"} onClick={()=> setTheme("system")}>
                System
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Theme
