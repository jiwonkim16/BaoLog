import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomGlobe from "./CustomGlobe";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomGlobe />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
