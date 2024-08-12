import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@layouts/DefaultLayout.tsx";
import Home from "@pages/Home/Home";
import _404 from "@pages/404/404";
import About from "@pages/About/About";
import Appartement from "@pages/Appartement/Appartement";
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