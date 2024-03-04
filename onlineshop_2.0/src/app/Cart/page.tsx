import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import React from "react";
import CardProductCart from "./_Components/CardProductCart";
import Header from "../components/header";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

const Cart:React.FC = async ()=> {

    const session = await getServerSession(authOptions)

    if (!session?.user) redirect('/') 

    const showCart = await db.cart.findMany({
        where:{
            userId:(session?.user as any).id
        },
        include:{
            product:true
        }
    })

    const getTotalValueCart = showCart.map((prod:any)=>{return prod.quantity * Number(prod.product.price)}).reduce((a:number,b:number)=> a + b,0)
    const getItemsCart = showCart.length

    return (
        <main className="w-screen h-screen text-white flex flex-col">
            <Header/>
            <section className="w-full h-[90%] flex items-center justify-center flex-col">
                <section>
                    <h2 className="text-4xl my-4">Meu carrinho:</h2>
                    <span className="">{getItemsCart} items em seu carrinho!</span>
                </section>
                <section className="w-[376px] h-[600px] rounded-xl bg-white overflow-auto [&::-webkit-scrollbar]:hidden mt-4">
                 {
                showCart.map((cart:any, key:number)=>
                    <CardProductCart
                        key={key}
                        cart={cart}
                        price={Number(cart.product.price)}
                    />  
                )
            }
                </section>
                <div className="w-[376px] flex items-center my-4 text-center">
                    <strong className="text-xl">Valor total do carrinho:</strong>
                    <span className="mx-4 text-xl">R$ {getTotalValueCart.toFixed(2)}</span>
                </div>
            </section>
            <ToastContainer/>
        </main>
    );
}

export default Cart