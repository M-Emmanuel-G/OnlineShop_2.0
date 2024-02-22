import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import React from "react";
import CardProductCart from "./_Components/CardProductCart";
import Header from "../components/header";
import { revalidatePath } from "next/cache";
  

const Cart:React.FC = async ()=> {

    const session = await getServerSession(authOptions)

    const showCart = await db.cart.findMany({
        where:{
            userId:(session?.user as any).id
        },
        include:{
            product:true
        }
    },
    )

    return (
        <main className="w-screen h-screen text-white flex flex-col">
            <Header/>
            <section className="w-full h-[90%] bg-gray-800 flex items-start justify-start flex-wrap overflow-auto">
                 {
                showCart.map((cart, key)=>
                <CardProductCart
                    key={key}
                    cart={cart}
                    price={Number(cart.product.price)}
                />
                )
            }
            </section>
        </main>
    );
}
revalidate:3

export default Cart