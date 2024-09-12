import React from "react";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const Details = ({ weatherData }) => {
  const condition = weatherData.current_observation?.condition || {};
  const wind = weatherData.current_observation?.wind || {};
  const atmosphere = weatherData.current_observation?.atmosphere || {};
  const astronomy = weatherData.current_observation?.astronomy || {};

  const sunnyIcon = (
    <img
      width="50"
      height="50"
      src="https://img.icons8.com/color/96/sun-star.png"
      alt="sun-star"
    />
  );
  const cloudyIcon = (
    <img
      width="50"
      height="50"
      src="https://img.icons8.com/fluency/96/partly-cloudy-day.png"
      alt="partly-cloudy-day"
    />
  );
  const rainIcon = (
    <img
      width="50"
      height="50"
      src="https://img.icons8.com/pulsar-gradient/100/rain.png"
      alt="rain"
    />
  );
  const thunderIcon = (
    <img
      width="50"
      height="50"
      src="https://img.icons8.com/office/80/chance-of-storm.png"
      alt="chance-of-storm"
    />
  );

  const getWeatherIcon = (conditionText) => {
    switch (conditionText?.toLowerCase()) {
      case "sunny":
      case "clear":
      case "mostly sunny":
      case 'fair':    
        return sunnyIcon;
      case "partly cloudy":
      case "cloudy":
      case "overcast":
      case "mostly cloudy":
        return cloudyIcon;
      case "rain":
      case "showers":
      case "scattered showers":
        return rainIcon;
      case "thunderstorms":
      case "chance of storm":
        return thunderIcon;
      default:
        return <ThunderstormIcon />; // Default icon
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-left flex-1 text-white sm:flex sm:justify-center sm:items-center sm:text-center">
      {getWeatherIcon(condition.text)}
      <h1 className="lg:text-9xl md:text-7xl">{condition.text || "N/A"}</h1>
      <div className="details grid grid-cols-2 gap-4 text-center">
        <div className="condition h-24 w-40 mx-3 flex flex-col justify-center items-center ">
          <p>Temperature: {condition.temperature || "N/A"}°C</p>
          <p>Condition: {condition.text || "N/A"}</p>
        </div>
        <div className="wind h-24 w-40 mx-3 flex flex-col justify-center items-center ">
          <div className="wind-chill flex">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/wind--v1.png"
              alt="wind icon"
            />
            : {wind.chill || "N/A"}
          </div>
          <p>Direction: {wind.direction || "N/A"}</p>
          <p>Speed: {wind.speed || "N/A"} km/h</p>
        </div>
        <div className="atmosphere h-24 w-40 mx-3 flex flex-col justify-center items-center ">
          <p>Humidity: {atmosphere.humidity || "N/A"}%</p>
          <p>Visibility: {atmosphere.visibility || "N/A"} km</p>
          <p>Pressure: {atmosphere.pressure || "N/A"} hPa</p>
        </div>
        <div className="astronomy h-24 w-40 sm:w-40 mx-3 flex flex-col justify-center items-center ">
          <p>Sunrise: {astronomy.sunrise || "N/A"}</p>
          <p>Sunset: {astronomy.sunset || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
