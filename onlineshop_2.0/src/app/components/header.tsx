import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HomeIcon, LogInIcon, MenuIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {

    const{data} = useSession()

    const handlerSignin = async ()=>{
        await signIn()
    }

    const logout = ()=>{
        signOut()
    }

    return (
        <header className="w-screen h-[10%] flex items-center justify-between bg-gray-400">
            <Image src="https://utfs.io/f/cd8f685d-c1a2-4ecd-8ac8-6620c711196c-fr26nf.jpg" alt="logo_onlineSHOP" width={60} height={60}/>
            <Sheet>
                <SheetTrigger asChild>
                    <MenuIcon/>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="text-left">
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                        {
                             data?.user ?
                            <div className="w-full h-full flex flex-col">
                                 <div className=" w-full h-[15%] flex items-center justify-between">
                                    <Avatar>
                                        <AvatarImage src={data.user.image ?? ""}/>
                                    </Avatar>
                                    <div>
                                        <span>{data.user.name}</span>
                                    </div>
                                    <div>
                                        <Button className="h-[30px]" onClick={logout}>logout</Button> 
                                    </div>
                                </div>
                                <div className="w-full h-[80%] flex flex-col ">
                                    <div className="flex ">
                                        <HomeIcon/>
                                        <span className="px-2">Início</span>
                                    </div>
                                    <div className="flex my-4 ">
                                        <ShoppingCartIcon/>
                                        <span className="px-2">Meu Carrinho</span>
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
        </header>
 );
}