import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './Page/Login';
import Register from './Page/Register';
import ErrorPage from './Page/404';
import Products from './Page/products';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>Edu Juanda Pratama</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login title='Login' />
  },
  {
    path: "/register",
    element: <Register title='Register' />
  },
  {
    path: "/products",
    element: <Products />
  }
]);

const root = createRoot(document.getElementById('root')); // Create root using createRoot

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
