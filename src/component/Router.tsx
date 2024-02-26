import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import CustomGlobe from "../page/CustomGlobe";
import ErrorComponent from "./error_component";
import PostWrite from "../page/Post-Write";
import PostList from "../page/Post-List";
import PostDetail from "../page/Post-Detail";
import Portpolio from "../page/Portpolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomGlobe />,
  },
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "write_post",
        element: <PostWrite />,
      },
      {
        path: "list_post",
        element: <PostList />,
        children: [
          {
            path: ":post_id",
            element: <PostDetail />,
          },
        ],
      },
      {
        path: "portpolio",
        element: <Portpolio />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

export default router;
