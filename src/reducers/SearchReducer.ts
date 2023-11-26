export interface SearchAction {
    type: "handleSearch"
    search:string
}
const searchReducer = (state: string,action:SearchAction):string => {
    if (action.type === "handleSearch") return action.search
    return state
}
export default searchReducer