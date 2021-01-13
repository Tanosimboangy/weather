import React from 'react';

function Search({
    data,
    getWeather,
    ShowingWeatherDetails,
    Searchitem }) {

    return (
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
    )
}

export default Search
