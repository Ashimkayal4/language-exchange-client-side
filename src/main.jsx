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
import UpdateTutorial from './pages/UpdateTutorial';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-eleven-server-side-drab.vercel.app/languages')
      },
      {
        path: "/find-tutors",
        element: <FindTutors></FindTutors>,
        loader: () => fetch('https://assignment-eleven-server-side-drab.vercel.app/tutorials')
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
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('https://assignment-eleven-server-side-drab.vercel.app/tutorials')
      },
      {
        path: '/find-tutors/:language',
        element: <FindTutorCategory></FindTutorCategory>,
        loader: () => fetch('https://assignment-eleven-server-side-drab.vercel.app/tutorials')
      },
      {
        path: '/update-tutorial/:id',
        element: <PrivateRoute><UpdateTutorial></UpdateTutorial></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-eleven-server-side-drab.vercel.app/tutorials/${params.id}`)
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
