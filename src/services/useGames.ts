import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Result {
    id:number
    slug: string
    name: string
    background_image:string
    rating:number
    playtime:number
}
interface Response {
    count:number
    next: string
    previous:string
    results: Result[]
}
interface QueryProps {
    page:number
    page_size: number
}
const useGames = (query: QueryProps) => {
    return useQuery<Response,Error>({
        queryKey: ["games", query],
        queryFn: () => 
            axios.get<Response>("https://api.rawg.io/api/games", {
                params: {
                    key: "8f63d7995a164dda81263551d4913252",
                    page_size: query.page_size,
                    page:query.page 
                }
            })
                .then(res =>res.data)
    })
}
export default useGames