// import React, {useState} from 'react';
// import Form from './Form';

// function Search({weatherDetails, data, getWeather, Searchitem, converted}) {
//     const actualItem = newData && newData[0];
//     const weatherPicture = `https://www.metaweather.com//static/img/weather/${actualItem !== undefined ? actualItem.weather_state_abbr : ""}.svg`;

//     function OpenToggle() {
//         const menuDrawer = document.querySelector(".menu-drawer");
//         menuDrawer.className += " open";
//     };

//     function CloseToggle() {
//         const menuDrawer = document.querySelector(".menu-drawer");
//         menuDrawer.classList.remove("open");
//     };

//     const temperature = converted === true ? actualItem && Math.round(actualItem.the_temp) * 9/5 + 32 : actualItem && Math.round(actualItem.the_temp);
//     {/* °C , °F*/}
//     return (
//         <div className="search_container">
//                 <div className="container">
//                     <button className="toggle-menu search" onClick={OpenToggle}>Search for places</button>
//                     <div className="menu-drawer">
//                         <Form Searchitem={Searchitem} CloseToggle={CloseToggle}/>
//                     </div>
//                 </div>
//                 <div className="title">
//                     {data.map(location => {
//                         return (
//                             <button
//                                 key={location.woeid}
//                                 onClick={getWeather}
//                                 value={location.woeid}
//                                 >
//                                     {location.title}
//                             </button>
//                         )
//                     })}
//                 </div>
//                 <ul className="actual_weather_details">
//                     <li><img src={weatherPicture} /></li>
//                     <li><p>{temperature}</p></li>
//                     <li><span>{actualItem && actualItem.weather_state_name}</span></li>
//                     <li><p>{actualItem && actualItem.applicable_date}</p></li>
//                 </ul>
//             </div>
//     )
// }

// export default Search
