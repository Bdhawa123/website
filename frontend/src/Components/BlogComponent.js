import React from "react";
import Musings from "./BlogPages/Musings";
import Coding from "./BlogPages/Coding";
import TechnGadjets from "./BlogPages/TechnGadjets";

const BlogComponent = () => {
  return (
    <div className="mainBlogPg">
      <Musings />
      <Coding />
      <TechnGadjets />
    </div>
  );
};

export default BlogComponent;
