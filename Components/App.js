import React, { useState, useEffect } from 'react';
import ShowingLists from './ShowingLists';
import Search from './Search';

function App() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("london");
    const [Woeid, setWoeid] = useState("");
    const [weatherDetails, setWeatherDetails] = useState([]);
    const [converted, setConverted] = useState(false);

    function ConvertedToCelcius() {
        setConverted(false);
    }
    
    function ConvertedToFaraneit() {
        setConverted(true)
    }

    // Fetching the cityname
    async function fetchingCity() {
        let NEW_API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/api/location/search/?query=${inputValue}`;
        const Data = await fetch(NEW_API);
        const res = await Data.json();
        setData(res);
    }
    useEffect(() => {
        fetchingCity();
    }, [inputValue])
    
    
    // Getting the Woeid value from the location
    function getWeather(e) {
        setWoeid(e.target.value)
    }

    useEffect(() => {
        const newWoeid = data !== [] && data.map(data => data.woeid);
        setWoeid(newWoeid[0])
    }, [data])
    
    // Fetching the weather details
    async function fetchingWeather() {
        let WEATHER_API = Woeid && `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${Woeid}/`;
        const newData = await fetch(WEATHER_API);
        const response = await newData.json();
        setWeatherDetails(response);
    }
    useEffect(() => {
        fetchingWeather();
    }, [data, Woeid])
    
    function Searchitem(e) {
        e.preventDefault();
        setInputValue(e.target.location.value);
        e.target.reset();
    }
        
    return (
        <div className="container">
            <Search
                data={data}
                getWeather={getWeather}
                Searchitem={Searchitem}
                converted={converted}
                weatherDetails={weatherDetails} 
            />
            <ShowingLists 
                weatherDetails={weatherDetails} 
                converted={converted}
                ConvertedToCelcius={ConvertedToCelcius} 
                ConvertedToFaraneit={ConvertedToFaraneit} 
            />
        </div>

    )
}

export default App;

