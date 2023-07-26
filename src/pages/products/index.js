import React,{useState} from 'react'
import ProductList from './components/ProductList'
import Filters from './components/Filters'
import { Container, Row} from 'reactstrap';
import logo from '../../assets/images/icon/logo/logo-new.png'
import { Link } from 'react-router-dom';


export default function Products() {
    const [sidebarView,setSidebarView] = useState(false)
    
    const openCloseSidebar = () => {
        if(sidebarView){
            setSidebarView(!sidebarView)
        } else {
            setSidebarView(!sidebarView)
        }
    }

  return (
     <section className="section-b-space ratio_asos">
                <div className="collection-wrapper">
                    <Container>
                        {/* <Row>
                        <Filters sm="3" sidebarView={sidebarView} closeSidebar={() => openCloseSidebar(sidebarView)} />
                            <ProductList colClass="col-xl-3 col-6 col-grid-box" layoutList=''  openSidebar={() => openCloseSidebar(sidebarView)}/>
                        </Row> */}
                           <>
            <div className="template-password">
                <div className="container">
                    <div id="container" className="text-center">
                        <div>
                            <div id="login">
                                <div>
                                    <div className="logo mb-4">
                                        <a href="#">
                                            <img src={logo} alt="Multikart_fashion" className="img-fluid" />
                                        </a>
                                    </div>
                                    <h2 className="mb-3 text-dark">
                                        Will be Opening Soon!
                            </h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <form action="#" className="theme-form">
                                            <div className="col-md-12 mt-2">
                                                <h3 className='text-dark'>Enter Your Email: </h3>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-12">
                                                    <input type="email" name="email" id="email" className="form-control"
                                                        autoFocus="" />
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="actions">
                                                        <button type="submit" className="btn btn-solid">notify me</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div id="footer" className="mt-4 text-dark">
                                    <div id="owner">
                                        Are you the store owner? <Link href=''>Log in here</Link> or <a href="#">change your password
                                    settings</a>
                                    </div>
                                </div>
                            </div>
                            <div id="powered">
                                <p>© 2022, Powered by MaktabStore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
                    </Container>
                </div>
    </section>
  )
}
