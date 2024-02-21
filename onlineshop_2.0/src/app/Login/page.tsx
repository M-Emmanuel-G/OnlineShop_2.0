"use client"

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Login() {
 return (
    <main className="w-screen h-screen bg-sky-200 flex flex-col items-center">
        <h2>Realize seu login</h2>
        <span>Login somente pela conta google</span>
        <button onClick={()=>{signIn()}}>Logar</button>
    </main>
 );
}