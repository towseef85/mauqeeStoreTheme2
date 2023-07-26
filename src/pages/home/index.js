import React from 'react'
import Banner from './components/Banner'
import Service from './components/Service'
import AboutServices from './components/AboutServices'
import PopularProducts from './components/PopularProducts'
import { products } from '../../common/utils/data'
import { Product4 } from '../../assets/scripts'
import Brands from './components/Brands'
import Parallax from './components/Parallax'

export default function Home() {
  return (
    <>
    <Banner/>
    <Service/>
    <AboutServices/>
    <PopularProducts title="Popular Products" data={products} productSlider={Product4} spanClass={true}/>
    <Parallax/>
    <Brands/>
    </>
  )
}
