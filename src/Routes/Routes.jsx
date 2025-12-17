import { createBrowserRouter } from "react-router";
import HomePage from "../Layouts/Root";
import CompaniesDetails from "../Components/CompaniesDetails";
import Loading from "daisyui/components/loading";
import Profile from "../Components/Profile";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
    ]
  },
  {
    path: "/companyDetails/:id",
    element: <PrivateRoutes><CompaniesDetails></CompaniesDetails></PrivateRoutes>,
    loader: () => fetch("/companyDetails.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/profile",
    element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register
  }
]);