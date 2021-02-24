import React from "react";
import MainComponent from "./Pages/MainPage";
import ScndPage from "./Pages/ScndPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import FifthPage from "./Pages/FifthPage";
import SixthPage from "./Pages/SixthPage";
import SeventhPage from "./Pages/SeventhPage";
import EighthPage from "./Pages/EighthPage";

const WebsiteComponent = () => {
  return (
    <div>
      <MainComponent />
      <ScndPage />
      <ThirdPage />
      {/* <FourthPage /> */}
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
    </div>
  );
};

export default WebsiteComponent;
