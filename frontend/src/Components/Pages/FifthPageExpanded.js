import React from "react";
import "../../styles/FifthPageExpanded.css";
import temp from "../../images/tmPlaceholder.jpg";
import cross from "../../images/cancel_white.svg";

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
        <img src={temp} />
      </div>
      <div className="textHolder">
        <div className="projectName">{selectedProject.Title}</div>
        <div className="shortDescription">
          {selectedProject.shortDescription}
        </div>
        <div className="Description">{selectedProject.Description}</div>
        <div>{selectedProject.link}</div>
      </div>
    </div>
  );
};

export default FifthPageExpanded;
