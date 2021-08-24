import React, { useState } from "react";
import folder from "./../../images/folder.jpg";
import "./../../styles/FifthPage.css";
import FifthPageExpanded from "./FifthPageExpanded";
import { CSSTransition } from "react-transition-group";
import projectFile from "../jsonFiles/home/projects/projectFile";
import reactProjectFile from "../jsonFiles/home/projects/reactProject";
const FifthPage = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedProject, setSelect] = useState("");

  return (
    <div className="portfolioContainer">
      <div className="portfolio">
        <div className="portfolioTitle">PORTFOLIO</div>

        <div className="universityProjects">
          <div className="uniTextDes">University</div>
          <div className="wrapper">
            <div className="horizontal_scroll">
              {projectFile.map((Project) => {
                return (
                  <div
                    onClick={() => {
                      setToggle(!toggle);
                      setSelect(Project);
                    }}
                  >
                    <img src={folder} className="folderImg" alt="folderImg" />
                    <div className="ProjectDesc">{Project.Title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="universityProjects xtra_spacing">
          <div className="reactProjectDesc">React Project</div>
          <div className="wrapper">
            <div className="horizontal_scroll">
              {reactProjectFile.map((Project) => {
                return (
                  <div
                    onClick={() => {
                      setToggle(!toggle);
                      setSelect(Project);
                    }}
                  >
                    <img src={folder} className="folderImg" alt="folderImg" />
                    <div className="ProjectDesc">{Project.Title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CSSTransition in={toggle} classNames="fade" unmountOnExit>
        <FifthPageExpanded
          selectedProject={selectedProject}
          toggle={setToggle}
        />
      </CSSTransition>
    </div>
  );
};
export default FifthPage;
