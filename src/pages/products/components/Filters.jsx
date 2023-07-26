import React from "react";
import { Col } from "reactstrap";

export default function Filters({ sm, sidebarView, closeSidebar }) {
  return (
    <Col
      sm={sm}
      className="collection-filter"
      style={sidebarView ? { left: "0px" } : {}}
    >
      <div className="collection-filter-block">
        {/* <!-- brand filter start --> */}
        <div className="collection-mobile-back" onClick={() => closeSidebar()}>
          <span className="filter-back">
            <i className="fa fa-angle-left" aria-hidden="true"></i> back
          </span>
        </div>
      </div>
    </Col>
  );
}
