import React from 'react'

function ShowingLists({weatherDetails}) {
	if (weatherDetails !== weatherDetails) {
		return weatherDetails;
	}
	const newData = weatherDetails !== [ ] ? weatherDetails.consolidated_weather : "";
	const newItem = newData?.splice(0, 1);
	console.log(newItem);

	// const actualItem = newData[0];
	// console.log(actualItem);

    return (
        <div className="showinglists_container">
			{newData === undefined ? "" :  newData.map(item => {
				const newMaxTemp = Math.round(item.max_temp);
				const newMinTemp = Math.round(item.min_temp);
				return (
					<ul key={item.id} className="wrapper">
						<li>{item.applicable_date}</li>
						<li>
							<ul>
								<li>{newMaxTemp}</li>
								<li>{newMinTemp}</li>
							</ul>
						</li>
					</ul>
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
