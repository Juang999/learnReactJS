import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import ErrorPage from "./pages/error"
import ProductPage from "./pages/products"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />
  }, {
    path: 'login',
    element: <LoginPage />
  }, {
    path: '/register',
    element: <RegisterPage />
  }, {
    path: '/products',
    element: <ProductPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
