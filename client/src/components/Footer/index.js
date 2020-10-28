import React from "react";
import { Row, Col } from "reactstrap";

const Footer = () => (
  <div className="footer">
    <Col xs={{ size: 12, offset: 1 }} sm={{ size: 6, offset: 4 }} lg={{ size: 3, offset: 5}}>
    <Row>
    <p>teachmeto© 2020</p> |  | 
      <a class="nullA" href="https://github.com/evkonradi/teach-me-to">Proudly made in Texas</a>
    </Row>
    </Col>
  </div>
);

export default Footer;