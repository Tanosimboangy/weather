import React from 'react';
import Form from './Form';

function Search(cityTitle, Searchitem, fetchingWeather, converted, actualWeatherDetails) {
    const weatherPicture = `https://www.metaweather.com//static/img/weather/${actualWeatherDetails !== undefined ? actualWeatherDetails.weather_state_abbr : ""}.svg`;

    function OpenToggle() {
        const menuDrawer = document.querySelector(".menu-drawer");
        menuDrawer.className += " open";
    };

    function CloseToggle() {
        const menuDrawer = document.querySelector(".menu-drawer");
        menuDrawer.classList.remove("open");
    };

    const temperature = converted === true ? actualWeatherDetails && Math.round(actualWeatherDetails.the_temp) * 9/5 + 32 : actualWeatherDetails && Math.round(actualWeatherDetails.the_temp);
    {/* °C , °F*/}
    return (
        <div className="search_container">
                <div className="container">
                    <button className="toggle-menu search" type="button" onClick={OpenToggle}>Search for places</button>
                    <div className="menu-drawer">
                        <Form 
                            Searchitem={Searchitem} 
                            CloseToggle={CloseToggle}
                        />
                    </div>
                </div>
                <div className="title">
                    {/* <button onClick={fetchingWeather} type="button">{cityTitle}</button> */}
                </div>
                <ul className="actual_weather_details">
                    <li><img src={weatherPicture} /></li>
                    <li><p>{temperature}</p></li>
                    <li><span>{actualWeatherDetails && actualWeatherDetails.weather_state_name}</span></li>
                    <li><p>{actualWeatherDetails && actualWeatherDetails.applicable_date}</p></li>
                </ul>
            </div>
    )
}

export default Search
