"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import saveCart from "../actions/save-cart";

interface ProductProps{
    products:{
        id: string
        product: string
        description: string
        urlImg: string
    }
    price:number
}

// id={prod.id}
// sessionId="{(session.user as any).id}"



const CardProduct = ({products, price}:ProductProps) => {

    const session = useSession()

    
     
    const addProduct = async (id:string)=>{ 
      
       await saveCart({
        productId:id,
        quantity:1,
        userId:(session.data?.user as any).id
       })

          alert("Item inserido com sucesso!!!")
       
        }
    
 return (
            <Card  className="w-[165px] h-[236px] flex flex-col p-0 m-1 relative">
                <div className="rounded-xl w-[100%] h-[40%] flex justify-center">
                    <Image src={products.urlImg} alt="" width={100} height={130}/>
                </div>
                <CardHeader>
                    <CardTitle className="text-[12px]">{products.product}</CardTitle>
                    <CardDescription className="text-[8px]">{products.description}</CardDescription>
                </CardHeader>
                <CardContent className="py-0 text-[16px] absolute bottom-10">
                    <span>R$ {price}</span>
                </CardContent>
                <CardFooter className="w-full ">
                    <Button className="w-[100%] absolute bottom-0 left-0" onClick={()=>{addProduct(products.id)}}>Add Cart</Button>
                </CardFooter>
            </Card>
        )
}

export default CardProduct