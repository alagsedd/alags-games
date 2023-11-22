import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Result {
    id:number
    name: string
    slug: string
    image_background:string
}
interface Response {
    count: number
    next: string
    previous:string
    results: Result[]
}
const useSliders = () => {
    return useQuery<Response, Error>({
        queryKey: ["sliders"],
        queryFn: () => 
            axios.get<Response>("https://api.rawg.io/api/platforms", {
                params: {
                    key: "8f63d7995a164dda81263551d4913252"
                }
            })
                .then(res => res.data),
            
    })
}
export default useSliders