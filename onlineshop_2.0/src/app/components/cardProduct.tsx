"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

interface ProductProps{
    product:string
    description: string
    price?:number
    urlImg:string
    id:string
    sessionId?:string
}



const CardProduct = ({description, product, price, urlImg, id, sessionId}:ProductProps) => {

    const addProduct = (id:string)=>{
        // console.log((session?.user as any).id)
        alert('ola mundo')
    }
    
 return (
            <Card  className="w-[165px] h-[236px] flex flex-col p-0 m-1 relative">
                <div className="rounded-xl w-[100%] h-[40%] flex justify-center">
                    <Image src={urlImg} alt="" width={100} height={130}/>
                </div>
                <CardHeader>
                    <CardTitle className="text-[12px]">{product}</CardTitle>
                    <CardDescription className="text-[8px]">{description}</CardDescription>
                </CardHeader>
                <CardContent className="py-0 text-[16px] absolute bottom-10">
                    <span>R$ {Number(price).toFixed(2)}</span>
                </CardContent>
                <CardFooter className="w-full ">
                    <Button className="w-[100%] absolute bottom-0 left-0" onClick={()=>{addProduct(id)}}>Add Cart</Button>
                </CardFooter>
            </Card>
        )
}

export default CardProduct