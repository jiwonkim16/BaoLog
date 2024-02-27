import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="grid h-[100vh] custom-grid">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
