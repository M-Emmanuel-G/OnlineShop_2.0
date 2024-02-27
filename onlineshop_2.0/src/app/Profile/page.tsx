import Header from "../components/header"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { redirect, useRouter } from "next/navigation"
import { revalidatePath } from "next/cache"
import GoToRouter from "../hooks/goToRouter"
import path from "path"

const Profile = async ()=>{

    const session = await getServerSession(authOptions)

    if(!session?.user) redirect('/')
    
    return(
        <main className="w-screen h-screen">
            <Header/>
            <section className="w-full h-[90%] flex justify-center items-center">
                <section className=" text-start w-[370px] h-[400px] bg-white rounded-xl">
                    <div className="flex items-center m-4">
                        <Avatar>
                            <AvatarImage className=" rounded-xl" src={session?.user?.image || ''}/>
                        </Avatar>
                        <h2 className="text-3xl m-4">Meu Perfil</h2>
                    </div>
                    <div className="m-4">
                        <strong className="">Nome:</strong>
                        <span className="text-xl mx-4">{session?.user?.name}</span>
                    </div>
                    <div className="m-4">
                        <strong className="">Email:</strong>
                        <span className="text-xl mx-4">{session?.user?.email}</span>
                    </div>
                </section>
            </section>
        </main>
    )
 
}

export default Profile