import config from "../config";
import ClientLayout from "../layouts/ClientLayout";
import Home from "../pages/Home/Home";

export const publicRoutes = [
  { path: config.routes.home, layout: ClientLayout, element: Home },
];
