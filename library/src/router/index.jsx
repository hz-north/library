import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/layout/Layout";
import Create from "../pages/Create";
import Search from "../pages/Search";
import Bookdetails from "../pages/Bookdetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/books/:id",
        element: <Bookdetails/>
      },
      {
        path: "/create",
        element: <Create/>
      },
      {
        path: "/search",
        element: <Search/>
      }
    ]
  },
]);
export default router;