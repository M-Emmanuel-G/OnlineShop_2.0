"use client"
 
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface ToastProps{
    message:string
}
 
export function ToastSimple({message}:ToastProps) {
  const { toast } = useToast()
 
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description:message,
        })
      }}
    >
      Show Toast
    </Button>
  )
}