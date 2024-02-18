'use client'

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useRequestData from "./hooks/useRequestData";
import { BASE_URL } from "./constants/URL";
import Header from "./components/header";

const Products:React.FC = () => {

    const [products] = useRequestData(`${BASE_URL}products/getallproducts`)
    console.log(products);
    
   
    const showProducts = products.map((prod:any, key)=>{
        
        return(
            <Card className="w-[165px] h-[236px] flex flex-col p-0 m-1 relative">
                <div className="rounded-xl w-[100%] h-[40%] flex justify-center" >
                    <Image src={prod.urlImg} alt="" width={100} height={130}/>
                </div>
                <CardHeader>
                    <CardTitle className="text-[12px]">{prod.product}</CardTitle>
                    <CardDescription className="text-[8px]">{prod.description}</CardDescription>
                </CardHeader>
                <CardContent className="py-0 text-[16px] absolute bottom-10">
                    <span>R$ {Number(prod.price).toFixed(2)}</span>
                </CardContent>
                <CardFooter className="w-full ">
                    <Button className="w-[100%] absolute bottom-0 left-0">Add Cart</Button>
                </CardFooter>
            </Card>
        )
        
    })

 return (
   <main className="w-screen h-screen">
    <Header/>
    <section className="w-full h-[90%] overflow-auto flex flex-wrap">
        {showProducts}
    </section>
   </main>
 );
}

export default Products