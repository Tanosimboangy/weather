import React, { useState, useEffect } from 'react';

const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
const API = "https://www.metaweather.com/api/location/search/?query=san";


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
        <h1>Hello world !</h1>
    )
}

export default App;