import {createBrowserRouter} from "react-router";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Basket from "../pages/basket/Basket.jsx";
import Notfound from "../pages/notfoud/Notfound.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            }
        ]
    },
    {
        path: "/admin",
        Component: Admin,
    },
    {
        path: "/basket",
        Component: Basket,
    },
    {
        path: "*",
        Component: Notfound,
    }
])