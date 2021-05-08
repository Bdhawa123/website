import React from "react";
import Modal from "react-bootstrap/Modal";
import "../../styles/SixPageOnClick.css";
import cross from "../../images/cancel_white.svg";

const SixthPageOnClick = ({
  titleName,
  description,
  summary,
  Color,
  url,
  TogglePage,
}) => {
  return (
    <div className="classModal" style={{ backgroundColor: Color }}>
      <div className="classModalContainer">
        <div
          style={{ position: "fixed", marginLeft: "800px", marginTop: "-20px" }}
          onClick={() => {
            TogglePage();
          }}
        >
          <img src={cross} className="crosSymbol" />
        </div>

        <div className="textModalTitle">{titleName}</div>
        <div className="modalImg">
          <img src="#" alt={url} />
        </div>
        <div className="textModalDescription">{description}</div>
        <div className="textModalSummary">{summary}</div>
      </div>
    </div>
  );
};

export default SixthPageOnClick;
