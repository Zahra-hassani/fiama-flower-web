import { auth } from "@/auth";
import SearchProduct from "@/components/share/product/SearchProduct";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const session = await auth();
  if (session) {
    const user = await prisma.user.findUnique({
      where: { id: session?.user?.id },
    });
    if (user?.role === "admin") {
      const products = await prisma.products.findMany();
      const serializeProducts = products.map((product) => ({
        ...product,
        price: Number(product.price),
        rating: Number(product.rating),
      }));
      return (
        <div className="w-full p-4">
          <SearchProduct
            initialValue={serializeProducts}
            action={SearchProduct}
          />
        </div>
      );
    } else {
      return redirect("/");
    }
  } else {
    return redirect("/sign-in");
  }
}

export default page;
