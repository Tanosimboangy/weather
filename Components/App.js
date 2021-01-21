import React, { useState, useEffect } from 'react';
import ShowingLists from './ShowingLists';
import Search from './Search';

function App() {
    const [city, setCity] = useState([]);
    const [Woeid, setWoeid] = useState(44418);
    const [cityTitle, setCityTitle] = useState([]);
    const [inputValue, setInputValue] = useState("london");
    const [converted, setConverted] = useState(false);
    const [weatherDetails, setWeatherDetails] = useState([]);
    const [actualWeatherDetails, setActualWeatherDetails] = useState([]);
    const [fiveDayslWeatherDetails, setFiveDaysWeatherDetails] = useState([]);
    
    let NEW_API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${inputValue}`;

    function Searchitem(e) {
        e.preventDefault();
        setInputValue(e.target.location.value)
        e.target.reset();
    }
    
    // Fetching the cityname
    async function fetchingCity() {
        const Data = await fetch(NEW_API);
        const res = await Data.json();
        setCity(res);
    }

    useEffect(() => {
        fetchingCity();
    }, [inputValue]);

    // Accessing the woied from the city location and store it in a state
    useEffect(() => {
        const newWoeid = city && city.map(item => {
            return (
                setWoeid(item.woeid),
                setCityTitle(item.title)
            )
        });   
    }, [city])

        
    // Fetching the weather details
    async function fetchingWeather() {
        const newData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${Woeid}/`);
        const response = await newData.json();
        setWeatherDetails(response);
        setActualWeatherDetails(weatherDetails.consolidated_weather?.[0]);
        setFiveDaysWeatherDetails(weatherDetails.consolidated_weather?.splice(1));
    }

    function ConvertedToCelcius() {
        setConverted(false);
    }
    
    function ConvertedToFaraneit() {
        setConverted(true)
    }
        
    return (
        <div className="container">
            <form onSubmit={Searchitem}>
                <input type="text" name="location" required/>
             <button type="submit">Search</button>
         </form>
        <button type="button" onClick={fetchingWeather}>{cityTitle}</button>
            {/* <Search
                city={city}
                Searchitem={Searchitem}
                converted={converted}
                actualWeatherDetails={actualWeatherDetails} 
            /> */}
            {/* <ShowingLists 
                converted={converted}
                ConvertedToCelcius={ConvertedToCelcius} 
                ConvertedToFaraneit={ConvertedToFaraneit} 
                actualWeatherDetails={actualWeatherDetails} 
                fiveDayslWeatherDetails={fiveDayslWeatherDetails}
            /> */}
        </div>

    )
}

export default App;


// const [actualWeather, setActualWeather] = useState();
// const [converted, setConverted] = useState(false);

// const newWeather = weatherDetails.consolidated_weather && weatherDetails.consolidated_weather.splice(0, 1);
// console.log(newWeather);