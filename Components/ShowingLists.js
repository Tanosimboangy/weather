import React from 'react'

function ShowingLists({data}) {
    const newData = data.consolidated_weather;
    console.log(newData);
    return (
        <div className="showinglists_container">
            {newData.map(item => {
                return (
                    <div key={item.id}>
                        {item.air_pressure}
                        {item.visibility}
                        {item.humidity}
                    </div>
                )
            })}
        </div>
    )
}

export default ShowingLists
