import React from 'react'
import Topbar from './Topbar'
import { Container, Row, Col, Media } from 'reactstrap'
import search from '../../assets/images/icon/search.png'
import Navbar from './Navbar'
import SearchOverlay from './components/search-overlay'
import logo from '../../assets/images/icon/logo/logo-new.png'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };
  return (
    <div>
        <header id="sticky" className='sticky'>
            <Topbar/>
            <Container>
          <Row>
            <Col>
            <div className="main-menu">
            <div className="menu-left">
            <div className="brand-logo">
                    <img src={logo} className="img-fluid"/>
                  </div>
            </div>
            <div className="menu-right pull-right">
              <Navbar/>
              <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <Media
                              src={search}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                            <i
                              className="fa fa-search"
                              onClick={openSearch}
                            ></i>
                          </div>
                        </li>
                        {/* <Currency icon={settings.src} /> */}
                        {/*Header Cart Component */}
                        {/* {direction === undefined ? (
                          // <></>
                          <CartContainer layout={direction} icon={cart.src} />
                        ) : (
                          
                          <Cart layout={direction} icon={cart.src} />
                        )} */}
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
            </Col>
            </Row>
          </Container>
        </header>
        <main>
          <Outlet/>
        </main>
        <Footer 
        newLatter={true}
        />
        <SearchOverlay />
    </div>
  )
}
