import React, { useState, useEffect } from 'react';
import Search from './Search';
import ShowingLists from './ShowingLists';

const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
const API = "https://www.metaweather.com/api/location/search/?query=a";
// const API_LOCATION = "api/location/search/?query=a";

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

    return (
        <div className="container">
            <Search data={data} />
            <ShowingLists />
        </div>

    )
}

export default App;