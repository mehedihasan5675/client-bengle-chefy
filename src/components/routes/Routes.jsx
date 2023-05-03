import React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path:'/',
        element:<Home></Home>        
      },
      {
        path:'blog',
        element:<Blog></Blog>  
      },
      
    ]
      
    },
  ]);
