import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Platforms {
    id:number
    name:string
    slug: string
}
interface Result {
    id:number
    name: string
    slug: string
    platforms: Platforms[]
}
interface Response {
    count: number
    results: Result[]
}
const usePlatforms = () => {
    return useQuery<Response, Error>({
        queryKey: ["platforms"],
        queryFn: () => 
            axios.get<Response>("https://api.rawg.io/api/platforms/lists/parents", {
                params: {
                    key: "8f63d7995a164dda81263551d4913252",
                }
            })
                .then(res => res.data)
    })
}
export default usePlatforms