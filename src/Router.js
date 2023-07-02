import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './common/layout';

export default function Router() {
  return (
    <Routes>
         <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        </Route>
    </Routes>
  )
}
