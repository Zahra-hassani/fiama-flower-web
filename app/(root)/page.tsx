import Products from "@/components/share/product/productList";
import { SampleProducts } from "@/db/sampleProducts";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  const data = SampleProducts;
  return (
    <div>
      <h1>{APP_NAME}</h1>
      <Products data={data.products} title="Day Of The" description="Don't wait. The time will never be just right." limit={4} />
    </div>
  );
}
