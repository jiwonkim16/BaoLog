import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="overflow-x-hidden  h-[100vh] overflow-y-hidden bg-green-200 bg-opacity-45">
      <Header />
      <div className="grid h-[100%] custom-grid">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
