import React, { Fragment } from "react";
import Styles from "./navbar.module.css";
import {
  Col,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";

const AppNavBar = () => {
  return (
    <Fragment>
      <Navbar dir="ltr" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand  className="m-2">
          <Col>
            <Image src="logo192.png" roundedCircle />
          </Col>
        </Navbar.Brand>
        <Container style={{ width: "100px" }}>
          <span className={Styles.headerIcons}>
            {" "}
            <i className="fa-solid fa-user"></i>{" "}
          </span>
          <span onClick={
            ()=>console.log('icon 1 ')
          } className={Styles.headerIcons}>
            {" "}
            <i onClick={
              ()=>console.log('icon 2 ')
            } className="fa-regular fa-bell"></i>{" "}
          </span>
          <span onClick={
            ()=>console.log('icon 3 ')
          } className={Styles.headerIcons}>
            {" "}
            <i className="fa-solid fa-user"></i>{" "}
          </span>
        </Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default AppNavBar;
