import Image from "next/image";
import SideBar from "./sideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Header() {

    const session = getServerSession(authOptions)

    return (
        <header className="w-screen h-[10%] flex items-center justify-between bg-sky-500">
            <Image className="rounded-xl mx-8" src="https://utfs.io/f/cd8f685d-c1a2-4ecd-8ac8-6620c711196c-fr26nf.jpg" alt="logo_onlineSHOP" width={60} height={60}/>
            <SideBar/>
        </header>
 );
}   