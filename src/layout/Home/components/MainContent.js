import React from "react";
import { Container } from "react-bootstrap";

const MainContent = (props) => {
  return <Container className="p-3">{props.children}</Container>;
};

export default MainContent;
