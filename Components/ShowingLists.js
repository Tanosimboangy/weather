import React from 'react';
// import { format } from 'date-fns'	;
// import {moment} from 'moment';
import dateFormat from 'dateformat';



function ShowingLists({weatherDetails}) {
	if (weatherDetails !== weatherDetails) {
		return weatherDetails;
	}
	const newData = weatherDetails !== [ ] ? weatherDetails.consolidated_weather : "";
	const newItem = newData?.splice(0, 1);	

	const actualItem = newData && newData[0];

	// function DateFormat(date) {
	// 	const day = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat']   
	// 	const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Okt','Nov','Dec'] 
	// 	let dateFormat = new Date(date)
	// 	let newDay = day[dateFormat.getDay()]
	// 	let newDate = dateFormat.getDate()
	// 	let newMonth = month[dateFormat.getMonth()]
	// 	return `${newDay}, ${newDate} ${newMonth}`
	// }
	// DateFormat();

    return (
		<>
			<div className="showinglists_container">
				<div className="sub_container">
					<div className="degree_button">
						<button type="button">Celcius</button>
						<button type="button">Faraneit</button>
					</div>
					<div className="wrapper_container">
						{newData === undefined ? "" :  newData.map(item => {
							const newMaxTemp = Math.round(item.max_temp);
							const newMinTemp = Math.round(item.min_temp);
							const weatherLogo = `https://www.metaweather.com//static/img/weather/${item.weather_state_abbr}.svg`
							return (
								<ul key={item.id} className="wrapper">
									<li>{item.applicable_date}</li>
									{/* <li>DateFormat({item.applicable_date})</li> */}
									<li><img src={weatherLogo} /></li>
									<li>
										<ul>
											<li>{newMaxTemp}</li>
											<li>{newMinTemp}</li>
										</ul>
									</li>
								</ul>
							)
						})}
					</div>
					<div className="actual_weather">
						<h2>Today's Highlight</h2>
						<ul>
							<li>
								<ul>
									<li><h3>Wind status</h3>	</li>
									<li>{Math.round(actualItem && actualItem.wind_direction)}mph</li>
									<li>{actualItem && actualItem.wind_direction_compass}</li>
								</ul>
							</li>
							<li>
								<ul>
									<li><h3><label htmlFor="humidity">Humidity</label></h3></li>
									<li>{Math.round(actualItem && actualItem.humidity)} %</li>
									<li><progress id="humidity" max="100" value={actualItem && actualItem.humidity}>{actualItem && actualItem.humidity}%</progress></li>
								</ul>
							</li>
							<li>
								<ul>
									<li><h3>Visibility</h3></li>
									<li>{Math.round(actualItem && actualItem.visibility)} miles</li>
								</ul>
							</li>
							<li>
								<ul>
									<li><h3>Air pressure</h3></li>
									<li>{actualItem && actualItem.air_pressure} mb</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>	
			</div>
		</>
    )
}

export default ShowingLists
