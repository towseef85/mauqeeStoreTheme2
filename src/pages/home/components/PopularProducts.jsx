import React,{useContext} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from "react-slick";
import PostLoader from '../../../helpers/PostLoader';
import ProductItem from '../../../common/catalog/ProductItem';
import { CartContext } from '../../../helpers/CartContext';

export default function PopularProducts({subtitle,title,spanClass,productSlider, data}) {
    const context = useContext(CartContext);
    const quantity = context.quantity;
  return (
    <section className='section-b-space tools-grey ratio_square'>
<Container>
            <Row>
              <Col>
                <div className="title3">
                  {subtitle ? <h4>{subtitle}</h4> : ""}
                  <h2 className="title-inner3">{title}</h2>
                  <div className="line"></div>
                </div>
                <Slider
                    {...productSlider}
                    className="product-5 product-m no-arrow"
                  >
                    {data &&
                      data.slice(0, 8).map((product, index) => (
                        <div key={index}>
                          <ProductItem
                            product={product}
                            spanClass={spanClass}
                            addToCompare={() =>
                            //   contextCompare.addToCompare(product)
                            console.log("add to compare",product)
                            }
                            addWishlist={() =>
                            //   contextWishlist.addToWish(product)
                            console.log("add to wishlist",product)
                            }
                            addCart={() => context.addToCart(product, quantity)}
                          />
                        </div>
                      ))}
                  </Slider>
              </Col>
            </Row>
          </Container>
    </section>
  )
}
