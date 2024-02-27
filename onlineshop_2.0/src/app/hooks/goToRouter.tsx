"use client"

import { useRouter } from "next/navigation"

export default function GoToRouter(path:string) {
    const router = useRouter()
    router.push(path)
}