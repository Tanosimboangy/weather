import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("london");
    const [Woeid, setWoeid] = useState("");
    const [weatherDetails, setWeatherDetails] = useState([]);

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

    useEffect(() => {
        const n = data !== [] && data.map(data => data.woeid);
        setWoeid(n[0])
    }, [data])
    
     console.log(Woeid);


    // Getting the Woeid value from the location
    function getWeather(e) {
        setWoeid(e.target.value)
        console.log(Woeid);
        
    }

    // Fetching the weather details
    async function fetchingWeather() {
        let WEATHER_API = Woeid && `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${Woeid}/`;

        console.log(WEATHER_API)
        const newData = await fetch(WEATHER_API);
        const response = await newData.json();
        setWeatherDetails(response);
    }
    useEffect(() => {
        fetchingWeather();
    }, [data, Woeid])
    // function ShowingWeatherDetails(e) {
    //     e.preventDefault();
    //     setWeatherDetails(e.target.location.value.consolidated_weather);
    //     e.target.reset();
    // }
    // console.log(weatherDetails);
    
    function Searchitem(e) {
        e.preventDefault();
        setInputValue(e.target.location.value);
        e.target.reset();
    }
        
    return (
        <div className="container">
            <div className="search_container">
                <button 
                    className="search">
                        Search for places
                </button>
                <div className="search_form">
                    <form onSubmit={Searchitem}>
                        <input 
                            type="text"
                            name="location"
                            required/>
                        <button 
                            type="submit">
                                Search
                        </button>
                    </form>
                    <div className="title">
                        {data.map(location => {
                            return (
                                <button
                                    key={location.woeid}
                                    onClick={getWeather}
                                    value={location.woeid}
                                    >
                                        {location.title}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default App;

