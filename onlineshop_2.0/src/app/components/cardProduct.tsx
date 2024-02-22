"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import saveCart from "../actions/save-cart";
import { Input } from "@/components/ui/input";

interface ProductProps{
    products:{
        id: string
        product: string
        description: string
        urlImg: string
    }
    price:number
}


const CardProduct = ({products, price}:ProductProps) => {

    const session = useSession()
    const [qtd, setQtd] = useState<number>(1)

    const addQtd = ()=>{
        setQtd(qtd + 1)
    }
    const removeQtd = ()=>{
        setQtd(qtd - 1)
    }

    const addProduct = async (id:string)=>{ 
      
      if(!session.data?.user){ 
        const confirm = window.confirm('Voce nao esta logado? Deseja realizar login?')
        if( confirm === true) signIn()
    }
        else{
            await saveCart({ 
                productId:id,
                quantity:qtd,
                userId:(session.data?.user as any).id
            })
            alert("Produto adicionado ao carrinho!")
        }
}

return (
            <Card  className="w-[165px] h-[260px] flex flex-col p-0 m-1 relative">
                <div className="rounded-xl w-[100%] h-[40%] flex justify-center">
                    <Image src={products.urlImg} alt="" width={100} height={130}/>
                </div>
                <CardHeader className="p-0 flex flex-col items-center">
                    <CardTitle className="text-[12px]">{products.product}</CardTitle>
                    <CardDescription className="text-[8px]">{products.description}</CardDescription>
                </CardHeader>
                <CardContent className="py-0 text-[16px] absolute bottom-10">
                    <div className=" w-full h-[20px] flex items-center justify-center">
                        <button className="text-xl mx-2 relative bottom-1" onClick={removeQtd}>-</button>
                        <Input
                            className=" border-0 w-[80px] h-[20px] text-center outline-none text-black"
                            type="text"
                            value={Number(qtd)}
                            onChange={(ev:any)=>{setQtd(ev.target.value)}}
                        />
                        <button className="text-xl mx-2 relative bottom-1" onClick={addQtd}>+</button>
                    </div>
                    <span>R$ {Number(price)}</span>
                </CardContent>
                <CardFooter className="w-full ">
                    <Button className="w-[100%] absolute bottom-0 left-0" onClick={()=>{addProduct(products.id)}}>Add Cart</Button>
                </CardFooter>
            </Card>
        )
}

export default CardProduct