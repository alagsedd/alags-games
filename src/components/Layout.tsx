import OnSelectGenreProvider from "../providers/OnSelectGenreProvider";
import PlatformProvider from "../providers/PlatformProvider";
import SearchProvider from "../providers/SearchProvider";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <SearchProvider>
        <PlatformProvider>
          {" "}
          <OnSelectGenreProvider>
            {" "}
            <NavBar />
            <Outlet />
          </OnSelectGenreProvider>
        </PlatformProvider>
      </SearchProvider>
    </>
  );
};

export default Layout;
