import z from "zod";
import { priceConverter } from "./utils";

    const currency = z.string().refine((value) => /^\d+(\.\d{2})? /.test(priceConverter(Number(value))),"Price must has exactly 2 decimal places.");

    export const ProductInsertSchema = z.object({
    name: z.string().min(3,"Product name should includes at least 3 letters."),
    slug: z.string().min(5,"The slug must be at least 5 characters."),
    category: z.string().min(3,"The category name must be at least 3 characters."),
    description: z.string().min(10,"The product description must be at least 10 characters."),
    brand: z.string().min(10,"The product brand must be at least 10 characters."),
    images: z.array(z.string()).min(1,"The product must has at least one image"),
    banner: z.string().nullable(),
    stock: z.coerce.number(),
    isFeatured: z.boolean(),
    price: currency,
});

export const authValidationSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6,"The password must be at least 6 characters")
});

// user registering
export const signUpValidationSchema = z.object({
    name: z.string().min(3,"The name must be included 3 characters."),
    email: z.string().email("Invalid email address."),
    password: z.string().min(6,"The password must be at least 6 characters."),
    confirmPassword: z.string().min(6,"The confirm password must be at least 6 characters.")
}).refine((data)=> { 
    return data.password === data.confirmPassword
},{
    message: "Passwords are not matched",
    path: ["confirmPassword"]
});