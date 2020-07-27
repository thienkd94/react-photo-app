import React from "react";
import { Col, Row, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
     <Container>
         <Row className="justify-content-between header__top">
             <Col xs="auto">
                 <a href="#"><span className="photo">Photo</span><span className="app">App</span></a>
             </Col>
             <Col xs="auto">
                <NavLink to="/photos">Home</NavLink>
             </Col>
         </Row>
     </Container>
    </header>
  );
};

Header.propTypes = {}

export default Header;
