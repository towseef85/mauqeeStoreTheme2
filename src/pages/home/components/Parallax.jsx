import React from "react";
import { Col, Container, Row } from "reactstrap";
import img from "../../../assets/images/home-banner/1.png";

export default function Parallax({
  title = "2022",
  subTitle1 = "Best Electronics",
  subTitle2 = "Buy Now",
}) {
  return (
    <section className="p-0" style={{ marginBottom: "40px" }}>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundAttachment: "fixed",
          padding: "40px",
        }}
      >
        <div className="full-banner text-center">
          <Container>
            <Row>
              <Col>
                <div className="banner-contain">
                  <h2>{title}</h2>
                  <h3>{subTitle1}</h3>
                  <h4>{subTitle2}</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}
