import React, { useState } from "react";
import MusingJson from "./Musing/MusingJson.json";
import Container from "react-bootstrap/Container";
import "../../styles/BlogPage/Musing.css";

const Musings = () => {
  console.log(MusingJson);
  const [toggle, setToggle] = useState(false);
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
      <div
        // className="musingContentClose"
        className={toggle ? "musingContentOpen" : "musingContentClose"}
        // style={{ display: toggle ? "flex" : "none" }}
      >
        {MusingJson.MusingsJson.map((musing) => {
          return (
            <div className="MusingContentlist">
              <div>{musing.name}</div>
              <div>{musing.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Musings;
