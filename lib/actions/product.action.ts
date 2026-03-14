"use server";

import path from "path";
import { APP_LIMIT } from "../constants";
import { prisma } from "../db";
import { convertToPlainObject } from "../utils";
import { ProductInsertSchema } from "../validator";
import { mkdir, writeFile } from "fs/promises";
import { success } from "zod";

export async function getLatest() {
  const data = await prisma.products.findMany({
    take: APP_LIMIT ? Number(APP_LIMIT) : 4,
    orderBy: { created_at: "asc" },
  });
  return convertToPlainObject(data);
}

export async function getSingleProduct(slug: string) {
  const product = await prisma.products.findFirst({
    where: {
      slug: slug,
    },
  });
  return product;
}

export async function InsertProducts(prevState: unknown, formData: FormData) {
  try {
    // getting product images
    const image1 = formData.get("image1") as File;
    const image2 = formData.get("image2") as File;

    //   check for existing
    if (!image1 || !image2) {
      return { error: "images are required" };
    }
    const uploadDir = path.join(process.cwd(), "public/images");

    // create unique name
    const image1Name = `${Date.now()}-${image1.name}`;
    const image2Name = `${Date.now()}-${image2.name}`;

    //   create buffer
    const image1Buffer = Buffer.from(await image1.arrayBuffer());
    const image2Buffer = Buffer.from(await image2.arrayBuffer());

    //   create folder
    await mkdir(uploadDir, { recursive: true });
    //   use writeFile for uploading
    await writeFile(path.join(uploadDir, image1Name), image1Buffer);
    await writeFile(path.join(uploadDir, image2Name), image2Buffer);

    // create array of product's images for saving
    const productImages = [`/images/${image1Name}`, `/images/${image2Name}`];
    const product = ProductInsertSchema.parse({
      name: formData.get("name"),
      slug: formData.get("slug"),
      category: formData.get("category"),
      description: formData.get("description"),
      brand: formData.get("brand"),
      images: productImages,
      stock: formData.get("stock"),
      isFeatured: formData.get("isFeatured"),
      price: formData.get("price"),
    });

    await prisma.products.create({
      data: {
        name: product.name,
        slug: product.slug,
        category: product.category,
        description: product.description,
        brand: product.brand,
        images: productImages,
        stock: product.stock,
        isFeatured: product.isFeatured,
        price: product.price,
      },
    });
    //     if succed
    return {
      success: true,
      message: "Product added successfully",
    };
  } catch (err) {
    return {
      success: false,
      message: "Could not add the product",
    };
  }
}
