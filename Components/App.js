import React, { useState, useEffect } from 'react';

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
    
    function fetchingCity() {
        const datas = fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${inputValue}`);
        const res = datas.json();
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
    }, [city])

    function fetchingWeather() {
        const newData = fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${Woeid}/`);
        const response = newData.json();
        setWeatherDetails(response);
        setActualWeatherDetails(weatherDetails.consolidated_weather?.[0]);
        setFiveDaysWeatherDetails(weatherDetails.consolidated_weather?.splice(1));
        console.log(actualWeatherDetails);
        console.log(fiveDayslWeatherDetails);
    }

    
    return (
        <div className="container">
            <form onSubmit={Searchitem}>
                 <input type="text" name="location" required/>
                 <button type="submit">Search</button>
             </form>
            <button type="button" onClick={fetchingWeather}>{cityTitle}</button>
        </div>
    )
}

export default App;
