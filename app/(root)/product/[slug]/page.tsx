import ProductImage from '@/components/share/product/ProductImage';
import ProductPrice from '@/components/share/product/ProductPrice';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getSingleProduct } from '@/lib/actions/product.action';
import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import React from 'react'

async function page({params}:{params:Promise<{slug:string}>}) {
    const {slug} = await params;
    const product = await getSingleProduct(slug);
    if(!product) notFound();
  return (
    <>
       <section>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1.5">
          <div className='col-span-2'>
            {/* image */}
            <ProductImage images={product.images} />
          </div>
          <div className='col-span-2 flex flex-col gap-6'>
            {/* details */}
              <h3>{product.brand} {product.category}</h3>
            <h1 className="h3-bold">{product.name}</h1>
            <div className='flex gap-3 sm:items-center'>
               <ProductPrice value={Number(product.price)} className='w-24 px-5 py-2 rounded-full bg-brand/30 text-brand'/>
            </div>
              <p>{product.rating.toString()} of {product.numReviews} Reviews</p>
              <div className="mt-10">
                <p className='font-semibold'>Description</p>
                <p>{product.description}</p>
              </div>
          </div>
          <div>
            {/* cart */}
            <Card className='px-4'>
              <CardContent className='w-full flex flex-col gap-3'>
                <div className='flex-between'>
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className='flex-between'>
                  <div>Status</div>
                  {product.stock>0?(<Badge variant="outline">available</Badge>):(<Badge variant="destructive">unavailable</Badge>)}
                </div>
                {product.stock> 0 && (
                  <div className="flex-center">
                    <Button className='w-full'>Add To Cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
       </section>
    </>
  )
}

export default page
