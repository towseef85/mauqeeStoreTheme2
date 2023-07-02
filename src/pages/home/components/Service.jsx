import React from 'react'
import { Container, Row, Col } from "reactstrap";
import {  svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment, } from '../../../assets/scripts'
import MasterServiceContent from './MasterServiceContent';

    const Data = [
        {
          link: svgFreeShipping,
          title: "free shipping",
          service: "free shipping world wide",
        },
        {
          link: svgservice,
          title: "24 X 7 service",
          service: "online service for 24 x 7",
        },
        {
          link: svgoffer,
          title: "festival offer",
          service: "new online special festival offer",
        },
        {
          link: svgpayment,
          title: "online payment",
          service: "new online special festival offer",
        },
      ];

export default function Service() {
  return (
    <section className="banner-padding absolute-banner pb-0 tools-service">
    <Container className="absolute-bg">
      <div className="service p-0 ">
        <Row>
          {Data.map((data, i) => {
            return (
              <Col
                key={i}
                lg="3"
                sm="6"
                className= "service-block"
              >
                <MasterServiceContent
                  link={data.link}
                  title={data.title}
                  service={data.service}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  </section>
  )
}
