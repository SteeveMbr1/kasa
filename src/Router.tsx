import { createBrowserRouter } from "react-router-dom";
import RoutLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import _404 from "./Pages/_404";

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
                element: <div>Page à propos</div>
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