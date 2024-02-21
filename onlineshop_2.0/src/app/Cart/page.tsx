import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import React from "react";

const Cart:React.FC = async ()=> {

    const session = await getServerSession(authOptions)

    const showCart = await db.cart.findMany({
        where:{
            userId:(session?.user as any).id
        },
        include:{
            product:true
        }
    })

    return (
        <main className="text-white">
            {
                showCart.map((cart, key)=>
                <section key={key}>
                    <div>
                        <strong> Produto</strong>
                        <span>{cart.product.product}</span>
                    </div>
                    <div>
                        <strong> Descricao: </strong>
                        <span>{cart.product.description}</span>
                    </div>
                    <div>
                        <strong> Quantidade: </strong>
                        <span>{cart.quantity}</span>
                    </div>
                    <div>
                        <strong> Valor: </strong>
                        <span>{Number(cart.product.price)}</span>
                    </div>
                </section>
                )
            }
        </main>
    );
}

export default Cart