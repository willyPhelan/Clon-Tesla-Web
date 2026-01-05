import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom" ;
import HomePage from './components/HomePage';
import ModelS from './components/ModelS';
import ModelX from './components/Modelx';
import CyberTruck from './components/CyberTruck';

const router = createBrowserRouter([
  
  { path: "/", element: <HomePage /> , } , 

  { path: "/model_s", element: <ModelS/> , } ,

  { path: "/model_x", element: <ModelX/> , } ,

  { path: "/cybertruck", element: <CyberTruck/> , } 

])

const root = ReactDOM.createRoot(document.getElementById('root')) ;

root.render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>

) ;

