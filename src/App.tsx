import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <Header />
      <div className="grid h-full custom-grid">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
