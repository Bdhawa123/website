import React from "react";
import mainlogo from "../../images/site_logo.png";
import down from "../../images/down.png";
import Container from "react-bootstrap/Container";
import "../../styles/MainPage.css";

const MainComponent = () => {
  return (
    <Container>
      <div className="welcome_content">
        <img src={mainlogo} alt="mainlogo" />
        <div>Welcome to my Website !!!</div>
      </div>

      <div className="downBtn">
        <img
          src={down}
          alt="downimage"
          onClick={() => {
            window.scroll(0, 780);
          }}
        />
      </div>
    </Container>
  );
};

export default MainComponent;
