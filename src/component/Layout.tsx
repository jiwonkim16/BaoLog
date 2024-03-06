import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="overflow-x-hidden bg-green-200 bg-opacity-45 font-[yg-jalnan]">
      <Header />
      <div className="grid custom-grid">
        <div className="">
          <NavBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
