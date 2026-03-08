import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { any } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToPlainObject<T>(value:T):T{
  return JSON.parse(JSON.stringify(value));
}

export function priceConverter(value:number):string{
  const valueToString = value.toString();
  const [int,float] = valueToString.split(".");
  return float? `${int}.${float?float:  float.padEnd(2,'0')}`:`${int}.00`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function formatError(error:any){
  if(error.name === "ZodError"){
    const messages = error.issues.map((bug:any) => bug.message);
    return messages.join(" ");
  }
  else if(error.name === "PrismaClientKnownRequestError" || error.code === "P2002"){
    return "The email has already been taken";
  }
  else{
    return "Please check your internet connection and try again";
  }
}
