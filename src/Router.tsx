import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import CustomGlobe from "./CustomGlobe";
import ErrorComponent from "./error-component";

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
