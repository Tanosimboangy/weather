// import React from 'react'

// function future_weather({fiveDayslWeatherDetails}) {

//     return (
//         <div className="wrapper_container">
// 						{fiveDayslWeatherDetails &&  fiveDayslWeatherDetails.map(item => {
// 							const newMaxTemp = Math.round(item.max_temp);
// 							const newMinTemp = Math.round(item.min_temp);
// 							const weatherLogo = `https://www.metaweather.com//static/img/weather/${item.weather_state_abbr}.svg`
// 							return (
// 								<ul key={item.id} className="wrapper">
// 									<li>{item.applicable_date}</li>
// 									<li><img src={weatherLogo} /></li>
// 									<li>
// 										<ul>
// 											<li>{newMaxTemp}</li>
// 											<li>{newMinTemp}</li>
// 										</ul>
// 									</li>
// 								</ul>
// 							)
// 						})}
// 					</div>
//     )
// }

// export default future_weather
