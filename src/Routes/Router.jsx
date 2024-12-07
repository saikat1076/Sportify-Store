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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [



          {

              path: '/',

              element: <EquipmentCards></EquipmentCards>,

              loader: () => fetch('http://localhost:5000/equipment')

          }

      ]
      },
      {
        path: "/add-equipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/all-equipment",
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch("http://localhost:5000/equipment"), 
      },
      {
        path: "/equipment/:id",
        element: <EquipmentDetails></EquipmentDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipment/${params.id}`),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
