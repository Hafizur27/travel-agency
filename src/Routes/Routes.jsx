import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Destination from "../Pages/Destination/Destination";
import About from "../Pages/About/About";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "destination",
                element: <Destination />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "login",
                element: <LogIn />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
])
