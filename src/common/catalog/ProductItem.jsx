import React,{useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Col, Media, Modal, ModalBody, ModalHeader } from "reactstrap";
import { CartContext } from '../../helpers/CartContext';

export default function ProductItem({
    product,
    spanClass,
    addCart,
    addWishlist
  }) {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const cartContext = useContext(CartContext);

    const plusQty = cartContext.plusQty;
    const minusQty = cartContext.minusQty;
    const quantity = cartContext.quantity;
    const setQuantity = cartContext.setQuantity;
    const uniqueTags = [];
    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value));
      };
    
      const clickProductDetail = () => {
        const titleProps = product.title.split(" ").join("");
        
        navigate(`/product-details/${product.id}` + "-" + `${titleProps}`);
      };
    
      let RatingStars = [];
      let rating = 5;
      for (var i = 0; i < rating; i++) {
        RatingStars.push(<i className="fa fa-star" key={i}></i>);
      }
  return (
    <div className="product-box product-wrap">
    <div className="img-wrapper">
      <div className="lable-block">
        {product.new === "true" ? <span className="lable3">new</span> : ""}
        {product.sale === "true" ? (
          <span className="lable4">on sale</span>
        ) : (
          ""
        )}
      </div>
      <div className="front">
        <a href={null}>
          <Media
            alt=""
            src={product.images[0].src}
            className="img-fluid blur-up lazyload bg-img"
          />
        </a>
      </div>
      <div className="cart-info cart-wrap">
        <a href={null} title="Add to Wishlist" onClick={addWishlist}>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </a>
        <button onClick={addCart} title="Add to cart">
          <i className="fa fa-shopping-cart"></i>
          {spanClass ? <span>Add to cart</span> : ""}
        </button>
        <a href={null} title="Compare" >
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </a>
     
      </div>
      <div className="quick-view-part">
        <a
          className="mobile-quick-view"
          href={null}
          data-toggle="modal"
          data-target="#quick-view"
          title="Quick View"
          onClick={toggle}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div className="product-info">
      <div className="rating">{RatingStars}</div>
      <h6>{product.title}</h6>
      <h4>
        SAR
        {(
          (product.price - (product.price * product.discount) / 100) *
          1
        ).toFixed(2)}
        <del>
          <span className="money">
          SAR
            {(product.price * 1).toFixed(2)}
          </span>
        </del>
      </h4>
    </div>
    <Modal
      isOpen={modal}
      toggle={toggle}
      className="quickview-modal"
      size="lg"
      centered
    >
      <ModalBody>
        <Row>
          <Col lg="6" xs="12">
            <div className="quick-view-img">
              <Media
                src={product.images[0].src}
                alt=""
                className="img-fluid"
              />
            </div>
          </Col>
          <Col lg="6" className="rtl-text">
            <div className="product-right">
              <h2> {product.title} </h2>
              <h3>
                SAR
                {(product.price * 1).toFixed(2)}
              </h3>
              {product.variants ? (
                <ul className="color-variant">
                  {uniqueTags ? (
                    <ul className="color-variant">
                      {uniqueTags.map((vari, i) => {
                        return (
                          <li
                            className={vari.color}
                            key={i}
                            title={vari.color}
                            
                          ></li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </ul>
              ) : (
                ""
              )}
              <div className="border-product">
                <h6 className="product-title">product details</h6>
                <p>{product.description}</p>
              </div>
              <div className="product-description border-product">
                {product.size ? (
                  <div className="size-box">
                    <ul>
                      {product.size.map((size, i) => {
                        return (
                          <li key={i}>
                            <a href={null}>{size}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                <h6 className="product-title">quantity</h6>
                <div className="qty-box">
                  <div className="input-group">
                    <span className="input-group-prepend">
                      <button
                        type="button"
                        className="btn quantity-left-minus"
                        onClick={minusQty}
                        data-type="minus"
                        data-field=""
                      >
                        <i className="fa fa-angle-left"></i>
                      </button>
                    </span>
                    <input
                      type="text"
                      name="quantity"
                      value={quantity}
                      onChange={changeQty}
                      className="form-control input-number"
                    />
                    <span className="input-group-prepend">
                      <button
                        type="button"
                        className="btn quantity-right-plus"
                        onClick={() => plusQty(product)}
                        data-type="plus"
                        data-field=""
                      >
                        <i className="fa fa-angle-right"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-buttons">
                <button
                  className="btn btn-solid"
                  onClick={() => addCart(product, quantity)}
                >
                  add to cart
                </button>
                <button
                  className="btn btn-solid"
                  onClick={clickProductDetail}
                >
                  View detail
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  </div>
  )
}
