import React from 'react'
import { Media, Container, Col, Row } from "reactstrap";

export default function CategoryCard({img,title,link,description}) {
  return (
  <div className="category-wrapper pt-0">
        
          <div>
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <h4>{title}</h4>
            <p>{description}</p>
          <a href={link} className="btn btn-classic btn-outline">
            view more
          </a>
       
    </div>
  
  )
}
