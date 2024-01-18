import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Layout from './Layout'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Service from './Service'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,

)
