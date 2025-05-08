import {createBrowserRouter} from "react-router";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Basket from "../pages/basket/Basket.jsx";
import Notfound from "../pages/notfoud/Notfound.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/",
                component: Home,
            }
        ]
    },
    {
        path: "/admin",
        component: Admin,
    },
    {
        path: "/basket",
        component: Basket,
    },
    {
        path: "*",
        component: Notfound,
    }
])