import React from 'react'

function ShowingLists({weatherDetails}) {
	if (weatherDetails !== weatherDetails) {
		return weatherDetails;
	}
	const newData = weatherDetails !== [ ] ? weatherDetails.consolidated_weather : "";
	const actualData = weatherDetails !== [] ? "" : weatherDetails.map(item => item);
	console.log(actualData);
    return (
        <div className="showinglists_container">
			{newData === undefined ? "" :  newData.map(item => {
				return (
					<div key={item.id}>

						<ul>
							<li>{item.max_temp}</li>
							<li>{item.min_temp}</li>
						</ul>
					</div>
				)
			})}
			<div className="actual_weather">
				<h2>Today's Highlight</h2>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
        </div>
    )
}

export default ShowingLists
