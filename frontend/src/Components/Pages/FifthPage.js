import React, { useState } from "react";
import folder from "./../../images/folder.jpg";
import "./../../styles/FifthPage.css";
import FifthPageExpanded from "./FifthPageExpanded";
import { CSSTransition } from "react-transition-group";

const University_Project = [
  { Title: "Software Development", Description: "Description", link: "Link" },
  { Title: "Title 1", Description: "Description", link: "Link" },
  { Title: "Title 2", Description: "Description", link: "Link" },
  { Title: "Title 3", Description: "Description", link: "Link" },
  { Title: "Title 4", Description: "Description", link: "Link" },
  { Title: "Title 5", Description: "Description", link: "Link" },
  { Title: "Title 6", Description: "Description", link: "Link" },
];

const React_Projects = [
  { Title: "React Project", Description: "Description", link: "Link" },
  { Title: "Title 1", Description: "Description", link: "Link" },
  { Title: "Title 2", Description: "Description", link: "Link" },
  { Title: "Title 3", Description: "Description", link: "Link" },
  { Title: "Title 4", Description: "Description", link: "Link" },
  { Title: "Title 5", Description: "Description", link: "Link" },
  { Title: "Title 6", Description: "Description", link: "Link" },
];
const FifthPage = () => {
  // University_Projects = {};
  // React_Projects = {};

  const [toggle, setToggle] = useState(false);

  return (
    <div className="portfolioContainer">
      <div className="portfolio">
        <div className="portfolioTitle">PORTFOLIO</div>

        <div className="universityProjects">
          <div className="uniTextDes">University</div>
          <div className="wrapper">
            <div className="horizontal_scroll">
              {University_Project.map((Project) => {
                return (
                  <div
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <img src={folder} className="folderImg" />
                    <div className="ProjectDesc">{Project.Title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="universityProjects xtra_spacing">
          <div className="reactProjectDesc">React Project</div>
          <div className="horizontal_scroll">
            {React_Projects.map((Project) => {
              console.log(Project);
              return (
                <div>
                  <img src={folder} className="folderImg" />
                  <div className="ProjectDesc">{Project.Title}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reactProjects"></div>
      </div>
      <CSSTransition in={toggle} className="fade" unmountOnExit>
        <FifthPageExpanded />
      </CSSTransition>
    </div>
  );
};
export default FifthPage;
