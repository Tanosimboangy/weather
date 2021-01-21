// import React from 'react'

// function actual_weather({actualWeatherDetails}) {

//     return (
//         <div className="actual_weather">
// 						<h2>Today's Highlight</h2>
// 						<ul>
// 							<li>
// 								<ul>
// 									<li><h3>Wind status</h3>	</li>
// 									<li>{Math.round(actualWeatherDetails && actualWeatherDetails.wind_direction)} <span>mph</span></li>
// 									<li>{actualWeatherDetails && actualWeatherDetails.wind_direction_compass}</li>
// 								</ul>
// 							</li>
// 							<li>
// 								<ul>
// 									<li><h3><label htmlFor="humidity">Humidity</label></h3></li>
// 									<li>{Math.round(actualWeatherDetails && actualWeatherDetails.humidity)} <span>%</span></li>
// 									<li><progress id="humidity" max="100" value={actualWeatherDetails && actualWeatherDetails.humidity}>{actualWeatherDetails && actualWeatherDetails.humidity}%</progress></li>
// 								</ul>
// 							</li>
// 							<li>
// 								<ul>
// 									<li><h3>Visibility</h3></li>
// 									<li>{Math.round(actualWeatherDetails && actualWeatherDetails.visibility)} <span>miles</span></li>
// 								</ul>
// 							</li>
// 							<li>
// 								<ul>
// 									<li><h3>Air pressure</h3></li>
// 									<li>{actualWeatherDetails && actualWeatherDetails.air_pressure} <span>mb</span></li>
// 								</ul>
// 							</li>
// 						</ul>
// 					</div>
//     )
// }

// export default actual_weather
