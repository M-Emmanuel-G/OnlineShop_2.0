import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Header from "../components/header";
import CardProduct from "../components/cardProduct";

export default async function Home () {

    const showProducts = await db.products.findMany()
    const session = await getServerSession(authOptions)

    return (
        <main className="w-screen h-screen flex flex-col">
    
        </main>
    );
}