import React, { useState } from "react";
import "../../styles/SeventhPage.css";

const philosophicalCues = [
  "quote 1",
  "quote 2",
  "quote 3",
  "quote 4",
  "quote 5",
  "quote 6",
  "quote 7",
  "quote 8",
  "quote 9",
];

const colors = [
  "#063970",
  "#873e23",
  "#154c79",
  "#21130d",
  "#3e3e3e",
  "#763568",
];

const SeventhPage = () => {
  const cueCardList = [];
  const [CardListChange, setChange] = useState(false);

  const changeCues = () => {
    for (let cardCount = 0; cardCount < 6; cardCount++) {
      cueCardList.push(
        <div className="cueCard" style={{ backgroundColor: colors[cardCount] }}>
          {
            philosophicalCues[
              Math.floor(Math.random() * philosophicalCues.length)
            ]
          }
        </div>
      );
    }
  };

  changeCues();

  return (
    <div className="svnthPageContainer">
      <div className="cueCardContainer">{cueCardList}</div>
      <button
        className="randomCard"
        onClick={() => {
          setChange(!CardListChange);
        }}
      >
        Change cues
      </button>
    </div>
  );
};

export default SeventhPage;
