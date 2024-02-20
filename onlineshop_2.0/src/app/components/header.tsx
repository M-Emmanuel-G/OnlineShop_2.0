// "use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { db } from "@/lib/prisma";
import { HomeIcon, LogInIcon, MenuIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SideBar from "./sideBar";

export default async function Header() {
    

    return (
        <header className="w-screen h-[10%] flex items-center justify-between bg-gray-400">
            <Image src="https://utfs.io/f/cd8f685d-c1a2-4ecd-8ac8-6620c711196c-fr26nf.jpg" alt="logo_onlineSHOP" width={60} height={60}/>
            <SideBar/>
        </header>
 );
}   