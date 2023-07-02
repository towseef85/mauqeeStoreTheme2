import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import BannerItem from './BannerItem';
import home1 from '../../../assets/images/home-banner/1.jpg'
import home2 from '../../../assets/images/home-banner/2.jpg'

const Data = [
    {
      img: "home1",
      title: "welcome to fashion",
      desc: "men fashion",
      link: "/left-sidebar/collection ",
    },
    {
      img: "home2",
      title: "welcome to fashion",
      desc: "women fashion",
      link: "/left-sidebar/collection ",
    },
  ];
export default function Banner() {
  return (
    <section className="p-0">
    <Slider className="slide-1 home-slider" autoplay={true}>
      {Data.map((data, i) => {
        return (
          <BannerItem
            key={i}
            img={data.img}
            desc={data.desc}
            title={data.title}
            link={data.link}
          />
        );
      })}
    </Slider>
  </section>
  )
}
