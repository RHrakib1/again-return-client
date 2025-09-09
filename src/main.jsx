import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Component/Login/Login.jsx'
import Register from './Component/Register/Register.jsx'
import Home from './Component/Home/Home.jsx'
import AuthProvider, { AuthContext } from './Component/AuthProvider.jsx'
import Update from './Component/Server/Update.jsx'
import AddReturn from './Component/Server/AddReturn.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <App></App>
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
        path: '/addreturn',
        element: <AddReturn></AddReturn>
      },
      {
        path: '/updatereturn',
        element: <Update></Update>
      },
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
