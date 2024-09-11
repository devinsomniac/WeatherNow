import React,{useState} from 'react'
import DateTime from './DateTime'
import Search from './Search'
import Weekly from './Weekly'
import Details from './Details'

const MainBody = () => {
    const [weatherData, setWeatherData] = useState({}); 
  return (
    <div className='flex flex-col h-screen'>
        <div >
        <Search setWeatherData = {setWeatherData}/>
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