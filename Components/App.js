import React, { useState, useEffect } from 'react';
import Search from './Search';
import ShowingLists from './ShowingLists';

const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
const API = "https://www.metaweather.com/";
const WEATHER = "/api/location/2487956/";

function App() {
    const [data, setData] = useState([]);

     async function fetchingData() {
        const Data = await fetch(CORS_KEY + API + WEATHER);
        const res = await Data.json();
        setData(res);
    }

    console.log(data);

    useEffect(() => {
        fetchingData();
    }, [])

    return (
        <div className="container">
            <Search />
            <ShowingLists data={data} />
        </div>

    )
}

export default App;