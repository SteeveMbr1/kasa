import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../src/layouts/DefaultLayout";
import Home from "../src/pages/Home/Home";
import _404 from "../src/pages/404/404";
import About from "../src/pages/About/About";
import Appartement from "../src/pages/Appartement/Appartement";
import { fetchAll, fetchById } from "./services/services.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "",
                element: <Home />,
                loader :async () => {
                    const json = await fetchAll()
                    if ( !json ) {
                        throw new Response("Not Found", { status: 404 });
                    }
                    return json;
                }
            },
            {
                path: "a-propos",
                element: <About />
            },
            {
                path: "appartement/:id",
                element: <Appartement />,
                loader :async ({params}) => {
                    const json = await fetchById(params.id)
                    if ( !json ) {
                        throw new Response("Not Found", { status: 404 });
                    }
                    return json;
                },
                errorElement: <_404 />
            },
            {
                path: "*",
                element: <_404 />
            }
        ]
    }
])

export default router;