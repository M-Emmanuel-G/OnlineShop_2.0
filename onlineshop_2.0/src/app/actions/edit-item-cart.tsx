"use server"

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface editProps{
    cartID:string,
    quantity:string
}

export default async function updateItem({cartID, quantity}:editProps) {
    const qtd = Number(quantity)
  
        await db.cart.update({
            where:{
                id:cartID
            },
            data:{
                quantity:qtd
            }
        })
        revalidatePath("/")
        revalidatePath("/Cart")
}