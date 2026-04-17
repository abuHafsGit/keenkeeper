import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import TimeLinePage from "../pages/Timelines";
import UserDetails from "../pages/UserDetails";
import StatusPage from "../pages/Status";
import Footer from "../components/Footer";
import Error from "../components/Error";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <> <Home /><Footer /></>
            },
            {
                path: '/timeline',
                element: <> <TimeLinePage /><Footer /></>
            },
            {
                path: '/status',
                element: <> <StatusPage /><Footer /></>
            },
            {
                path: "/userDetails/:id",
                loader: () => fetch('/data.json'),
                element: <><UserDetails /><Footer /></>
            }

        ],
        errorElement: <Error />

    },


])