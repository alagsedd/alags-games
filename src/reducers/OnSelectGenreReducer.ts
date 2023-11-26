export interface GenreAction {
    type: "handleGenreSelection"
    genre: string
}
const genreReducer = (state:string, action:GenreAction): string => {
   if (action.type === "handleGenreSelection") return action.genre
    return state
}
export default genreReducer