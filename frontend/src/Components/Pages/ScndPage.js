import React from "react";
import "../../styles/ScndPage.css";
import profile_pic from "../../images/profile_pic.png";

const ScndPage = () => {
  const scrollTo = (bookmark) => {
    switch (bookmark) {
      case "Blog":
        console.log("Blog");
        break;
      case "Photography":
        window.scroll(0, 2650);
        break;

      case "Movies":
        window.scroll(0, 4475);
        break;

      case "Portfolio":
        window.scroll(0, 3550);
        break;
      case "Philosophy":
        window.scroll(0, 5275);
        break;

      default:
    }

    console.log("Wake up");
    // window.scroll(0, 0);
  };
  return (
    <div className="backgrnd">
      <div className="leftContainer">
        <div className="textContainer">Some Word Things</div>
        <div className="imgDiv">
          <img src={profile_pic} />
        </div>
      </div>

      <div className="navColumn">
        <div
          onClick={() => {
            scrollTo("Blog");
          }}
        >
          Blog
        </div>
        <div
          onClick={() => {
            scrollTo("Photography");
          }}
        >
          Photography
        </div>
        <div
          onClick={() => {
            scrollTo("Movies");
          }}
        >
          Movies
        </div>
        <div
          onClick={() => {
            scrollTo("Portfolio");
          }}
        >
          Portfolio
        </div>
        <div
          onClick={() => {
            scrollTo("Philosophy");
          }}
        >
          Philosophical Cues
        </div>
      </div>
    </div>
  );
};

export default ScndPage;
