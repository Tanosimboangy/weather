// import React, { useEffect, useReducer } from 'react';
// const Context = React.createContext();

// const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
// const API = "https://www.metaweather.com/api/location/search/?query=san";

// function ContextProvider({children}) {
//     const [data, setData] = useState([]);

//     async function fetchingData() {
//         const Data = await fetch(CORS_KEY + API);
//         const res = await Data.json();
//         setData(res);
//     }

//     console.log(data);

//     useEffect(() => {
//         fetchingData();
//     }, [])


//     return(
//         <Context.Provider 
//             value={{data}}>
//                 {children}
//         </Context.Provider>
//     )
// }
// export  { Context, ContextProvider }