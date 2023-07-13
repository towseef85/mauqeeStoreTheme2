import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import SettingContext from '../../helpers/theme/SettingContext'
import i18next from "../constants/i18n"
import { useTranslation } from "react-i18next";

export default function Topbar() {
  const { t } = useTranslation();
  const context = useContext(SettingContext)
  const layoutType = context.layoutFun;
  const changeLang =(lng)=>{
   lng==="ar" ? layoutType("RTL"): layoutType("LTR")
    i18next.changeLanguage(lng)
  }
  return (
    <div className="top-header">
      <Container >
        
        <Row>
          <Col lg="6">
            <div className="header-contact">

              <ul>
                <li>Welcome to Our store Multikart</li>
                <li>
                  <i className="fa fa-phone text-white" aria-hidden="true"></i>Call Us: 123
                  - 456 - 7890
                </li>

              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-end">
         
            <ul className="header-dropdown">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
            <Button type="button" className="btn btn-style" onClick={()=> changeLang("en")}>EN</Button> 
            <Button type="button" className="btn btn-style" onClick={()=> changeLang("ar")}>AR</Button>
            </div>

              <li className="mobile-wishlist">
                <Link href="/page/account/wishlist">
                  <a>
                    <i className="fa fa-heart" aria-hidden="true"></i> {t("wishlist")}
                  </a>

                </Link>
             
              </li>
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i> {t("myAccount")}
                <ul className="onhover-show-div">
                  <li>
                    <Link href={`/page/account/login`}>
                      <a>{t('login')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/page/account/register`}>
                      <a>{t('register')}</a>
                    </Link>
                  </li>
                  <li>
                    <a>{t('logout')}</a>
                  </li>
                </ul>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
