import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
     <Container>
         <Row className="header__top">
             <Col xs="auto">
                 <a href="#"><span className="photo">Photo</span><span className="app">App</span></a>
             </Col>
         </Row>
     </Container>
    </header>
  );
};

Header.propTypes = {}

export default Header;
