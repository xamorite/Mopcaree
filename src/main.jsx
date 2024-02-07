import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/Home'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Layout from './Layout'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Service from './components/services/Service'
import Courses from './components/Courses/Courses'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='courses' element={<Courses/>} />
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,

)
