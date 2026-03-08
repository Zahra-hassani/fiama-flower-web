"use server";
import { signIn, signOut } from "@/auth";
import { authValidationSchema, signUpValidationSchema } from "../validator";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { email, success } from "zod";
import { prisma } from "../db";
import { hashSync } from "bcrypt-ts-edge";
import { formatError } from "../utils";


export async function signUpUser(prevstate: unknown, formData: FormData){
    try{
        const user = signUpValidationSchema.parse({
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("conformPassword")
        });
        const passwordEcryption = hashSync(user.confirmPassword,14);
        await prisma.user.create({
            data:{
                name: user.name,
                email: user.email,
                password: passwordEcryption
            }
        });
        await signIn("credentials",{
            email: user.email,
            password: user.confirmPassword,
            redirect: true
        })
        return {
            success: true,
            message: "user registered successfully"
        }
    }
    catch(err){
        if(isRedirectError(err)){
            throw err;
        }
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}


export async function signInWithCredentials(prevstate: unknown, formData: FormData){
    try{
        const user = authValidationSchema.parse({
            email: formData.get("email"),
            password: formData.get("password")
        });
        await signIn("credentials",{
            email: user.email,
            password: user.password,
            redirect: true
        });
        return {
            success: true,
            message: "user logged in successfully"
        }
    }
    catch(err){
        if(isRedirectError(err)) throw err;
        return {
            success: false,
            message: "Invalid email or password"
        }
    }
}

export async function signOutUser(){
    await signOut();
}