import config from "../config";
import ClientLayout from "../layouts/ClientLayout";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";

export const publicRoutes = [
  { path: config.routes.home, layout: ClientLayout, element: Home },
  { path: config.routes.Signin, layout: ClientLayout, element: Signin },
  { path: config.routes.Signup, layout: ClientLayout, element: Signup },
];
