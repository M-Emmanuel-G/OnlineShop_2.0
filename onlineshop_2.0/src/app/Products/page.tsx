'use client'

import React from "react";
import { BASE_URL } from "../constants/URL";
import useRequestData from "../hooks/useRequestData";
import { Card } from "@/components/ui/card";

const Products:React.FC = () => {

    const [products] = useRequestData(`${BASE_URL}products/getallproducts`)
   
    const showProducts = products.map((prod:any, key)=>{
        return(
            <Card className="w-[200px] h-[300px] flex flex-col items-center ">
                <span>{prod.product}</span>
                <span>{prod.description}</span>
                <span>{prod.price}</span>
                <span>{prod.product}</span>
            </Card>
        )
        
    })

 return (
   <main className="w-screen h-screen bg-red-400">
    
    {showProducts}
   </main>
 );
}

export default Products