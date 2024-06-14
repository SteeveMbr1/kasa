import { createBrowserRouter } from "react-router-dom";
import RoutLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import _404 from "./pages/404/404";
import About from "./pages/About/About";

export default createBrowserRouter( [
    {
        path: "/",
        element: <RoutLayout />,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "a-propos",
                element: <About/>
            },
            {
                path: "location/:slug",
                element: <div>page des biens immobiliés</div>
            },
            {
                path:"*",
                element: <_404/>
            }
        ]
    }
] );