import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Loggin from "../Pages/Login/Loggin";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path:"/",
      element:<Root></Root>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader:() => fetch('/commercial.json')
        },
        {
            path:'/login',
            element:<Loggin></Loggin>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:'/estate/:id',
          element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
          loader: () =>fetch('/commercial.json')
        }
      ]
    },
    
  ]);

export default router;