import React from 'react'
import ProductCard from './ProductCard';

function Products({data,title,description}:{data:any,title?:string,description?:string}) {
    const limitedProducts = data;
  return (
    <div>
        {title!=="" && description!==""?(
        <div>
      <h1 className="font-bold text-3xl py-3">{title} <span className="text-brand">Deal</span></h1>
      <p className="text-base py-1">{description}</p>
      </div>
        ):""}
            {limitedProducts.length>0?
            <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {limitedProducts.map((product:any) =>(
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
