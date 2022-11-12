import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Allfoods from "../Pages/AllFOODS/Allfoods";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children: [
            {
                path  : '/',
                element : <Home></Home>
            },
            {
                path : '/allfoods',
                element: <Allfoods></Allfoods>,
                loader : ()=> fetch('https://mad-kitchen-server-towhid7667.vercel.app/allfoods')

            }
        ]

    }
])