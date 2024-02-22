"use client"

import updateItem from "@/app/actions/edit-item-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditProps{
    cartID:string
}

export default function EditProduct({cartID}:EditProps) {

    const [quantity, setQuantity] = useState<string>('0')

    const router = useRouter()

    const updateItems = async ()=>{
        if(!quantity) alert("Valor nao foi inserido")
         else if(Number(quantity) < 1) alert("Quantidade nao pode ser menor que 1")
        else if(Number(quantity) > 5) alert("Quantidade nao pode ser maior que 5")
        else{
            await updateItem({cartID, quantity})
            alert("Produto alterado com sucesso!")}
    }

 return (
    <Sheet>
        <SheetTrigger asChild>
            <Button>Editar</Button>
        </SheetTrigger>
            <SheetContent side={"bottom"} className="flex items-center justify-center flex-col bg-transparent border-none">
                <SheetHeader className="text-left">
                <SheetTitle className="text-white">Altere a quantidade:</SheetTitle>   
            </SheetHeader>
            <SheetDescription className="flex ">
                <Input
                    className="text-center text-bold"
                    value={quantity}
                    onChange={(ev)=>{setQuantity(ev.target.value)}}
                />
                <Button className="mx-8" onClick={updateItems}>Alterar</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
 );
}