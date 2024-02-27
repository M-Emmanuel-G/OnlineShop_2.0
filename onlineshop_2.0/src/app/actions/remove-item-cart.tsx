"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface ItemRemoveProps{
    cartID:string
}

export default async function removeItemCart({cartID}:ItemRemoveProps) {
    await db.cart.delete({
        where:{ id: cartID }
    })
        revalidatePath("/")
        revalidatePath("/Cart")
}