import React from "react";
import "../../styles/ThirdPage.css";
import Container from "react-bootstrap/Container";
import swinburne_logo from "../../images/swinburne_logo.png";
import down from "../../images/down_color.png";
import logo_code from "../../images/logo_code.png";

const ThirdPage = () => {
  return (
    <Container>
      <div className="temp">
        <div className="title">EDUCATION</div>
        <div>
          <div className="line1"></div>
        </div>
        <div className="column">
          <div className="col">
            <div className="content1">
              <div className="uni">
                Swinburne University of <br></br>Technology
              </div>
              <img src={swinburne_logo} className="logo" />
            </div>
            <div className="content2">
              <div className="major">
                Computer Science <br></br>(Software Dev)
              </div>
              <div className="degree">Bachelor</div>
            </div>
            <div>
              <div className="course_content"></div>
              <img src={down} className="down" />
            </div>
            <div className="content3">
              <div className="customBtn">
                <div>Download</div>
                <div>Resume</div>
              </div>
              <img src={logo_code} className="logo_code" />
            </div>
          </div>
          <div className="line2"></div>
        </div>
      </div>
    </Container>
  );
};

export default ThirdPage;
