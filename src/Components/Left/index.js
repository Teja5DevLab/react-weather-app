import React from "react";
import dayjs from "dayjs";
import loader from "../../Assets/loading.gif";
import { useWeatherAPPContext } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const LeftComponents = () => {
  const {
    state: { city, current },
  } = useWeatherAPPContext();
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (!current)
    return (
      <img
        className="loader3"
        style={{
          position: "relative",
          transform: "translateX(7px)",
          margin: "auto",
          width: "25px",
          height: "25px",
        }}
        src={loader}
        alt="Loading..."
      />
    );
  const weekdayindex = dayjs.unix(current.dt).day();
  return (
    <>
      <div className="leftWrap">
        <div className="dateWrap">
          <h2 className="Day">{WEEKDAYS[weekdayindex]}</h2>
          <span className="dateDay">
            {dayjs.unix(current.dt).format("MMMM DD")}th
          </span>
          <span className="locationName">
            <FontAwesomeIcon
              className="fa"
              icon={faLocationArrow}
              style={{ fontSize: 15 }}
            />
            {city.name} - {city.country}
          </span>
        </div>
        <div className="weatherContainer">
          <h6 className="weatherTemp">
            {Math.ceil(current.main.temp_max)} <sup>o</sup>C
          </h6>
          <h3 className="weatherDesc">{current.weather[0].main}</h3>
        </div>
      </div>
    </>
  );
};

export default LeftComponents;
