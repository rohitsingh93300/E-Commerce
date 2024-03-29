import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import { AppProvider } from './components/Context/ProductContext.jsx';
import { FilterContextProvider } from './components/Context/Filter_context.jsx';
import SingalProduct from './components/SingalProduct.jsx';
import AllProducts from './components/AllProducts.jsx';
import { CartProvider } from './components/Context/cart_context.jsx';
import Cart from './components/Cart.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Hero heading="This is Home page"/>
      },
      {
        path: "product",
        element: <AllProducts/>,
      },
      {
        path: "about",
        element: <Hero heading="This is About page"/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "cart",
        element: <Cart/>,
      },
      {
        path: "singleproduct/:id",
        element: <SingalProduct/>,
      },
      {
        path: "*",
        element: <ErrorPage/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="rohitsingh93300.us.auth0.com"
  clientId="VzBGiNFPmheZzKpMqi2wH5wy192yn0Tw"
  authorizationParams={{
    redirect_uri: window.location.origin}}>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
    </FilterContextProvider>
    </AppProvider>
    </Auth0Provider>
)
