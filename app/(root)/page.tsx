import Products from "@/components/share/product/productList";
import { SampleProducts } from "@/db/sampleProducts";
import { getLatest } from "@/lib/actions/product.action";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

export default async function Home() {
  const data = await getLatest();
  return (
    <div>
      <Products data={data} title="Day Of The" description="Don't wait. The time will never be just right." />
    </div>
  );
}
