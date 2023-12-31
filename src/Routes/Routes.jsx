import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import TicTacToe from "../components/TicTacToe/TicTacToe";
import ErrorPage from "../Layout/ErrorPage";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About/About";
import Destination from "../Pages/Destination/Destination/Destination";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";




export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Navigate to="/home"></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      
    ]
  },
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/home',
            element: <Home></Home>
        },
        {
          path: '/destination',
          element: <Destination></Destination>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/game',
          element: <TicTacToe></TicTacToe>
        },
      ]
    }
  ]);