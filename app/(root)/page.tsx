import Products from "@/components/share/product/productList";
import { getLatest } from "@/lib/actions/product.action";

export default async function Home() {
  const data = await getLatest();
  return (
    <div>
      <Products data={data} title="Day Of The" description="Don't wait. The time will never be just right." />
    </div>
  );
}
