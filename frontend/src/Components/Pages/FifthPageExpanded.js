import React, { useState } from "react";
import "../../styles/FifthPageExpanded.css";
import temp from "../../images/tmPlaceholder.jpg";
import cross from "../../images/cancel_white.svg";
import { Carousel } from "react-bootstrap";

const Slides = ({ images }) => {
  return (
    <Carousel variant="dark">
      {images.map((image) => {
        return (
          <Carousel.Item>
            <img src={image} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

const FifthPageExpanded = ({ selectedProject, toggle }) => {
  return (
    <div className="projectModal">
      <div
        className="cross"
        onClick={() => {
          toggle(false);
        }}
      >
        <img src={cross} style={{ width: "30px" }} />
      </div>
      <div className="imageHolder">
        {selectedProject.imgLink != null ? (
          <Slides images={selectedProject.imgLink} />
        ) : null}
      </div>
      <div className="textHolder">
        <div
          className="projectName"
          onClick={() => {
            window.open(selectedProject.gitRepo);
          }}
        >
          {selectedProject.Title}
        </div>
        <div className="shortDescription">
          {selectedProject.shortDescription}
        </div>
        <div className="Description">{selectedProject.Description}</div>
        <div className="language">LANGUAGES:{selectedProject.languages}</div>
      </div>
    </div>
  );
};

export default FifthPageExpanded;
