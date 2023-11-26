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
interface QueryProps {
    page_size:number
    page:number
}
const useGenres = (query:QueryProps) => {
    return useQuery<Response, Error>({
        queryKey: ["sliders",query],
        queryFn: () => 
            axios.get<Response>("https://api.rawg.io/api/genres", {
                params: {
                    key: "8f63d7995a164dda81263551d4913252",
                    page_size: query.page_size,
                    page: query.page
                }
            })
                .then(res => res.data),
            
    })
}
export default useGenres