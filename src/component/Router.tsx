import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import CustomGlobe from "../page/CustomGlobe";
import ErrorComponent from "./error_component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <CustomGlobe />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

export default router;
