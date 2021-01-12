import React from 'react'

function ShowingLists({data}) {
    const newData = data.consolidated_weather;
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
        </div>
    )
}

export default ShowingLists
