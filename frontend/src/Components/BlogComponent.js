import React from "react";
import Musings from "./BlogPages/Musings";
import Code from "./BlogPages/Code";
import Container from "react-bootstrap/Container";
import Economics from "./BlogPages/Economics";
import "../styles/BlogPage/BlogComponent.css";
const BlogComponent = () => {
  return (
    <Container>
      <div className="mainBlogPg">
        <Musings />
        <Economics />
        <Code />
      </div>
    </Container>
  );
};

export default BlogComponent;
