import React from "react";
import "../../styles/ScndPage.css";
import profile_pic from "../../images/profile_pic.png";

const ScndPage = () => {
  return (
    <div className="backgrnd">
      <div className="leftContainer">
        <div className="textContainer">Some Word Things</div>
        <div className="imgDiv">
          <img src={profile_pic} />
        </div>
      </div>

      <div className="navColumn">
        <div>Blog</div>
        <div>Photography</div>
        <div>Movies</div>
        <div>Portfolio</div>
        <div>Philosophical Cues</div>
      </div>
    </div>
  );
};

export default ScndPage;
