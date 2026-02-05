import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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
