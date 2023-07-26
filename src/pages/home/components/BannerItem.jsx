import React from "react";
import { Col, Container, Media, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function BannerItem({
  img,
  title,
  desc,
  link,
  classes,
  btn,
  btnClass,
}) {
  return (
    <div className="collection-banner">
      {/* <div
        style={{ background: img }}
        className={`home ${classes ? classes : "text-center"}`}
      > */}
      <Media src={img} className="img-fluid blur-up lazyload bg-img" />
      <div className="absolute-contain">
        <h1>{title}</h1>
        <h4>{desc}</h4>
        <Link style={{ marginTop: "10px", display: "block" }} href={link}>
          <a className={`btn ${btnClass ? btnClass : "btn-solid"}`}>
            {btn ? btn : "Shop Now"}{" "}
          </a>
        </Link>
      </div>
      {/* <Container>
        <Row>
          <Col>
            <div className="slider-contain">
              <div>
                <h4 className="text-white">{title}</h4>
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
      </Container> */}
      {/* </div> */}
    </div>
  );
}
