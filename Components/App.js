import React, { useState, useEffect } from 'react';
import Search from "./Search"

function App() {
    const [city, setCity] = useState([]);
    const [Woeid, setWoeid] = useState(44418);
    const [cityTitle, setCityTitle] = useState([]);
    const [inputValue, setInputValue] = useState("london");
    const [weatherDetails, setWeatherDetails] = useState([]);
    const [actualWeatherDetails, setActualWeatherDetails] = useState([]);
    const [fiveDayslWeatherDetails, setFiveDaysWeatherDetails] = useState([]);

    function Searchitem(e) {
        e.preventDefault();
        setInputValue(e.target.location.value)
        e.target.reset();
    }
     
    async function fetchingCity() { 
        const datas = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${inputValue}`);
        const res = await datas.json();
        setCity(res); 
    }

    useEffect(() => {
        fetchingCity();
    }, [inputValue]);
    
    useEffect(() => { 
        const newWoeid = city.map(item => {
            return (
                setWoeid(item.woeid),
                setCityTitle(item.title)
            )
        });
    }, [city]);
    
    async function fetchingWeather() {
        const newData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${Woeid}/`);
        const res = await newData.json(); 
        setWeatherDetails(res);
    }

    useEffect(() => {
        fetchingWeather();
    }, [inputValue])

    useEffect(() => {
        setActualWeatherDetails(weatherDetails.consolidated_weather?.[0]);
        setFiveDaysWeatherDetails(weatherDetails.consolidated_weather?.splice(1));
    }, [weatherDetails])
    
    return (
        <div className="search_container">
            <div className="container">
                <form onSubmit={Searchitem} className="menu_drawer">
                    <input type="text" name="location" required/>
                    <button type="submit">Search</button>
                </form>
                <button type="button" onClick={fetchingWeather}>{cityTitle}</button>
            </div>
            {
                actualWeatherDetails !== undefined ?  
                <ul className="actual_weather_details">
                    <li><img src={`https://www.metaweather.com//static/img/weather/${actualWeatherDetails && actualWeatherDetails.weather_state_abbr}.svg`}/></li>
                    <li><span>{actualWeatherDetails.weather_state_name}</span></li>
                    <li><p>{actualWeatherDetails.applicable_date}</p></li>
                </ul> : ""
            }
        </div>
    )
}

export default App;
