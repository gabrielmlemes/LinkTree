import { createBrowserRouter } from "react-router-dom";

import Admin from "./pages/admin";
import Home from "./pages/home";
import Login from "./pages/login";
import Networks from "./pages/networks";

import {Private} from './routes/Private'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/admin",
    element: <Private><Admin/></Private>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/admin/social",
    element: <Private><Networks/></Private>
  }
])

export default router