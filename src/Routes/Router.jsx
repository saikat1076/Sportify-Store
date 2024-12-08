import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Layouts from "../Layouts/Layouts";
import AuthLayouts from "../Layouts/AuthLayouts";
import AddEquipment from "../Pages/AddEquipment";
import Home from "../Pages/Home";
import EquipmentCards from "../Components/EquipmentCards";
import EquipmentDetails from "../Components/EquipmentDetails";
import AllEquipment from "../Components/AllEquipment";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import MyEquipment from "../Components/MyEquipment";
import UpdateEquipment from "../Components/UpdateEquipment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {

              path: '/',
              element: <EquipmentCards></EquipmentCards>,
              loader: () => fetch('https://a-sports-equipment-store.vercel.app/equipment')

          }

      ]
      },
      {
        path: "/add-equipment",
        element: <PrivateRoutes><AddEquipment></AddEquipment></PrivateRoutes>
      },
      {
        path: "/update-equipment/:id",
        element: <PrivateRoutes><UpdateEquipment></UpdateEquipment></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://a-sports-equipment-store.vercel.app/equipment/${params.id}`),

      },
      {
        path: "/all-equipment",
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch("https://a-sports-equipment-store.vercel.app/equipment"), 
      },
      {
        path: "/my-equipment",
        element: <MyEquipment></MyEquipment>,
      },
      {
        path: "/equipment/:id",
        element: <PrivateRoutes><EquipmentDetails></EquipmentDetails></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://a-sports-equipment-store.vercel.app/equipment/${params.id}`),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
