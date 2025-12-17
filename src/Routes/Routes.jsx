import { createBrowserRouter } from "react-router";
import HomePage from "../Layouts/Root";
import CompaniesDetails from "../Components/CompaniesDetails";
import Loading from "daisyui/components/loading";
import Profile from "../Components/Profile";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
    ]
  },
  {
    path: "/companyDetails/:id",
    Component: CompaniesDetails,
    loader: () => fetch("/companyDetails.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/profile",
    Component: Profile,
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