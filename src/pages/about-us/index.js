import React from 'react'
import aboutus from '../../assets/images/about/about-us.jpg';
import { Container, Row, Col, Media } from "reactstrap";
import Service from '../home/components/Service';

export default function AboutUs() {
  return (
    <>
    <section className="about-page section-b-space">
      <Container>
        <Row>
          <Col lg="12">
            <h3 className='text-center pb-2'>WHO WE ARE</h3>
          <div className="banner-section">
            <Media src={aboutus}
               className="img-fluid blur-up lazyload"
               alt=""
             />
          </div>
          </Col>
          <Col sm="12">
          <h4>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium,
                </p>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain. These cases are perfectly simple
                  and easy to distinguish. In a free hour, when our power of
                  choice is untrammelled and when nothing prevents our being
                  able to do what we like best, every pleasure is to be welcomed
                  and every pain avoided. But in certain circumstances and owing
                  to the claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.
                </p>
          </Col>
       
        </Row>
      </Container>
      </section>
      <div className="section-b-space" style={{marginTop:'40px'}}>
            <Service/>
          </div>
    </>
  )
}
