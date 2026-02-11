import { SampleProducts } from '@/db/sampleProducts';
import { prisma } from '@/lib/db'
import React from 'react'

async function page() {
    await prisma.products.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();

    await prisma.products.createMany({
        data: SampleProducts.products
    });
    await prisma.user.createMany({
        data: SampleProducts.users
    });
  return (
    <div>
      data seeded successfully
    </div>
  )
}

export default page
