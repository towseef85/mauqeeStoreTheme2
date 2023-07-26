import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { Slider6 } from "../../../assets/scripts";
import Slider from "react-slick";
import img1 from "../../../assets/images/logos/1.png";
import img2 from "../../../assets/images/logos/2.png";
import img3 from "../../../assets/images/logos/3.png";
import img4 from "../../../assets/images/logos/4.png";
import img5 from "../../../assets/images/logos/5.png";
import img6 from "../../../assets/images/logos/6.png";

const imgData = [img1, img2, img3, img4, img5, img6];

export default function Brands() {
  return (
    <div className="section-b-space">
      <Container>
        <Row>
          <Col md="12">
            <Slider {...Slider6} className="slide-6 no-arrow">
              {imgData.map((img, i) => (
                <div key={i}>
                  <div className="logo-block">
                    <a href={null}>
                      <Media src={img} alt="" />
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
