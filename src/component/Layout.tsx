import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="overflow-x-hidden w-[100vw] h-[100vh] bg-[url('../대나무.jpg')] bg-cover bg-center font-[yg-jalnan]">
      <div className="w-full">
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
