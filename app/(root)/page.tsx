import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>{APP_NAME}</h1>
    </div>
  );
}
