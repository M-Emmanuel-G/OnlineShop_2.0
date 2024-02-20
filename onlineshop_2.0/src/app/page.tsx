import React from "react";
import Header from "./components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import CardProduct from "./components/cardProduct";
import { redirect } from "next/navigation";

const Products:React.FC = async () => {

    const showProducts = await db.products.findMany()
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
        return redirect('/')      
    }
    
return (
   <main className="w-screen h-screen">
    <Header/>
    <section className="w-full h-[90%] overflow-auto flex flex-wrap bg-red-500">
      {
         showProducts.map((prod, key)=> (
            <CardProduct
              key={key}
              description={prod.description}
              product={prod.product}
              price={Number(prod.price)}
              urlImg={prod.urlImg}
              id={prod.id}
              sessionId={(session.user as any).id}
            />
          ))
        
      }
    </section>
   </main>
 );
}

export default Products