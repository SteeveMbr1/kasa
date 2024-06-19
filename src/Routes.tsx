import { createBrowserRouter } from "react-router-dom";
import RoutLayout from "@layouts/RootLayout";
import Home from "@pages/Home/Home";
import _404 from "@pages/404/404";
import About from "@pages/About/About";
import Appartement from "@pages/Appartement/Appartement";

export default createBrowserRouter([
    {
        path: "/",
        element: <RoutLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "a-propos",
                element: <About />
            },
            {
                path: "appartement/:id",
                element: <Appartement />

            },
            {
                path: "*",
                element: <_404 />
            }
        ]
    }
]);