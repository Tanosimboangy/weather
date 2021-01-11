import React from 'react'

function Search({data}) {

    function showingSearchPage() {
        console.log("I am clicked");
    }

    return (
        <div className="search_container">
            <button onClick={showingSearchPage}>Search for places</button>
            <div>
                {data.map(item => {
                    return (
                        <div key={item.woeid}>
                            {item.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search
