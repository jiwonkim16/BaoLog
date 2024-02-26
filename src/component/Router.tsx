import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import CustomGlobe from "../page/CustomGlobe";
import ErrorComponent from "./error_component";
import PostWrite from "../page/Post-Write";
import PostList from "../page/Post-List";
import PostDetail from "../page/Post-Detail";

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
      {
        path: "write_post",
        element: <PostWrite />,
      },
      {
        path: "list_post",
        element: <PostList />,
        children: [
          {
            path: "/:post_id",
            element: <PostDetail />,
          },
        ],
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

export default router;
