import React from 'react';

function Search({cityTitle, Searchitem, fetchingWeather, inputValue, actualWeatherDetails}) {

    return (
        <div className="search_container">
            <div className="container">
                <form onSubmit={Searchitem} className="menu_drawer">
                    <input type="text" name="location" required/>
                    <button type="submit">Search</button>
                </form>
                <button type="button" onClick={fetchingWeather}>{cityTitle}</button>
            </div>
            {
                actualWeatherDetails !== undefined ?  
            <ul className="actual_weather_details">
                <li><img src={`https://www.metaweather.com//static/img/weather/${actualWeatherDetails && actualWeatherDetails.weather_state_abbr}.svg`}/></li>
                <li><span>{actualWeatherDetails.weather_state_name}</span></li>
                <li><p>{actualWeatherDetails.applicable_date}</p></li>
            </ul> : ""
            }
        </div>
    )
}

export default Search




















// function OpenToggle() {
//     const menuDrawer = document.querySelector(".menu-drawer");
//     menuDrawer.className += " open";
// };

// function CloseToggle() {
//     const menuDrawer = document.querySelector(".menu-drawer");
//     menuDrawer.classList.remove("open");
// };