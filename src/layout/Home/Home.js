import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import { Col, Row } from "react-bootstrap";
import AppNavBar from "../../components/NavBar/AppNavBar";
import MainContent from "./components/MainContent";

const Home = ({ content }) => {
  return (
    <Row>
    <SideBar />
      <Col className="mainContainer">
          <AppNavBar />
          <MainContent>{content}</MainContent>
      </Col>
    </Row>
  );
};

export default Home;
