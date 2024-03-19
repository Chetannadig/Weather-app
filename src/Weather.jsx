import React, { useState } from 'react'
import './Weather.css'

const api ={
    key:"c18ffce20e616b7ca4c6d73edf49e86b",
    base:"https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
    const[query,setQuery]=useState('');
    const [weather,setWeather]=useState({});

    const search=evt=>{
       if(evt.key==='Enter') {
        // fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+query+'&units=metric&APPID=c18ffce20e616b7ca4c6d73edf49e86b')
        .then(res => res.json())
        .then(result=>{
            setWeather(result);
            setQuery('');
            console.log(result);
        })
    }
    }

    const dateBuilder=(d)=>{
        let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day=days[d.getDay()];
        let date=d.getDate();
        let month=months[d.getMonth()];
        let year=d.getFullYear();

        return (
            <div>
                {`${day} ${date} ${month} ${year}`}
            </div>
              
            
          );
    }


  return (
    <div className ={(typeof weather.main != "undefined") ? ((weather.main.temp>16) ? 'app-warm' : 'app') : 'app'}>
        <main>
            <div className='search-box'>
                <input type='text' 
                className='search-bar'
                placeholder='Search...'
                value={query}
                onChange={e =>setQuery(e.target.value)}
                onKeyDown={search}/>
            </div>
            {(typeof weather.main !="undefined")?(
                 <div>
                 <div className='location-box'>
                     <div className='location'>
                     {weather.name},{weather.sys.country}
                         <div className='date'>
                              {dateBuilder(new Date())}
                         </div>
                        <div className="weather-box">
                         <div className='temp'>
                             {Math.round(weather.main.temp)}°C
                         </div>
                         </div> 
                     </div>
                     <div className='weather'>
                        {weather.weather[0].main}

                     </div>
                 </div>
             </div>
            ) : (' ')}
            
        </main>
    </div>
  )
}

export default Weather