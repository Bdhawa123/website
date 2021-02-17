import React from "react";
import "../../styles/SixthPage.css";

const movies = [
  { titleName: "Movie 1", Description: "summary", Photo: "url" },
  { titleName: "Movie 2", Description: "summary", Photo: "url" },
  { titleName: "Movie 3", Description: "summary", Photo: "url" },
  { titleName: "Movie 4", Description: "summary", Photo: "url" },
  { titleName: "Movie 5", Description: "summary", Photo: "url" },
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
  return (
    <div>
      <div className="titleMoviePage">MOVIES</div>

      <div className="movieContainer">
        {movies.map((movie, index) => {
          return (
            <div
              className="movieCard"
              style={{ backgroundColor: randomColor[index] }}
            >
              <div className="cardTitle">{movie.titleName}</div>
              <div className="movieImage">{movie.Photo}</div>
              <div className="description">{movie.Description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SixthPage;
