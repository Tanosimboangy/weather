import React from 'react';
import Form from './Form';

function Search({
    weatherDetails,
    data,
    getWeather,
    ShowingWeatherDetails,
    Searchitem
}) {

    if (weatherDetails !== weatherDetails) {
        return weatherDetails;
    }
    const newData = weatherDetails !== [] ? weatherDetails.consolidated_weather : "";
    const actualItem = newData && newData[0];
    const weatherPicture = `https://www.metaweather.com//static/img/weather/${actualItem !== undefined ? actualItem.weather_state_abbr : ""}.svg`;

    function OpenToggle() {
        const menuDrawer = document.querySelector(".menu-drawer");
        menuDrawer.className += " open";
    };

    function CloseToggle() {
        const menuDrawer = document.querySelector(".menu-drawer");
        menuDrawer.classList.remove("open");
    };

    return (
        <div className="search_container">
                <div className="container">
                    <button 
                        onClick={OpenToggle}
                        className="toggle-menu search">
                        Search for places
                    </button>
                    <div className="menu-drawer">
                        <Form Searchitem={Searchitem} CloseToggle={CloseToggle}/>
                    </div>
                </div>
                <div className="search_form">
                    <div className="form">
                        <div className="title">
                            {data.map(location => {
                                return (
                                    <button
                                        key={location.woeid}
                                        onClick={getWeather}
                                        // onClick={ShowingWeatherDetails}
                                        value={location.woeid}
                                        >
                                            {location.title}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <ul className="actual_weather_details">
                    <li><img src={weatherPicture} alt="weater picture"/></li>
                    <li><p>{actualItem && actualItem.the_temp}</p></li>
                    <li><span>{actualItem && actualItem.weather_state_name}</span></li>
                    <li><p>{actualItem && actualItem.applicable_date}</p></li>
                </ul>
            </div>
    )
}

export default Search
