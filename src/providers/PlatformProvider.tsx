import { ReactNode, useReducer } from "react";
import PlatformReducer from "../reducers/PlatformReducer";
import PlatformContext from "../contexts/onSelectPlatformContext";

interface Props {
  children: ReactNode;
}
const PlatformProvider = ({ children }: Props) => {
  const [platformId, dispatch] = useReducer(PlatformReducer, "");

  return (
    <>
      <PlatformContext.Provider value={{ platformId, dispatch }}>
        {children}
      </PlatformContext.Provider>
    </>
  );
};

export default PlatformProvider;
