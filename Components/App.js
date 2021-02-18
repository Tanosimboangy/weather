import React, { useState, useEffect } from 'react';
import Search from "./Search"

function App() {
    const [city, setCity] = useState([]);
    const [Woeid, setWoeid] = useState(44418);
    const [cityTitle, setCityTitle] = useState([]);
    const [inputValue, setInputValue] = useState("London");
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
    console.log(city);

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
        <Search 
        cityTitle={cityTitle}
        Searchitem={Searchitem}
        fetchingWeather={fetchingWeather}
        actualWeatherDetails={actualWeatherDetails}
        />
    )
}

export default App;
