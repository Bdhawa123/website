import React, { useState } from "react";
import MusingJson from "./Musing/MusingJson.json";
import "../../styles/BlogPage/Musing.css";

const MusingList = ({ musing }) => {
  const [secondaryToggle, setSecondaryToggle] = useState(false);
  return (
    <div className="MusingContentlist">
      <h4
        onClick={() => {
          setSecondaryToggle(!secondaryToggle);
        }}
      >
        {musing.name}
      </h4>
      <div
        className={
          secondaryToggle ? "secondaryTitleOpen" : "secondaryTitleClose"
        }
      >
        <span>{musing.paragraphs}</span>
      </div>
    </div>
  );
};

const Musings = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="musingParentdiv">
      <h3
        onClick={() => {
          setToggle(!toggle);
        }}
        className="musingTitle"
      >
        Musings of my Mind
      </h3>
      <div className={toggle ? "musingContentOpen" : "musingContentClose"}>
        {MusingJson.MusingsJson.map((musing) => {
          return <MusingList musing={musing} />;
        })}
      </div>
    </div>
  );
};
export default Musings;
