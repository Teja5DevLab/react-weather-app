import React from "react";
import dayjs from "dayjs";

const SingleCardComponents = ({ item, className, onClick }) => {
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday_index = dayjs.unix(item.dt).day();
  return (
    <>
      <li key={item.wind.gust} className={className} onClick={onClick}>
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt="icon"
          className="day-icon"
        />
        <span className="day-name">{WEEKDAYS[weekday_index].slice(0, 3)}</span>
        <span className="day-temp">
          {Math.round(item.main.temp_max)}
          <sup>o</sup>C
        </span>
      </li>
    </>
  );
};

export default SingleCardComponents;
