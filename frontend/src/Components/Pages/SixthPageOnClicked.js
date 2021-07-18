import React from "react";
import "../../styles/SixPageOnClick.css";
import cross from "../../images/cancel_white.svg";

const SixthPageOnClick = ({ movie, TogglePage }) => {
  return (
    <div className="classModal" style={{ backgroundColor: movie.Color }}>
      <div className="classModalContainer">
        <div
          style={{ position: "fixed", marginLeft: "800px", marginTop: "-20px" }}
          onClick={() => {
            TogglePage();
          }}
        >
          <img src={cross} className="crosSymbol" />
        </div>
        <div className="textModalTitle">{movie.titleName}</div>
        <div className="modalBody">
          <img src={movie.Photo} className="modalImg" />
          {/* <div className="textModalDescription">{movie.description}</div> */}
          <div className="textModalSummary">
            {movie.summary.map((element) => {
              return <div className="summaryParagraphs">{element}</div>;
            })}
            <h5>Critical Analysis ...</h5>
            {movie.critcalSummary.map((summary) => {
              return <div className="summaryParagraphs">{summary}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthPageOnClick;
