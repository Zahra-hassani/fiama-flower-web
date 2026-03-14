import { Input } from "@/components/ui/input";
import React from "react";

function ProductInsertForm() {
  return (
    <div>
      <form action="" className="flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-1">
          <Input name="name" type="text" placeholder="Product Name" />
          <Input name="slug" type="text" placeholder="Product Slug" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <Input name="price" type="text" placeholder="Product Price" />
          <Input name="stock" type="number" placeholder="Product Stock" />
        </div>
      </form>
    </div>
  );
}

export default ProductInsertForm;
