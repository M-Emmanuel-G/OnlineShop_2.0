import React from "react";
import Header from "./components/header";
import { db } from "@/lib/prisma";
import CardProduct from "./components/cardProduct";

const Products:React.FC = async () => {

const showProducts = await db.products.findMany()
    
return (
   <main className="w-screen h-screen">
    <Header/>
    <section className="w-full h-[90%] overflow-auto flex flex-wrap bg-red-500">
      {
        showProducts.map((prod, key)=> (
          <CardProduct
            key={key}
            products={prod}
            price={Number(prod.price)}
          />
        ))
      }
    </section>
   </main>
 );
}

export default Products