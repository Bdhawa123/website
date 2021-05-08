import React, { useState } from "react";
import "../../styles/ThirdPage.css";
import Container from "react-bootstrap/Container";
import swinburne_logo from "../../images/swinburne_logo.png";
import down from "../../images/down_color.png";
import logo_code from "../../images/logo_code.png";

const ThirdPage = () => {
  const [unlock, setUnlock] = useState(false);
  const courseCatalog = {
    sem1: [
      "Computer Logic and Essentials",
      "Intro to Programming",
      "Creating Web Application",
      "User-Centred Design",
      "Psychology 100",
    ],

    sem2: [
      "Networking and Switching",
      "Object Oriented Programming",
      "Fundamentals of Data Management",
      "Operating System Configuration",
      "Development Project 1 - Tools and Practices",
    ],

    sem3: [
      "Data Structures and Patterns",
      "Interface Design and Development",
      "Networking and Switching",
    ],

    sem4: [
      "Software Development for Mobile Devices",
      "Web Application Development",
      "Professional Issues in IT",
      "Development Project 2 Design Planning and Management",
    ],

    sem5: [
      "Creating Secure and Scalable Software ",
      "IOT Programming",
      "Software Engineering Project A",
    ],

    sem6: [
      "Intelligent Systems",
      "Advanced Java",
      "Software Engineering Project B",
    ],
  };

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
              <div
                className={
                  unlock ? "course_content_expanded" : "course_content"
                }
                onClick={() => {
                  setUnlock(!unlock);
                }}
              >
                <img src={down} className={unlock ? "up" : "down"} />
                <div
                  className="courseCatalog"
                  style={unlock ? { display: "flex" } : { display: "none" }}
                >
                  <div className="column1course">
                    <ul>
                      {courseCatalog.sem1.map((course) => (
                        <li>{course}</li>
                      ))}
                    </ul>

                    <ul>
                      {courseCatalog.sem3.map((course) => (
                        <li>{course}</li>
                      ))}
                    </ul>

                    <ul>
                      {courseCatalog.sem5.map((course) => (
                        <li>{course}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="column2Course">
                    <ul>
                      {courseCatalog.sem2.map((course) => (
                        <li>{course}</li>
                      ))}
                    </ul>
                    <ul>
                      {courseCatalog.sem4.map((course) => (
                        <li>{course}</li>
                      ))}
                    </ul>
                    <ul>
                      {courseCatalog.sem6.map((course) => (
                        <li>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="content3">
              <a href="../../images/Resume.pdf" download>
                <div className="customBtn">
                  <div>Download</div>
                  <div>Resume</div>
                </div>
              </a>
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
