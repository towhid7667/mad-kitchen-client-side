import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Allfoods from "../Pages/AllFOODS/Allfoods";
import FoodDetails from "../Pages/FoodDETAILS/FoodDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import Register from './../Pages/Register/Register';
import UpdateItem from './../Components/UpdateItem/UpdateItem';
import Four from "../Components/404/Four";




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

            },
            {
                path : '/allfoods/:id',
                element: <FoodDetails></FoodDetails>,
                loader : ({params})=> fetch(`https://mad-kitchen-server-towhid7667.vercel.app/allfoods/${params.id}`)

            },
            {
                path : '/updateInfo/:id',
                element: <UpdateItem></UpdateItem>,
                loader : ({params})=> fetch(`https://mad-kitchen-server-towhid7667.vercel.app/allfoods/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },


            

           
        ]

    },
    {
        path : '*',
        element: <Four></Four>

    }
])