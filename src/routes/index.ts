import config from "../config";
import ClientLayout from "../layouts/ClientLayout";
import Home from "../pages/Home/Home";
import NewPage from "../pages/NewPage/NewPage";
import SearchBlog from "../pages/Search/SearchBlog";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import Blogs from "./../pages/Blogs/Blogs";
import SubCategoryPage from "./../pages/NewPage/SubCategoryPage";

export const publicRoutes = [
  { path: config.routes.home, layout: ClientLayout, element: Home },
  { path: config.routes.Signin, layout: ClientLayout, element: Signin },
  { path: config.routes.Signup, layout: ClientLayout, element: Signup },
  { path: config.routes.Blogs, layout: ClientLayout, element: Blogs },
  { path: config.routes.newBlog, layout: ClientLayout, element: NewPage },
  {
    path: config.routes.SubCategoryPage,
    layout: ClientLayout,
    element: SubCategoryPage,
  },
  { path: config.routes.searchBlog, layout: ClientLayout, element: SearchBlog },
];
