import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductPrice from './ProductPrice'

function ProductCard({product}:{product:any}) {
  return (
    <Card className='group'>
        <CardHeader>
            <Link href={`product/${product.slug}`}>
            <div className='h-11/12 w-full overflow-hidden p-0 transition-all duration-1000'>
            <Image src={`${product.images[0]}`} alt={`${product.name}`} className='h-full w-full group-hover:hidden block transition-all duration-100' height={700} width={700} priority={true} />
            <Image src={`${product.images[1]}`} alt={`${product.name}`} className='h-full w-full group-hover:scale-110 group-hover:block hidden transition-all duration-100 group-hover:object-center' height={700} width={700} />
            </div>
            </Link>
        </CardHeader>
        <CardContent className='grid p-4 gap-4'>
            <span className='text-xs font-medium'>{product.brand}</span>
            <Link href={`product/${product.slug}`}>
            <h1 className="font-semibold">{product.name}</h1>
            </Link>
            <div className="flex-between gap-4">
                <span>{product.rating}</span>
                {product.stock>0?(
                    <ProductPrice value={Number(product.price)} />
                ):(
                    <span className='text-destructive'>Out of stock</span>
                )}
            </div>
        </CardContent>
    </Card>
  )
}

export default ProductCard
