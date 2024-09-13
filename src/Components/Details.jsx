import React from "react";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const Details = ({ weatherData }) => {
  const condition = weatherData.current_observation?.condition || {};
  const wind = weatherData.current_observation?.wind || {};
  const atmosphere = weatherData.current_observation?.atmosphere || {};
  const astronomy = weatherData.current_observation?.astronomy || {};

  const sunnyIcon = (
    <img
      width="120"
      height="50"
      src="https://img.icons8.com/color/96/sun-star.png"
      alt="sun-star"
    />
  );
  const cloudyIcon = (
    <img
      width="120"
      height="50"
      src="https://img.icons8.com/fluency/96/partly-cloudy-day.png"
      alt="partly-cloudy-day"
    />
  );
  const rainIcon = (
    <img
      width="120"
      height="50"
      src="https://img.icons8.com/pulsar-gradient/100/rain.png"
      alt="rain"
    />
  );
  const thunderIcon = (
    <img
      width="120"
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
      case "fair":
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
      <div className="condition-img-text flex justify-center items-center">
      {getWeatherIcon(condition.text)}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl bg-gradient-to-b from-blue-950 to-black text-transparent bg-clip-text">
        {condition.text || "N/A"}
      </h1>
      </div>
      
      <div className="details font-semibold bg-black border-2 bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg  grid grid-cols-2 gap-4 text-center">
        <div className="condition h-24 w-40 mx-3 flex flex-col justify-center items-center bg-gradient-to-b from-blue-950 to-black text-transparent bg-clip-text">
          <p>Temperature: {condition.temperature || "N/A"}°C</p>
          <p>Condition: {condition.text || "N/A"}</p>
        </div>
        <div className="wind h-24 w-40 mx-3 flex flex-col justify-center items-center bg-gradient-to-b from-blue-950 to-black text-transparent bg-clip-text">
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
        <div className="atmosphere h-24 w-40 mx-3 flex flex-col justify-center items-center bg-gradient-to-b from-blue-950 to-black text-transparent bg-clip-text">
          <p>Humidity: {atmosphere.humidity || "N/A"}%</p>
          <p>Visibility: {atmosphere.visibility || "N/A"} km</p>
          <p>Pressure: {atmosphere.pressure || "N/A"} hPa</p>
        </div>
        <div className="astronomy h-24 w-40 sm:w-40 mx-3 flex flex-col justify-center items-center bg-gradient-to-b from-blue-950 to-black text-transparent bg-clip-text">
          <p>Sunrise: {astronomy.sunrise || "N/A"}</p>
          <p>Sunset: {astronomy.sunset || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
