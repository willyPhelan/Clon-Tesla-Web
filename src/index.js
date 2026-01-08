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
import App from './App' ;



const router = createBrowserRouter([
  
  { path: "/", element: <App> <HomePage /> </App> , } , 

  { path: "/model_s", element: <App> <ModelS/> </App> , } ,

  { path: "/model_x", element:  <App> <ModelX/>  </App>, } ,

  { path: "/model_Y", element:  <App> <ModelY/> </App>   } ,

  { path: "/model_3", element: <App> <Model3/> </App>  } ,

  { path: "/cybertruck", element:  <App> <CyberTruck/> </App> , } ,

  { path: "/solar_roof", element: <App>  <SolarRoof/> </App> , } ,

  { path: "/solar_panels", element:  <App>  <SolarPanels/> </App> , } ,

  { path: "/powerwall", element:  <App> <Powerwall/>  </App> , } ,

  { path: "/shop", element: <App>  <Shop/>  </App>  , } ,

  { path: "/account", element:  <App>  <Account/>  </App>  } ,


])

const root = ReactDOM.createRoot(document.getElementById('root')) ;

root.render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>

) ;

