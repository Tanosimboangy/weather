import React, { useState, useEffect } from 'react';

const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
const API = "https://www.metaweather.com/api/location/search/?query=a";


function App() {
    const [data, setData] = useState([]);

     async function fetchingData() {
        const Data = await fetch(CORS_KEY + API);
        const res = await Data.json();
        setData(res);
    }
    console.log(data);
    useEffect(() => {
        fetchingData();
    }, [])

    function showingSearchPage() {
        console.log("I am clicked");
    }

    return (
        <div>
            <button onClick={showingSearchPage}>Search for places</button>
            <div>
                {data.map(item => {
                    return (
                        <div key={item.woeid}>{item.title}</div>
                    )
                })}
            </div>
        </div>

    )
}

export default App;