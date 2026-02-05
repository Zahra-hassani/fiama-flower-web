"use server";

import { APP_LIMIT } from "../constants";
import { prisma } from "../db";
import { convertToPlainObject } from "../utils";

export async function getLatest(){
    const data = await prisma.products.findMany({
        take: APP_LIMIT?Number(APP_LIMIT):4,
        orderBy: {created_at: "asc"}
    });
    return convertToPlainObject(data);
}