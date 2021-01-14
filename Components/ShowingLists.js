import React from 'react'

function ShowingLists({weatherDetails}) {
	if (weatherDetails !== weatherDetails) {
		return weatherDetails;
	}
	const newData = weatherDetails !== [ ] ? weatherDetails.consolidated_weather : "";
	const newItem = newData?.splice(0, 1);	

	const actualItem = newData && newData[0];
	console.log(actualItem);

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
							console.log(item);
							const newMaxTemp = Math.round(item.max_temp);
							const newMinTemp = Math.round(item.min_temp);
							return (
								<ul key={item.id} className="wrapper">
									<li>{item.applicable_date}</li>
									{/* <li><img src={item.weather_state_abbr} alt=""/></li> */}
									<li><img src="/static/img/weather/png/${item.weather_state_abbr}" alt=""/></li>
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
									<li><span>{Math.round(actualItem && actualItem.wind_direction)}</span> mph</li>
									<li>{actualItem && actualItem.wind_direction_compass}</li>
								</ul>
							</li>
							<li>
								<ul>
									<li><h3><label htmlFor="humidity">Humidity</label></h3></li>
									<li><span>{Math.round(actualItem && actualItem.humidity)}</span>%</li>
									<li><progress id="humidity" max="100" value={actualItem && actualItem.humidity}>{actualItem && actualItem.humidity}%</progress></li>
								</ul>
							</li>
							<li>
								<ul>
									<li><h3>Visibility</h3></li>
									{/* <li><span>{actualItem && actualItem.visibility}</span> miles</li> */}
									<li><span>{Math.round(actualItem && actualItem.visibility)}</span> miles</li>
								</ul>
							</li>
							<li>
								<ul>
									<li><h3>Air pressure</h3></li>
									<li><span>{actualItem && actualItem.air_pressure}</span> mb</li>
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
