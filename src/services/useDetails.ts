import { useQuery } from "@tanstack/react-query"
import axios from "axios"


interface Devs {
    id:number
    name: string
}
interface Genre {
    id:number
    name:string
}
interface Tag {
    id:number
    name:string
}
interface Response {
    id: number
    slug:string
    name:string
    description_raw:string
    background_image:string
    background_image_additional:string
    website:string
    developers: Devs[]
    genres: Genre[]
    rating: number
    tags:Tag[]
    playtime: number
    youtube_count:string
}
const useDetails = (gameId:string | undefined ) => {
    return useQuery<Response, Error>({
        queryKey: ["platforms",gameId],
        queryFn: () => 
            axios.get<Response>(`https://api.rawg.io/api/games/${gameId}`, {
                params: {
                    key: "8f63d7995a164dda81263551d4913252",
                }
            })
                .then(res => res.data)
    })
}
export default useDetails