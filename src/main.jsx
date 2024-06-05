import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/home/Home'
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home/>},
      { path: 'shop', element: <Shop/> },
      { path: 'cart', element: <Cart/> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)