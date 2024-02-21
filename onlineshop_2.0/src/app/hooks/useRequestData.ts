import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData=(url:string)=>{

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [ data, setData] = useState<[]>([])
    const [ page, setPage ]= useState<boolean>(false) 
    
    
    useEffect(()=>{
        setIsLoading(true)
        axios.get(url)
            .then((resp)=>{
                setData(resp.data)
                setIsLoading(false)
            })
            .catch((err)=>{
                setIsLoading(false)
            })
    },[url, page])
    return [data];
}

export default useRequestData