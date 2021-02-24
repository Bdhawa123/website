import React from "react";
import "./../../styles/EighthPage.css";
import insta from "./../../images/insta.png";
import facebook from "./../../images/facebook.png";
import linkedIn from "./../../images/linkedIn.png";

const EighthPage = () => {
  return (
    <div className="containerEight">
      <div className="formColumn">
        <div className="formContainer" />
        <div className="reachOutHeader">Reach Out to Me</div>
        <form className="reachOut">
          <div className="floatingLabel">
            <input type="text" placeholder=" " />
            <label>Name</label>
          </div>

          <div className="floatingLabel">
            <input type="email" placeholder=" " />
            <label>Email</label>
          </div>

          {/* <input type="text" className="textArea" /> */}
          <textarea name="message" />
          {/* <label>Write your Message Here</label> */}

          <button className="reachOutSubmit">Send</button>
        </form>
      </div>
      <div className="socialMedia">
        <div className="socialImages">
          <img src={insta} />
          <img src={facebook} />
          <img src={linkedIn} />
        </div>

        <div className="textMedia">Find me on Social Media</div>
      </div>
    </div>
  );
};

export default EighthPage;
