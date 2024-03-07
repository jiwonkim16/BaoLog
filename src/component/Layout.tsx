import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="overflow-x-hidden w-[100vw] h-[100vh] bg-green-200 bg-opacity-45 font-[yg-jalnan]">
      <div className="fixed w-full">
        <Header />
      </div>
      <div className="grid custom-grid mt-20">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
