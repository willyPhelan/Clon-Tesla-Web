import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom" ;
import HomePage from './components/HomePage';
import ModelS from './components/ModelS';
import ModelX from './components/Modelx';
import ModelY from './components/ModelY';
import Model3 from './components/Model3';
import CyberTruck from './components/CyberTruck';
import SolarRoof from './components/SolarRoof';
import SolarPanels from './components/SolarPanels';
import Powerwall from './components/Powerwall';
import Shop from './components/Shop';
import Account from './components/Account';



const router = createBrowserRouter([
  
  { path: "/", element: <HomePage /> , } , 

  { path: "/model_s", element: <ModelS/> , } ,

  { path: "/model_x", element: <ModelX/> , } ,

  { path: "/model_Y", element: <ModelY/>  } ,

  { path: "/model_3", element: <Model3/>  } ,

  { path: "/cybertruck", element: <CyberTruck/> , } ,

  { path: "/solar_roof", element: <SolarRoof/> , } ,

  { path: "/solar_panels", element: <SolarPanels/> , } ,

  { path: "/powerwall", element: <Powerwall/> , } ,

  { path: "/shop", element: <Shop/> , } ,

  { path: "/account", element: <Account/>  } ,


])

const root = ReactDOM.createRoot(document.getElementById('root')) ;

root.render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>

) ;

