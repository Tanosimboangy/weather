import React from 'react';

function Search({
    weatherDetails,
    data,
    getWeather,
    ShowingWeatherDetails,
    Searchitem
}) {

    if (weatherDetails !== weatherDetails) {
        console.log(weatherDetails);
        return weatherDetails;
    }
    const newData = weatherDetails !== [] ? weatherDetails.consolidated_weather : "";
    const actualItem = newData && newData[0];
    // const weathedetail = actualItem.map(item => item);
    // console.log(weathedetail);
    // console.log(actualItem.weather_state_abbr);
    // const weatherPicture = `https://www.metaweather.com//static/img/weather/${actualItem.weather_state_abbr}.svg`


    return (
        <div className="search_container">
                <button 
                    className="search">
                        Search for places
                </button>
                <div className="search_form">
                    <div className="form">
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
                                        onClick={ShowingWeatherDetails}
                                        value={location.woeid}
                                        >
                                            {location.title}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* <div><img src={weatherPicture} alt="weater picture"/></div> */}
                {/* <div>{actualItem.the_temp}</div> */}
                {/* <div>{actualItem.weather_state_name}</div> */}
            </div>
    )
}

export default Search
