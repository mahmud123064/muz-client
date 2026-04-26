import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import New from "../New/New";
import BlogDetail from "../Blog/BlogDetail";
import CreateBlog from "../Blog/CreateBlog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/new",
                element: <New></New>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/blog/create",
                element: <CreateBlog />,
            },
            {
                path: "/blog/:id",
                element: <BlogDetail />,
            },
        ],
    },
]);

export default router;
