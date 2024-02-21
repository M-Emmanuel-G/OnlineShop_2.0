import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ProductInfoProps{
    product:string
    description: string
    price?:number
    urlImg:string
}

export default function CardInfoProduct({description, product, price, urlImg}:ProductInfoProps) {
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
          
        </CardFooter>
    </Card>
 );
}