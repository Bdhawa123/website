import React, { useState } from "react";
import "../../styles/SeventhPage.css";

const philosophicalCues = [
  "One is never afraid of the unknown; one is afraid of the known coming to an end",
  "You can only be afraid of what you think you know.",
  "Thought is so cunning, so clever, that it distorts everything for its own convenience.",
  "The more you know yourself, the more clarity there is. Self-knowledge has no end - you don't come to an achievement, you don't come to a conclusion. It is an endless river.",
  "If you begin to understand what you are without trying to change it, then what you are undergoes a transformation.",
  "Do it or don't do it but get on with it...",
  "There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.",
  "The primary cause of disorder in ourselves is the seeking of reality promised by another.",
  "Observation without evaluation is the highest form of intelligence.",
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
