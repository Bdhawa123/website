import React, { useState } from "react";
import SixthPageOnClick from "./SixthPageOnClicked";
import { CSSTransition } from "react-transition-group";
import "../../styles/SixthPage.css";

const movies = [
  {
    titleName: "Movie 1",
    Description: "shortDescription",
    Photo: "url",
    summary: "MovieSummary",
  },
  {
    titleName: "Movie 2",
    Description: "shortDescription",
    Photo: "url",
    summary: "MovieSummary",
  },
  {
    titleName: "Movie 3",
    Description: "shortDescription",
    Photo: "url",
    summary: "MovieSummary",
  },
  {
    titleName: "Movie 4",
    Description: "shortDescription",
    Photo: "url",
    summary: "MovieSummary",
  },
  {
    titleName: "Movie 5",
    Description: "shortDescription",
    Photo: "url",
    summary: "MovieSummary",
  },
];

const randomColor = [
  "#322E2E",
  "#E96868",
  "#C4C4C4",
  "#67765E",
  "#833346",
  "#c47f3f",
];

const SixthPage = () => {
  const [togglePage, setTogglePage] = useState("");
  const [PageProps, setPageProps] = useState({});

  const TogglePage = () => {
    setTogglePage(!togglePage);
    if (!togglePage) {
      document.body.style.overflow = "hidden";
      console.log("toggleTrue");
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div>
      <div className="titleMoviePage">MOVIES</div>

      <div className="movieContainer">
        {movies.map((movie, index) => {
          return (
            <div
              className="movieCard"
              style={{ backgroundColor: randomColor[index] }}
              onClick={() => {
                TogglePage(true);
                Object.assign(movie, { Color: randomColor[index] });
                setPageProps(movie);
              }}
            >
              <div className="cardTitle">{movie.titleName}</div>
              <div className="movieImage">{movie.Photo}</div>
              <div className="description">{movie.Description}</div>
            </div>
          );
        })}
      </div>

      {/* {togglePage === true ? ( */}
      <CSSTransition in={togglePage} classNames="fade" unmountOnExit>
        <SixthPageOnClick
          titleName={PageProps.titleName}
          description={PageProps.Description}
          summary={PageProps.summary}
          url={PageProps.Photo}
          Color={PageProps.Color}
          TogglePage={TogglePage}
        />
      </CSSTransition>
      {/* ) : null} */}
    </div>
  );
};

export default SixthPage;
