import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Header from "../components/header";
import CardProduct from "../components/cardProduct";
import CardInfoProduct from "../components/cardInfoProducts";

export default async function Home () {

    const showProducts = await db.products.findMany()
    const session = await getServerSession(authOptions)

    return (
        <main className="w-screen h-screen flex flex-col">
            <Header/>
            <section className="w-full h-[90%] overflow-auto flex flex-wrap">
      {
         showProducts.map((prod, key)=> (
            <CardInfoProduct
              key={key}
              description={prod.description}
              product={prod.product}
              price={Number(prod.price)}
              urlImg={prod.urlImg}
            />
          ))
        
      }
    </section>

        </main>
    );
}