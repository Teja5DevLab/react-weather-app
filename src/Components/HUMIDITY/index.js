import React from "react";
import { useWeatherAPPContext } from "../../Context/Context";
import loader from "../../Assets/loading.gif";

const HUMIDITYComponents = () => {
  let {
    state: { current },
  } = useWeatherAPPContext();
  return current ? (
    <div className="humidityWrap">
      <div className="humidityData">
        <div className="title">FEELS LIKE</div>
        <div className="value">
          {Math.ceil(current.main.feels_like)}
          <span>   <sup>o</sup>C</span>
        </div>
      </div>
      <div className="humidityData">
        <div className="title">HUMIDITY</div>
        <div className="value">{current.main.humidity} %</div>
      </div>
      <div className="humidityData">
        <div className="title">WIND</div>
        <div className="value">{Math.ceil(current.wind.speed * 10)/10} km/h</div>
      </div>
      <div className="humidityData">
        <div className="title">AIR PRESSURE</div>
        <div className="value">{current.main.pressure} mb</div>
      </div>
      <div className="humidityData">
        <div className="title">MAX TEMP</div>
        <div className="value">
          {Math.ceil(current.main.temp_max)}
          <span>   <sup>o</sup>C</span>
        </div>
      </div>
    </div>
  ) : (
    <img
      className="loader1"
      style={{
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

export default HUMIDITYComponents;
