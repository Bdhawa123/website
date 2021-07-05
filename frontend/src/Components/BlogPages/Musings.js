import React, { useState } from "react";

const Musings = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className="musingTitle"
      >
        Musing
      </div>
      <div
        className="content"
        style={{ visibility: toggle ? "visible" : "hidden" }}
      >
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </div>
    </div>
  );
};
export default Musings;
