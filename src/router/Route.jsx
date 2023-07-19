import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login/>
      },
      
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      }
    ]
  },


        {
          path: "dashboard",
          element: <Dashboard />,
          errorElement: <ErrorPage />,
          // children: [
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
            
          //   {
          //     path: "instructors/add-class",
          //     element: <InstructorRoute><AddClass /></InstructorRoute>,
          //   },
          //   {
          //     path: "instructors/my-classes",
          //     element: <InstructorRoute><MyClasses /></InstructorRoute>,
          //   },
      
          //   {
          //     path: "instructor/myClasses/:id",
          //     element: <InstructorRoute><UpdateClass /></InstructorRoute>,
          //     loader: ({ params }) =>
          //     fetch(`https://summer-camp-server-teal.vercel.app/instructor/myClasses/${params.id}`),
          //   },
      
          //   {
          //     path: "admin/manage-users",
          //     element: <AdminRoute><ManageUsers /></AdminRoute>,
          //   },
          //   {
          //     path: "admin/manage-classes",
          //     element: <AdminRoute><MangeClasses /></AdminRoute>,
          //   },
          //   {
          //     path: "admin/manage-users/feedback/:id",
          //     element: <AdminRoute><Feedback /></AdminRoute>,
          //     loader: ({ params }) =>
          //       fetch(`https://summer-camp-server-teal.vercel.app/instructor/myClasses/${params.id}`),
          //   },
          // ],
        },

]);

  
  