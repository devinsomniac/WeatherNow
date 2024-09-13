import React from 'react';
import WeekCard from './WeekCard';

const Weekly = ({ weatherData }) => {
  const forecast = weatherData.forecasts || [];
  
  // Slice the forecast array based on screen size
  const nextForecastToDisplay = forecast.slice(1, 5);

  return (
    <div className='flex-1'>
      <h1 className='text-center text-white'>This Week</h1>
      <div className='mt-5'>
        <div className='flex flex-wrap justify-center items-center'>
          {nextForecastToDisplay.map((item, index) => (
            <WeekCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weekly;
