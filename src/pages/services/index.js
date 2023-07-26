import React from 'react'
import { Container, Row, Col, Media} from "reactstrap";
import s1 from "../../assets/images/services/s1.jpg"
import s2 from "../../assets/images/services/s2.jpg"
import s3 from "../../assets/images/services/s3.jpg"
import s4 from "../../assets/images/services/s4.jpg"
import s5 from "../../assets/images/services/s5.jpg"

const catData=[
    {
        img:s1,
        title:"Laptop Repair",
        desciption:"Sit back, relax and let us take care of your laptop",
        moreDesc:"Get your device quickly diagnosed and urgently repaired near you with pickup and drop services. Book online now and get FREE inspection at the store.",
        link:""
    },
    {
        img:s2,
        title:"Chip Level Maintanence",
        desciption:"We’ve a solution for all your chip level laptop problems",
        moreDesc:"We offer ultimate Laptop Chip Level repairing service, All the leading Notebook, Mac, PC repair specialists. We also offer same day service, experts in computer chip-level repairs, Chip Level",
        link:""
    },
    {
        img:s3,
        title:"Network & Printers",
        desciption:"Providing all the network and printing service at your doorstep",
        moreDesc:"We unifies network hardware and software into a reliable, secure network infrastructure. Creative Solutions has extensive experience implementing networking projects at all levels, from local area networks in a small office to a massive offices",
        link:""
    },
    {
        img:s4,
        title:"Office Supplies",
        desciption:"Delivering office supplies to your office needs",
        moreDesc:'We are a B2B office supplies company with more than 35 years of experience, providing workplace essentials from daily consumables, office stationary, printers and toners more',
        link:""
    },
    {
        img:s5,
        title:"Web & Mobile Development",
        desciption:"Innovative ideas using latest tech stack for web and mobile industry",
        moreDesc:"Our web application software developers are industry-specific technology experts with many years of combined experience delivering interoperable, scalable, and flexible web & mobile applications for all kinds of industries.",
        link:""
    }
]

export default function Services() {
  return (
    <section className="section-b-space blog-page ratio2_3 no-sidebar">
    <Container>
        <Row>
            <Col>
            {catData.map((item, i) => (
          <Row className="blog-media" key={i}>
            <Col xl="6">
              <div className="blog-left">
                <a href="#">
                  <Media
                    src={item.img}
                    className="img-fluid blur-up lazyload bg-img"
                    alt=""
                  />
                </a>
              </div>
            </Col>
            <Col xl="6">
              <div className="blog-right">
                <div>
                  <h6>{item.title}</h6>
                
                  <p>{item.moreDesc}</p>
                </div>
              </div>
            </Col>
          </Row>
        ))}
            </Col>
        </Row>
    </Container>
    </section>
  )
}
