import React, { useState } from 'react';

function Search({cityTitle, Searchitem, fetchingWeather, actualWeatherDetails}) {
    const [showForm, setShowForm] = useState(false)

    function showSearch() {
        setShowForm(!showForm);
    }

    return (
        <div className="search">
            <button className="toggle_btn" onClick={showSearch}>Search for places</button>
            {
                showForm ?
                <div className="container">
                    <form onSubmit={Searchitem} className="toggle_search">
                        <input type="text" name="location" required/>
                        <button className="submit_button" type="submit">Search</button>
                    </form>
                    <button type="button" onClick={fetchingWeather}>{cityTitle}</button>
                </div> : null
            }
            {
                actualWeatherDetails === undefined ?
                <h1>Loading ...</h1> :
                <ul className="actual_weather_details">
                    <li><img src={`https://www.metaweather.com//static/img/weather/${actualWeatherDetails.weather_state_abbr}.svg`}/></li>
                    <li><span>{actualWeatherDetails.weather_state_name}</span></li>
                    <li><p>{actualWeatherDetails.applicable_date}</p></li>
                    <li><p>{cityTitle}</p></li>
                </ul>
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