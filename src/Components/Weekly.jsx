import React from 'react';
import WeekCard from './weekCard';

const Weekly = ({ weatherData }) => {
  const forecast = weatherData.forecasts || [];
  const nextSevenDaysForecast = forecast.slice(1, 8); 

  return (
    <div className='flex-1 '>
      <h1 className='text-center text-white'>This Week</h1>
      <div className='justify-center items-center mt-5 flex flex-wrap'>
        {nextSevenDaysForecast.map((item, index) => (
          <WeekCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Weekly;
