import React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe/ChefRecipe";
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
      {
        path:'chef-recipes/:id',
        element:<ChefRecipe></ChefRecipe>,
        loader:({params})=>fetch(`http://localhost:7000/chef/${params.id}`)
      }
    ]
      
    },
  ]);
