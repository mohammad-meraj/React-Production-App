import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Componants/Root/Root.jsx';
import Error from './Componants/Pages/Error.jsx';
import Home from './Componants/Home/Home.jsx';
import Apps from './Componants/Pages/Apps/Apps.jsx';
import Installation from './Componants/Pages/Installation/Installation.jsx';
import AppDetails from './Componants/Pages/Apps/AppDetails.jsx';
import axios from 'axios';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        path:"/",
        loader: async ()=>{
          const res=await axios.get('/AppsData.json');
          return res.data;
        },
        Component: Home,
      },
      {
        path:"/apps",
         loader: async ()=>{
          const res=await axios.get('/AppsData.json');
          return res.data;
        },
        Component: Apps,
      },
      {
        path:"/installation",
        loader: async ()=>{
          const res=await axios.get('/AppsData.json');
          return res.data;
        },
        Component: Installation,
      },
      {
        path:"/appDetails/:id",
       loader: async ({params})=>{
          const res=await axios.get('/AppsData.json');
          const info= res.data.find(app=> app.id === parseInt(params.id));
           return info;
        },
        Component:AppDetails,
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
