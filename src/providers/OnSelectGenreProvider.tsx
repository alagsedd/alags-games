import { ReactNode, useReducer } from "react";
import GenreContext from "../contexts/OnSelectGenreContext";
import GenreReducer from "../reducers/OnSelectGenreReducer";

interface Props {
  children: ReactNode;
}
const OnSelectGenreProvider = ({ children }: Props) => {
  const [genre, dispatch] = useReducer(GenreReducer, "");
  return (
    <>
      <GenreContext.Provider value={{ genre, dispatch }}>
        {children}
      </GenreContext.Provider>
    </>
  );
};

export default OnSelectGenreProvider;
