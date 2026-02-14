"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React, { useState } from 'react'

function ProductImage({images}:{images:string[]}) {
    const [currentIndex ,setCurrentIndex] = useState(0);
  return (
    <div className='space-y-4'>
      <Image className='min-h-75 object-center object-cover' src={images[currentIndex]} alt="product image" height={1000} width={1000} />
      <div className='flex gap-3'>
        {images.map((image,index)=>(
            <div onClick={()=> setCurrentIndex(index)} className={cn('border rounded-md cursor-pointer hover:border-amber-800',currentIndex === index && "border-amber-800")} key={index}>
                <Image src={`${image}`} className='rounded-md' alt='product image' height={100} width={100} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImage
