import React, { useState, useEffect } from 'react';
// import ShowingLists from './ShowingLists';
// import Search from './Search';

function App() {
    const [city, setCity] = useState([]);
    const [inputValue, setInputValue] = useState("london");
    const [Woeid, setWoeid] = useState(44418);
    const [weatherDetails, setWeatherDetails] = useState([]);
    
    let NEW_API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london`;
    
    // Fetching the cityname
    async function fetchingCity() {
        const Data = await fetch(NEW_API);
        const res = await Data.json();
        setCity(res);
    }

    useEffect(() => {
        fetchingCity();
    }, [inputValue]);
        
    // // Fetching the weather details
    // async function fetchingWeather() {
    //     const newData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${Woeid}/`);
    //     const response = await newData.json();
    //     setWeatherDetails(response);
    // }

    useEffect(() => {
        const newWoeid = city && city.map(item => {
            return (
                setWoeid(item.woeid)
            )
        });   
    }, [city])

    console.log(Woeid);


    // function ConvertedToCelcius() {
    //     setConverted(false);
    // }
    
    // function ConvertedToFaraneit() {
    //     setConverted(true)
    // }

    // function Searchitem(e) {
    //     e.preventDefault();
    //     setInputValue(e.target.location.value);
    //     e.target.reset();
    // }
        
    return (
        <div className="container">
            {/* <button type="button" onClick>get weather</button> */}
            {/* <Search
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
            /> */}
        </div>

    )
}

export default App;


// const [actualWeather, setActualWeather] = useState();
// const [converted, setConverted] = useState(false);

// const newWeather = weatherDetails.consolidated_weather && weatherDetails.consolidated_weather.splice(0, 1);
// console.log(newWeather);