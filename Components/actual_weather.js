// import React from 'react'

// function actual_weather({weatherDetails}) {
// 	const newData = weatherDetails !== [ ] ? weatherDetails.consolidated_weather : "";
// 	const actualItem = newData && newData[0];

//     return (
//         <div className="actual_weather">
// 						<h2>Today's Highlight</h2>
// 						<ul>
// 							<li>
// 								<ul>
// 									<li><h3>Wind status</h3>	</li>
// 									<li>{Math.round(actualItem && actualItem.wind_direction)} <span>mph</span></li>
// 									<li>{actualItem && actualItem.wind_direction_compass}</li>
// 								</ul>
// 							</li>
// 							<li>
// 								<ul>
// 									<li><h3><label htmlFor="humidity">Humidity</label></h3></li>
// 									<li>{Math.round(actualItem && actualItem.humidity)} <span>%</span></li>
// 									<li><progress id="humidity" max="100" value={actualItem && actualItem.humidity}>{actualItem && actualItem.humidity}%</progress></li>
// 								</ul>
// 							</li>
// 							<li>
// 								<ul>
// 									<li><h3>Visibility</h3></li>
// 									<li>{Math.round(actualItem && actualItem.visibility)} <span>miles</span></li>
// 								</ul>
// 							</li>
// 							<li>
// 								<ul>
// 									<li><h3>Air pressure</h3></li>
// 									<li>{actualItem && actualItem.air_pressure} <span>mb</span></li>
// 								</ul>
// 							</li>
// 						</ul>
// 					</div>
//     )
// }

// export default actual_weather
