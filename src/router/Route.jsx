import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";
import AddHouse from "../pages/Dashboard/HouseOwner/AddHouse";
import MyHouses from "../pages/Dashboard/HouseOwner/MyHouses";
import UpdateHouse from "../pages/Dashboard/HouseOwner/UpdateHouse";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <Home/>
      },

      {
        path: "login",
        element: <Login/>
      },
      
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "about-us",
        element: <AboutUs/>
      },
      {
        path: "/blog",
        element: <Blog/>
      }

    ]
  },


        {
          path: "dashboard",
          element: <Dashboard />,
          errorElement: <ErrorPage />,
          children: [
          //   {
          //     path: "student/enrolled-classes",
          //     element: <EnrolledClasses />,
          //   },
          //   {
          //     path: "student/selected-classes",
          //     element: <SelectedClasses />,
          //   },
          //   {
          //     path: "student/payment-history",
          //     element: <PaymentHistory />,
          //   },
          //   {
          //     path: "student/payment/:id",
          //     element: <Payment/>,
          //     loader: ({ params }) =>
          //       fetch(`https://summer-camp-server-teal.vercel.app/student/payment/${params.id}`),
          //   },
            
            {
              path: "house-owner/add-house",
              element: <AddHouse/>,
            },
            {
              path: "house-owner/my-houses",
              element: <MyHouses />
            },
      
            {
              path: "house-owner/myHouses/:id",
              element: <UpdateHouse />,
              loader: ({ params }) =>
              fetch(`https://house-hunter-server-alpha.vercel.app/house-owner/myHouses/${params.id}`),
            },
      
          
          ],
        },

]);

  
  