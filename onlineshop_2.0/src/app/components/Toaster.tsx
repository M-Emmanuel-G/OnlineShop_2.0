"use client"

import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }:any) {
  return (
    <html lang="pt_BR">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
