import React from "react"
import { SearchAction } from "../reducers/SearchReducer"

interface SeachTypeAction  {
    search: string
    dispatch: React.Dispatch<SearchAction>
}
const SearchContext = React.createContext<SeachTypeAction>({}as SeachTypeAction)
export default SearchContext