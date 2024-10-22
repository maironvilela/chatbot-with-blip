import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { env } from "../env"

export function App() {


    console.log('API KEY:', env.VITE_BLIP_API_KEY);
    console.log('API URL:', env.VITE_BLIP_API_URL);


    return (
        <div>
            <RouterProvider router={router} />
        </div>



    )

}

