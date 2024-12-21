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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: "/find-tutors",
        element:<FindTutors></FindTutors>
      },
      {
        path: '/add-tutorials',
        element:<AddTutorials></AddTutorials>
      },
      {
        path: '/my-tutorials',
        element:<MyTutorials></MyTutorials>
      },
      {
        path: '/my-booked-tutors',
        element:<MyBookedTutors></MyBookedTutors>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
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
