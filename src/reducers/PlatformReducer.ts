export interface PlatformAction {
    type: "selectPlatform"
    platformId:string
}
const PlatformReducer = (state:string, action: PlatformAction):string => {
    if (action.type === "selectPlatform") return action.platformId
    return state
}
export default PlatformReducer