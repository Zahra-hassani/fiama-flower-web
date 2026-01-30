import React from 'react'
import ProductCard from './ProductCard';
import { Product } from '@/lib/types/product';

function Products({data,title,description,limit}:{data:any,title?:string,description?:string,limit?:number}) {
    const limitedProducts = data.slice(0,limit);
  return (
    <div>
        {title!=="" && description!==""?(
        <div>
      <h1 className="text-center font-bold text-3xl py-3">{title} <span className="text-blue-800">Deal</span></h1>
      <p className="text-base text-center">{description}</p>
      </div>
        ):""}
            {limitedProducts.length>0?
            <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {limitedProducts.map((product:Product) =>(
                <ProductCard key={product.slug} product={product} />
            ))}
            </div>
            :(
                <span className='font-light text-xl text-center'>No Product exists</span>
            )}
    </div>
  )
}

export default Products
