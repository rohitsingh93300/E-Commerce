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
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
    <RouterProvider router={router} />
    </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>,
)
