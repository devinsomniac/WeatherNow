import React from 'react';
import { Box } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const WeekCard = ({ item }) => {
  const sunnyIcon = <img width="50" height="50" src="https://img.icons8.com/color/96/sun-star.png" alt="sun-star" />;
  const cloudyIcon = <img width="50" height="50" src="https://img.icons8.com/fluency/96/partly-cloudy-day.png" alt="partly-cloudy-day" />;
  const rainIcon = <img width="50" height="50" src="https://img.icons8.com/pulsar-gradient/100/rain.png" alt="rain" />;
  const thunderIcon = <img width="50" height="50" src="https://img.icons8.com/office/80/chance-of-storm.png" alt="chance-of-storm" />;

  // Function to select the appropriate icon based on the weather condition
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
      case 'mostly sunny':
      case 'fair':    
        return sunnyIcon;
      case 'partly cloudy':
      case 'cloudy':
      case 'overcast':
      case 'mostly cloudy':  
        return cloudyIcon;
      case 'rain':
      case 'showers':
      case 'scattered showers':    
        return rainIcon;
      case 'thunderstorms':
      case 'chance of storm':
        return thunderIcon;
      default:
        return <ThunderstormIcon />; // Default icon
    }
  };

  return (
    <div className='px-4 py-5'>
      <Box className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg h-36 w-28 rounded-md flex flex-col justify-center items-center">
        <h2>{item.day}</h2>
        <hr />
        <Box className="h-12 w-12 flex justify-center items-center">
          {/* Display the appropriate icon based on the weather condition */}
          {getWeatherIcon(item.text)}
        </Box>
        <h3>{item.text}</h3>
        <h3>{item.high}°</h3>
      </Box>
    </div>
  );
};

export default WeekCard;
