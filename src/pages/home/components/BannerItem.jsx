import React from 'react'
import { Col, Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';

export default function BannerItem({ img, title, desc, link, classes, btn, btnClass }) {
  return (
    <div>
    <div className={`home ${img} ${classes ? classes : "text-center"}`}>
      <Container>
        <Row>
          <Col>
            <div className="slider-contain">
              <div>
                <h4>{title}</h4>
                <h1>{desc}</h1>
                <Link href={link}>
                  <a className={`btn ${btnClass ? btnClass : "btn-solid"}`}>
                    {btn ? btn : "Shop Now"}{" "}
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  )
}
