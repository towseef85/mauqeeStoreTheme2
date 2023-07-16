import React,{useState} from 'react'
import ProductList from './components/ProductList'
import Filters from './components/Filters'
import { Container, Row} from 'reactstrap';


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
                        <Row>
                        <Filters sm="3" sidebarView={sidebarView} closeSidebar={() => openCloseSidebar(sidebarView)} />
                            <ProductList colClass="col-xl-3 col-6 col-grid-box" layoutList=''  openSidebar={() => openCloseSidebar(sidebarView)}/>
                        </Row>
                    </Container>
                </div>
    </section>
  )
}
