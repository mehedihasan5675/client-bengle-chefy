import React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe/ChefRecipe";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
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
        loader:({params})=>fetch(`https://chef-recipe-hunter-server-side-lilac.vercel.app/chef/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
      
    },
  ]);
