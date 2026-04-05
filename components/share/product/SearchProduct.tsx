"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React, { useActionState } from "react";

function SearchProduct({
  initialValue,
  action,
}: {
  initialValue: any[];
  action: any;
}) {
  const [data, func] = useActionState(action, {
    products: initialValue,
  });
  return (
    <div className="w-full max-w-6xl mx-auto my-4">
      <Table>
        <TableHeader className="bg-black">
          <TableRow>
            <TableHead className=" text-white">Product Name</TableHead>
            <TableHead className=" text-white">Brand</TableHead>
            <TableHead className=" text-white">Price</TableHead>
            <TableHead className=" text-white">Image</TableHead>
            <TableHead className=" text-white" colSpan={2}>
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.products.map((product) => (
            <TableRow className="even:bg-stone-200" key={product.slug}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Image
                  src={product.images[0]}
                  alt="Product image"
                  height={78}
                  width={78}
                  className="rounded-full"
                />
              </TableCell>
              <TableCell>
                <Button variant="destructive">Delete</Button>
              </TableCell>
              <TableCell>
                <Button>Update</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default SearchProduct;
