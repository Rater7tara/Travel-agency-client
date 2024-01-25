import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import TicTacToe from "../components/TicTacToe/TicTacToe";
import ErrorPage from "../Layout/ErrorPage";
import Main from "../Layout/Main";
import About from "../Pages/About/About/About";
import Destination from "../Pages/Destination/Destination/Destination";
import Games from "../Pages/Games/Games";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";




export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'destination',
        element: <Destination></Destination>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'game',
        element: <TicTacToe></TicTacToe>
      },
      {
        path:'memory',
        element: <Games></Games>
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
  ]);