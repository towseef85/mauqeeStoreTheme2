import React from 'react'
import { Row, Col ,Container} from "reactstrap";
import Slider from "react-slick";
import { Slider4 } from '../../../assets/scripts';
import s1 from "../../../assets/images/services/s1.jpg"
import s2 from "../../../assets/images/services/s2.jpg"
import s3 from "../../../assets/images/services/s3.jpg"
import s4 from "../../../assets/images/services/s4.jpg"
import s5 from "../../../assets/images/services/s5.jpg"
import CategoryCard from '../../../common/catalog/CategoryCard';

const catData=[
    {
        img:s1,
        title:"Laptop Repair",
        desciption:"Sit back, relax and let us take care of your laptop",
        link:""
    },
    {
        img:s2,
        title:"Chip Level Maintanence",
        desciption:"We’ve a solution for all your chip level laptop problems",
        link:""
    },
    {
        img:s3,
        title:"Network & Printers",
        desciption:"Providing all the network and printing service at your doorstep",
        link:""
    },
    {
        img:s4,
        title:"Office Supplies",
        desciption:"Delivering office supplies to your office needs",
        link:""
    },
    {
        img:s5,
        title:"Web & Mobile Development",
        desciption:"Innovative ideas using latest tech stack for web and mobile industry",
        link:""
    }
]

export default function AboutServices() {
  return (
    <>
    <section>
    <Container>
        <Row>
            <Col lg="8" className="m-auto">
                <div className="title3">
                    <h2 className="title-inner3">welcome to tool store</h2>
                    <div className="line"></div>
                </div>
                <div className="about-text">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                </div>
            </Col>
            
            
        </Row>
    </Container>
</section>
<section className="pt-0 category-tools ratio3_2">
<Container>
    <Row>
    <Col>
    <Slider {...Slider4} className="slide-4 category-m no-arrow">

    {catData .map((data,i)=>(
        <CategoryCard
            key={i}
            title={data.title}
            img={data.img}
            link={data.link}
            description={data.desciption}
        />
        ))}
    </Slider>
    
    </Col>
    </Row>
</Container>
</section>
    </>
  )
}
