import React from "react";
import ChooseStateComponents from "./ChooseState";
import WeekInfoCardComponents from "./WeekInfoCard";
import HUMIDITYComponents from "./HUMIDITY";
import LeftComponents from "./Left";

const HomeComponents = () => {
  return (
    <>
      <div className="homeWrap">
        <div className="weatherSection">
          <LeftComponents />
          <div className="rightSide">
            <ChooseStateComponents />
            <HUMIDITYComponents />
            <WeekInfoCardComponents />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponents;
