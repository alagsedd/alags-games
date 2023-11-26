import React from "react"
import { GenreAction } from "../reducers/OnSelectGenreReducer"

interface GenreContextType {
    genre:string
    dispatch: React.Dispatch<GenreAction>
}
const GenreContext = React.createContext<GenreContextType>({} as GenreContextType)
export default GenreContext