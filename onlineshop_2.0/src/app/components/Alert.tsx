import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react";

interface NotifyProps{
    text:string
    title:string
}


export default function Notification({title, text}:NotifyProps) {
 return (
    <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>
            {text}
        </AlertDescription>
    </Alert>
 );
}