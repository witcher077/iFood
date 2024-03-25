import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Authentication/login'

import {lazy, Suspense} from "react";

import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart"
import ResDetails from "./components/ResDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/Authentication/logout";

const Grocery =lazy(()=> import("./components/Grocery"))


const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
          {
              path: "/login",
              element: <Login />
          },
          {
            path: "/resister",
            element: <SignUp />
        },
          {
            path: "/",
            element: <Body />
        },
          {
              path: "/about",
              element: <About />
          },
          {
              path: "/contact",
              element: <Contact />
          },
          {
              path: "/cart",
              element: <Cart />
          },
          {
              path: "/grocery",
              element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
          },
          {
              path: "/restaurant/:reId",
              element: <ResDetails  />
          }
      ]
  }


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
