import React from 'react';

function Search({
    data,
    getWeather,
    ShowingWeatherDetails,
    Searchitem,
    weatherDetails
}) {

    if (weatherDetails !== weatherDetails) {
        return weatherDetails;
    }
    // const newData = weatherDetails !== [] ? weatherDetails.consolidated_weather : "";
    // console.log(newData);
    // const actualItem = newData && newData[0];
	// console.log(actualItem);

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
            </div>
    )
}

export default Search
