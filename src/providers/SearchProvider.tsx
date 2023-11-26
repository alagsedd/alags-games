import { ReactNode, useReducer } from "react";
import searchReducer from "../reducers/SearchReducer";
import SearchContext from "../contexts/OnSearchContext";

interface Props {
  children: ReactNode;
}
const SearchProvider = ({ children }: Props) => {
  const [search, dispatch] = useReducer(searchReducer, "");
  return (
    <>
      <SearchContext.Provider value={{ search, dispatch }}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchProvider;
