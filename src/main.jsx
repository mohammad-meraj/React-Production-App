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


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        path:"/",
        Component: Home,
      },
      {
        path:"/apps",
        Component: Apps,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
