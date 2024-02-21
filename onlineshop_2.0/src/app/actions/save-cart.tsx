"use server"

import { db } from "@/lib/prisma"

interface SaveCartProps {
    quantity:number,
    userId:string,
    productId:string
}

export default async function saveCart(params:SaveCartProps) {
    await db.cart.create({
        data:{
            quantity:params.quantity,
            productId:params.productId,
            userId:params.userId
        }
    })
}