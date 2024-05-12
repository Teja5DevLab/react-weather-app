import React, { useEffect, useState, useRef } from "react";
import cities from "../../Data/cities.json";
import { useWeatherAPPContext } from "../../Context/Context";
import axios from "axios";

const ChooseStateComponents = () => {
  const {
    state: { city },
    dispatch,
  } = useWeatherAPPContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const suggestionsRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredCities = cities.filter((city) => {
      const cityName = city.name.toLowerCase().replace(/\s+/g, "");
      const searchTermWithoutSpaces = value.toLowerCase().replace(/\s+/g, "");
      return cityName.startsWith(searchTermWithoutSpaces);
    });
    setSuggestions(filteredCities.slice(0, 8));
    setSelectedIndex(-1);
  };

  const handleSelect = (selectedCity) => {
    dispatch({
      type: "SET_CITY",
      payload: selectedCity,
    });
    setSearchTerm("");
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
      if (suggestionsRef.current) {
        suggestionsRef.current.scrollTo(0, selectedIndex * 36);
      }
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
      if (suggestionsRef.current) {
        suggestionsRef.current.scrollTo(0, Math.max(0, (selectedIndex - 1) * 36));
      }
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      handleSelect(suggestions[selectedIndex]);
    }
  };

  const API_KEY = "1733471d0bd0feee9f9d0ae6f1e562ec";
  let lat = city && city.lat ? city.lat : "";
  let long = city && city.lng ? city.lng : "";
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&lang=tr&appid=${API_KEY}`;

  const fetchData = () => {
    axios(URL).then((data) => {
      let _daily = data.data.list;
      dispatch({
        type: "SET_DAILY",
        payload: _daily,
      });
    });
  };

  useEffect(() => {
    if (searchTerm === "") {
      setSuggestions([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [city]);

  return (
    <>
      <div className="stateWrap">
        <input
          className="stateMenu"
          type="text"
          placeholder="City Name (e.g., New York, London)"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {searchTerm && (
          <div className="suggestions" ref={suggestionsRef}>
            {suggestions.map((city, index) => (
              <div
                key={`${city.lat}${city.name}`}
                onClick={() => handleSelect(city)}
                className={index === selectedIndex ? "selected" : ""}
              >
                {city.name} - {city.country}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ChooseStateComponents;
