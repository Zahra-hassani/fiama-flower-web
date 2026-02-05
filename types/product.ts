import { ProductInsertSchema } from "@/lib/validator";
import z from "zod";

export type ProductInfo = z.infer<typeof ProductInsertSchema> &{
    id: string,
    rating: string,
    crearted_at :Date
}