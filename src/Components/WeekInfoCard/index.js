import React, { useEffect, useState } from "react";
import { useWeatherAPPContext } from "../../Context/Context";
import SingleCardComponents from "../SingleCard";
import loader from "../../Assets/loading.gif";

const WeekInfoCardComponents = () => {
  const [SelectedCard, setSelectedCard] = useState(0);
  const {
    state: { daily },
    dispatch,
  } = useWeatherAPPContext();
  const updateCurrent = () => {
    return dispatch({
      type: "SET_CURRENT",
      payload: daily[SelectedCard],
    });
  };
  useEffect(() => {
    updateCurrent();
    //eslint-disable-next-line
  }, [daily, SelectedCard]);
  const indicesToDisplay = daily
    ? Array.from({ length: daily.length }, (_, i) => i).filter(
        (index) => index % 8 === 0
      )
    : [];
  return daily ? (
    <div className="cardWrap">
      <ul className="cardList">
        {indicesToDisplay.map((index) => (
          <SingleCardComponents
            key={index}
            item={daily?.[index]}
            className={index === SelectedCard ? "active" : ""}
            onClick={() => {
              setSelectedCard(index);
              updateCurrent();
            }}
          />
        ))}
      </ul>
    </div>
  ) : (
    <img
      className="loader2"
      style={{
        display: "block",
        position: "relative",
        top: "5px",
        left: "50%",
        width: "25px",
        height: "25px",
      }}
      src={loader}
      alt="Loading..."
    />
  );
};

export default WeekInfoCardComponents;
