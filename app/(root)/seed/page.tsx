import { SampleProducts } from '@/db/sampleProducts';
import { prisma } from '@/lib/db'
import React from 'react'

async function Seed() {
    await prisma.products.deleteMany();
    await prisma.products.createMany({data: SampleProducts.products});
    console.log("Seeded successfully");
  return (
    <div>
      Data seeded successfully
    </div>
  )
}

export default Seed
