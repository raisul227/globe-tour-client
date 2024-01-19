import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Signup from "../pages/Authentication/Signup/Signup";
import Login from "../pages/Authentication/Login/Login";
import AllServices from "../pages/AllServices/AllServices";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services',
                element: <PrivateRoute><AllServices></AllServices></PrivateRoute>,
                loader: () => fetch('https://globe-tour-server-raisul227.vercel.app/allServices')
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://globe-tour-server-raisul227.vercel.app/allServices/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router;