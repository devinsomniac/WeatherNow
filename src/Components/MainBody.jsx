import React,{useState} from 'react'
import DateTime from './DateTime'
import Search from './Search'
import Weekly from './Weekly'
import Details from './Details'

const MainBody = () => {
    const [weatherData, setWeatherData] = useState({});
    const getBackgroundClass = () => {
      const condition = weatherData?.current_observation?.condition?.text?.toLowerCase();
  
      if (!condition) return "bg-default"; // Default background class
  
      switch (condition) {
        case "sunny":
        case "clear":
        case "mostly sunny":
        case "fair":
          return "bg-sunny";
  
        case "partly cloudy":
        case "cloudy":
        case "overcast":
        case "mostly cloudy":
          return "bg-cloudy";
  
        case "rain":
        case "showers":
        case "scattered showers":
          return "bg-rainy";
  
        case "thunderstorms":
        case "chance of storm":
          return "bg-thunderstorm";
  
        default:
          return "bg-default"; // Fallback for any other weather conditions
      }
    };
   
  return (
    <div className={`flex flex-col h-screen ${getBackgroundClass()} bg-cover bg-center sm:bg-center md:bg-center lg:bg-center xl:bg-center 2xl:bg-center`}>
        <div >
        <Search className="flex justify-center items-center" setWeatherData = {setWeatherData}/>
        <DateTime />
        </div>
        <Details 
        weatherData={weatherData}/>
        <Weekly
        weatherData={weatherData}/>
    </div>
  )
}

export default MainBody

