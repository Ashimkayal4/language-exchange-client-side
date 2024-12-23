import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import Home from './pages/Home';
import FindTutors from './pages/FindTutors';
import AddTutorials from './pages/AddTutorials';
import MyTutorials from './pages/MyTutorials';
import MyBookedTutors from './pages/MyBookedTutors';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './provider/AuthProvider';
import ErrorPage from './pages/ErrorPage';
import Details from './pages/Details';
import PrivateRoute from './provider/PrivateRoute';
import FindTutorCategory from './pages/FindTutorCategory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/languages')
      },
      {
        path: "/find-tutors",
        element: <FindTutors></FindTutors>,
        loader: () => fetch('http://localhost:5000/tutorials')
      },
      {
        path: '/add-tutorials',
        element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
      },
      {
        path: '/my-tutorials',
        element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
      },
      {
        path: '/my-booked-tutors',
        element: <PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/tutorials')
      },
      {
        path: '/find-tutors/:language',
        element: <FindTutorCategory></FindTutorCategory>,
        loader: () => fetch('http://localhost:5000/tutorials')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
