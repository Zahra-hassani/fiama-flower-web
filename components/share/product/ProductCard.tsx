import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductPrice from './ProductPrice'
import { Product } from '@/lib/types/product'

function ProductCard({product}:{product:Product}) {
  return (
    <Card>
        <CardHeader>
            <Link href={`product/${product.slug}`}>
            <Image src={`${product.images[0]}`} alt={`${product.name}`} className='h-10/12 w-full' height={700} width={700} priority={true} />
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
