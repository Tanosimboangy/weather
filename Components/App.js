import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [weatherDetails, setWeatherDetails] = useState([]);
    const [inputValue, setInputValue] = useState('london');

    function Searchitem(e) {
        e.preventDefault();
        setInputValue(e.target.location.value);
        e.target.reset();
    }

    async function fetchingCity() {
        let NEW_API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/api/location/search/?query=${inputValue}`;
        const Data = await fetch(NEW_API);
        const res = await Data.json();
        setData(res);
    }

    useEffect(() => {
        fetchingCity();
    }, [inputValue])

    console.log(data);

    // async function fetchingWeather() {
    //     let WEATHER_API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/api/location/${data.woeid}`;
    //     const newData = await fetch(WEATHER_API);
    //     const response = await newData.json();
    //     setData(response);
    // }

    // useEffect(() => {
    //     fetchingWeather();
    // }, [])

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