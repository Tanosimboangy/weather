import React from 'react'

function Search() {

    function showingSearchPage() {
        console.log("I am clicked");
    }

    return (
        <div className="search_container">
            <button onClick={showingSearchPage}>Search for places</button>
        </div>
    )
}

export default Search
