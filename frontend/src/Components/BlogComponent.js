import React from "react";
import Musings from "./BlogPages/Musings";
import TechnGadjets from "./BlogPages/TechnGadjets";
import Container from "react-bootstrap/Container";
import Economics from "./BlogPages/Economics";
import "../styles/BlogPage/BlogComponent.css";
const BlogComponent = () => {
  return (
    <Container>
      <div className="mainBlogPg">
        <Musings />
        <Economics />
        {/* <TechnGadjets /> */}
      </div>
    </Container>
  );
};

export default BlogComponent;
