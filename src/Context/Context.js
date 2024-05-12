import React, { useContext, useReducer } from "react";
import { WeatherReducer } from "./Reducer";

const WeatherAPPContext = React.createContext();
const WeatherAPPProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, {
    city: {
      "name": "Dubai",
      "lat": "25.07725",
      "lng": "55.30927",
      "country": "AE",
      "admin1": "03",
      "admin2": ""
    }, 
    current: "",
    daily: "",
  });
  return (
    <>
      <WeatherAPPContext.Provider value={{ state, dispatch }}>
        {children}
      </WeatherAPPContext.Provider>
    </>
  );
};

export default WeatherAPPProvider;
export const useWeatherAPPContext = () => {
  return useContext(WeatherAPPContext);
};
