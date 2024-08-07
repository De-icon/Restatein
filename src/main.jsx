import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Properties } from './pages/properties'
import Layout from './Layout'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout /> ,
    errorElement: <NotFoundPage />,
    children:[
      {
        path:'/',
        element: <Home /> ,
      },
      {
        path:'/about',
        element: <About /> ,
      },
      {
        path:'/properties',
        element: <Properties /> ,
      },
    ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
