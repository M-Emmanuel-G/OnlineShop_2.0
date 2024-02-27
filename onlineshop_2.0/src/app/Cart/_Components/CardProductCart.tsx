"use client"

import removeItemCart from "@/app/actions/remove-item-cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import EditProduct from "./SheetEdit";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

interface CartProps{
       cart:{
        id: string,
        quantity: number,
        productId: string,
        userId: string,
        product: {
          id: string,
          product: string,
          urlImg: string,
          description: string
        }
       }
       price:number
}

export default function CardProductCart({cart, price}:CartProps) {
   
    const router = useRouter()

    const removeItem = async ()=>{
        await removeItemCart({cartID:cart.id})
        router.push("/Cart")
        toast('removido com sucesso')
    }

    return (
        <Card className=" w-[330px] h-[290px] flex m-4 p-0">
            <div className="w-[40%] h-full flex items-center justify-center">
                <Image src={cart.product.urlImg} alt="Imagem Produto" width={110} height={130}/>
            </div>
           <div className="w-[60%] h-full flex flex-col">
                <CardHeader className="w-full h-[60%] flex flex-col items-center justify-start m-0 p-0 mt-2">
                    <CardTitle className="text-xl text-start">{cart.product.product}</CardTitle>
                    <CardDescription className="text-[12px] ">{cart.product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="w-full text-center p-0">
                        <strong className="text-sm">Quantidade:</strong>
                        <span>{cart.quantity}</span>
                    </div>
                    <div className="text-sm text-center">
                        <strong>Valor final:</strong>
                        <span>R$ {(cart.quantity * price).toFixed(2)}</span>
                    </div>
                </CardContent>
                <CardFooter className="w-full h-[40%] m-0 p-0 items-center justify-evenly">
                    <EditProduct
                        cartID={cart.id}
                    />
                    <Button className="" onClick={removeItem}>remover</Button>
                </CardFooter>
           </div>
        </Card>
    );
}   