"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { InsertProducts } from "@/lib/actions/product.action";
import { redirect } from "next/navigation";
import React, { useActionState } from "react";

function ProductInsertForm() {
  const [data, action] = useActionState(InsertProducts, {
    success: false,
    message: "",
  });
  if (data && data.success) {
    return redirect("/");
  }
  return (
    <div>
      <form action={action} className="flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-1">
          <Input name="name" type="text" placeholder="Product Name" />
          <Input name="slug" type="text" placeholder="Product Slug" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <Input name="price" type="text" placeholder="Product Price" />
          <Input name="stock" type="number" placeholder="Product Stock" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <Select name="category">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a cetagory" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="clothes">Clothes</SelectItem>
              <SelectItem value="cosmic items">Cosmic Items</SelectItem>
              <SelectItem value="toilet items">Toilet Items</SelectItem>
              <SelectItem value="shoes">Shoes</SelectItem>
            </SelectContent>
          </Select>
          <Select name="isFeatured">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Feature" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Featured</SelectItem>
              <SelectItem value="false">Not Featured</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="w-full flex flex-col gap-2">
            <Input type="text" placeholder="Product Brand" name="brand" />
            <div className="flex justify-between gap-2 flex-wrap">
              <Input type="file" name="image1" accept="image/*" />
              <Input type="file" name="image2" accept="image/*" />
            </div>
          </div>
          <Textarea
            className="h-full w-full resize-none"
            name="description"
            placeholder="Product Description"
          />
        </div>
        <div>
          <Button type="submit" variant="default">
            Save
          </Button>
        </div>
        {data && !data.success && (
          <div className="text-destructive">{data.message}</div>
        )}
      </form>
    </div>
  );
}

export default ProductInsertForm;
