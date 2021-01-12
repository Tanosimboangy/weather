import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("london");

    const Voeid = data.map(item => item)
    console.log(Voeid);
    console.log(Voeid.woeid);

    // const [weatherDetails, setWeatherDetails] = useState([]);
    // // Fetching the weather details
    // async function fetchingWeather() {
    //     let WEATHER_API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/`;
    //     const newData = await fetch(WEATHER_API);
    //     const response = await newData.json();
    //     setWeatherDetails(response);
    // }
    // useEffect(() => {
    //     fetchingWeather();
    // }, [])
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
                                <p key={location.woeid}>{location.title}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default App;

