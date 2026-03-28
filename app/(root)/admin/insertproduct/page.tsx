import { auth } from "@/auth";
import ProductInsertForm from "@/components/share/product/product-insert-form";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const session = await auth();
  if (session) {
    const user = await prisma.user.findFirst({
      where: {
        id: session?.user?.id,
      },
    });
    if (user?.role === "admin") {
      return (
        <div className="grid w-full grid-cols-1 md:grid-cols-3 border p-2 rounded-md shadow-2xl">
          <div className="relative flex col-span-1 flex-col items-center">
            <h1 className="leading-none text-xl md:text-2xl lg:text-3xl font-bold text-purple-700/70">
              Add Product
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              New Product, New features, different experience
            </p>
            <img
              src="/images/cosmic.png"
              className="h-full w-full object-cover"
              alt="Cosmic products"
            />
          </div>
          <div className="col-span-2">
            <ProductInsertForm />
          </div>
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
