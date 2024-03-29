"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { HomeIcon, LogInIcon, MenuIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SideBar() {

    const {data} = useSession()
    const router = useRouter()

    const handlerSignin = async ()=>{
        await signIn()
    }

    const logout = async ()=>{
        await signOut()
        if(!data?.user) router.push("/")
    }


    return (
       <div className="flex relative right-8">
        {
            data?.user ? 
                <h2 className="mx-4" text-sm>Bem vindo, {data?.user?.name}</h2>
                    :
                <h2 className="mx-4 text-sm">Acesse sua conta</h2>
        }
         <Sheet>
        <SheetTrigger asChild>
            <MenuIcon/>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader className="text-left">
                <SheetTitle className="flex justify-center">
                    <Image className="rounded-3xl" src="https://utfs.io/f/cd8f685d-c1a2-4ecd-8ac8-6620c711196c-fr26nf.jpg" alt="logo" width={100} height={100}/>
                </SheetTitle>
            </SheetHeader>
                {
                     data?.user ?
                    <div className="w-full h-full flex flex-col">
                         <div className=" w-full h-[15%] flex items-center justify-between">
                            <Avatar>
                                <AvatarImage className="w-8 rounded-xl" src={data.user.image ?? ""}/>
                            </Avatar>
                            <div>
                                <span>{data.user.name}</span>
                            </div>
                            <div>
                                <Button onClick={logout} className="h-[30px]">logout</Button> 
                            </div>
                        </div>
                        <div className="w-full h-[80%] flex flex-col ">
                            <div className="flex my-4 ">
                                <HomeIcon/>
                                <Link href="/" className="px-2">Início</Link>
                            </div>
                            <div className="flex my-4 ">
                                <ShoppingCartIcon/>
                                <Link href="/Cart" className="px-2">Meu Carrinho</Link>
                            </div>
                            <div className="flex my-4 ">
                                <UserIcon/>
                                <Link href="/Profile" className="px-2">Perfil</Link>
                            </div>
                        </div>
                    </div>
                         : 
                     <div>
                        <div className=" w-full h-full items-center flex justify-center p-4">
                            <UserIcon size={30}/>
                            <span className="text-sm m-2">Ola, faça seu login</span>
                        </div>
                        <div className=" w-full h-full items-center flex justify-center ">
                            <Button onClick={handlerSignin} className="flex text-sm ">
                                <LogInIcon size={20} className="m-2"/>
                                Realize seu login
                            </Button>
                        </div>
                     </div>
                }
            </SheetContent>
        </Sheet>
       </div>
 );
}