import { useQuery } from "@tanstack/react-query"
import axios from "axios"


interface Result {
    id:number
    image: string
}
interface Response {
    count: number
    results: Result[]
}
const useScreenshots = (id: string) => {
    return useQuery<Response, Error>({
        queryKey: ["platforms"],
        queryFn: () => 
            axios.get<Response>(`https://api.rawg.io/api/games/${id}/screenshots`, {
                params: {
                    key: "8f63d7995a164dda81263551d4913252",
                }
            })
                .then(res => res.data)
    })
}
export default useScreenshots