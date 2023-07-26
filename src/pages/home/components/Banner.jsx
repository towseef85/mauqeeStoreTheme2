import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BannerItem from "./BannerItem";
import home1 from "../../../assets/images/home-banner/1.png";
import home2 from "../../../assets/images/home-banner/2.jpg";

const Data = [
  {
    img: home1,
    title: "Electronic Services",
    desc: "Get all the services at your door step",
    link: "",
  },
  {
    img: home2,
    title: "Purchase all your electronics online",
    desc: "Online Store",
    link: "",
  },
];
export default function Banner() {
  return (
    <section className="p-0">
      <Slider className="slide-1 home-slider absolute_banner" autoplay={true}>
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
  );
}
