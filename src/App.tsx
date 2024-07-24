import { createBrowserRouter } from "react-router-dom";

import Admin from "./pages/admin";
import Home from "./pages/home";
import Login from "./pages/login";
import Networks from "./pages/networks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/admin/social",
    element: <Networks/>
  }
])

export default router