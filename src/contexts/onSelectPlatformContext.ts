import React from "react"
import { PlatformAction } from "../reducers/PlatformReducer"

interface PlatformContextType {
    platformId:string
    dispatch: React.Dispatch<PlatformAction>
}
const PlatformContext = React.createContext<PlatformContextType>({} as PlatformContextType)
export default PlatformContext