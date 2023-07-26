import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './common/layout';
import Products from './pages/products';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import Services from './pages/services';


export default function Router() {
  return (
    <Routes>
         <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='products/category' element={<Products/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
        <Route path='services' element={<Services/>}/>
        </Route>
    </Routes>
  )
}
