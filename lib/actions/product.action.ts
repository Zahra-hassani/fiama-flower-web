"use server";

import { prisma } from "../db";
import { convertToPlainObject } from "../utils";

export async function getLatest(){
    const data = await prisma.products.findMany({
        take: 4,
        orderBy: {created_at: "asc"}
    });
    return convertToPlainObject(data);
}